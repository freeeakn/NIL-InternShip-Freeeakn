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


app.get('/', async (req, res) => {
    const {data} = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: 'Лист1',
    });
    
    for(let i = 0 ; i < data.values.length; i++) {
        let temp = data.values[i][4].split('/')[5];
        data.values[i][4] = 'http://drive.google.com/uc?export=view&id=' + temp;
    }

    res.render('index', {data: data.values});
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

app.get('/filter', (req, res) => {
    res.render('Filter');
});

app.get('/item', async (req, res) => {

    const name = req.query.name;
    const model = req.query.model;
    

    const {data} = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: 'Лист1',
    });

    const findArray = (products) => {
        return products.find(product => product[0] === name && product[1] === model);
    }
      
    const result = findArray(data.values);

    let temp = result[4].split('/')[5];
    result[4] = 'http://drive.google.com/uc?export=view&id=' + temp;


    res.render('Item', {
        name: name,
        model: model,
        size: result[2],
        price: result[3],
        img: result[4],
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