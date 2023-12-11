const express = require('express');
const stream = require('stream');
const multer = require('multer');
const { google } = require("googleapis");

const upload = multer();

const auth = new google.auth.GoogleAuth({
    keyFile: 'cred.json',
    scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive',
    ],
});

const spreadsheetId = '1A-Lo9q9eT2gn_QsqmdXmObEbWYb9YfMzW-9392L56BE';

const client = auth.getClient();

const googleSheets = google.sheets({
    version: "v4",
    auth: client
});

const googleDrive = google.drive({
    version: "v3",
    auth: auth
});

const app = express();
app.set('view engine', 'ejs')
    .use(express.urlencoded({ extended: true }))
    .use(express.static(__dirname + '/views'));

const filterArray = (arr, params) => {
    if (params != '') {
        return arr.filter(function(subArr) {
            return subArr.includes(params);
        });
    } else {
        return arr;
    }
}

const fromTofilterArray = (arr, from, to) => {
    if (from || to) {
        return arr.filter(function(subArr) {
            if (from && to)
                return (from <= subArr[4]) && (subArr[4] <= to);
            else if (from)
                return from <= subArr[4];
            else if (to);
                return subArr[4] <= to;
        });
    } else {
        return arr;
    }
}


app.get('/', async (req, res) => {
    
    const {data} = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: 'Лист1',
    });
    
    for(let i = 0 ; i < data.values.length; i++) {
        let temp = data.values[i][5].split('/')[5];
        data.values[i][5] = temp;
    }

    const filter = req.query.filter;
    const from = req.query.from;
    const to = req.query.to;
    const sort = req.query.sort;

    let filteredArray = data.values;
    if (filter) {
        const arr = filter.split(',');
        filteredArray = [];
        for (let i = 0 ; i < arr.length - 1; i++) {
            filteredArray.push(...filterArray(data.values, arr[i]))
        }
        console.log(filteredArray);
    }

    if (from || to)
        filteredArray = fromTofilterArray(filteredArray, from, to);

    if (sort == 'true')
        filteredArray = filteredArray.sort((item1, item2) => item1[4] < item2[4] ? 1 : -1);
    else if (sort == 'false')
        filteredArray = filteredArray.sort((item1, item2) => item1[4] > item2[4] ? 1 : -1);

    res.render('index', {data: filteredArray});
});

app.post('/', async (req, res) => {

    const { textFind } = req.body;
    
    const {data} = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: 'Лист1',
    });
    
    data.values.forEach(item => {
        item[5] = item[5].split('/')[5];
    })
    
    const filteredArray = filterArray(data.values, textFind);

    res.render('index', {data: filteredArray});
});

app.get('/create_item', (req, res) => {
    res.render('createItem');
});

app.post('/create_item', upload.any(), async (req, res) => {

    console.log(req.body);
    console.log(req.files);
    const { body, files } = req;

    const link = await uploadFile(files[0]);

    const metaData = await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: 'Лист1',
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [
                [
                    body.name,
                    body.size,
                    body.price,
                    link,
                ]
            ]
        }
    });

    res.sendStatus(200);
});

app.get('/filter', async (req, res) => {
    const {data} = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: 'Лист1',
    });
    let type = [];
    let power = [];
    let taste = [];

    data.values.forEach((value) => {
        taste.push(value[1]);
        type.push(value[2]);
        power.push(value[3]);
    });

    res.render('Filter', {type: new Set(type), power: new Set(power), taste: new Set(taste)});
});

app.get('/item', async (req, res) => {

    const name = req.query.name;
    const model = req.query.model;
    const power = req.query.power;
    const price = req.query.price;
    const img = req.query.img;

    res.render('Item', {
        name: name,
        model: model,
        power: power,
        price: price,
        img: img,
    });
});

const uploadFile = async (fileObject) => {

    const bufferStream = new stream.PassThrough();
    bufferStream.end(fileObject.buffer);

    const { data } = await googleDrive.files.create({
        media: {
            mimeType: fileObject.mimeType,
            body: bufferStream,
        },
        requestBody: {
            name: fileObject.originalname,
            parents: ["1lsn4BHRNB5xK3D_BBI7_pWglhs31xMcq"],
        },
        fields: "id, name",
    });
    console.log(`Uploaded file ${data.name} ${data.id}`);

    return `https://drive.google.com/file/d/${data.id}/view?usp=sharing`;
};

app.listen(5173, (req, res) => {
    console.log('start server on port 5173');
});