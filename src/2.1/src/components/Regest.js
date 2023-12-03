import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import "./Regest.css"

function Regest() {

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleRegistration = () => {
        // axios
        // if response positive, push to cabinet
        if (email && login) {
            const newExpiryTime = new Date(new Date().getTime() + 1 * 60 * 1000); // 1 час
            Cookies.set('session', 'active');
            Cookies.set('session_expiry_time', newExpiryTime.toISOString());
            console.log('Новая сессия открыта на 1 час');
            navigate('/cabinet');
        }
    }

    return (
        <div className="d1">
            <div className="d2_1" style={{background: "linear-gradient(225deg, #e25186, #6059ff)"}}>
                <div class="slider-thumb"></div>
            </div>
            <div className="d2_2">
                <div className="d3_1">
                    <a href="https://nil-agency.ru" className="a3_1">
                        {/* <img src="/img/reg/nil logo icon.svg" width={40} /> */}
                        <img src={`${process.env.PUBLIC_URL}/images/nil_logo_icon.png`} height={40} alt="nil"/>
                    </a>
                    <h3 className="h3">Регистрация в NILUrl</h3>
                    <p className="p1">Начните создавать короткие ссылки.</p>
                </div>
                <div className="d3_2">
                    <form className="f3_1">
                        <input
                        type="text"
                        data-t="field:input-login"
                        dir="ltr"
                        aria-invalid="false"
                        autocorrect="off"
                        autocapitalize="off"
                        autocomplete="username"
                        class="in3_1"
                        id="passp-field-login" 
                        name="login"
                        placeholder="Имя пользователя"
                        onChange={e => setLogin(e.target.value)}
                        value={login}/>
                    </form>
                    <form className="f3_2">
                        <input
                        type="email"
                        data-t="field:input-login"
                        dir="ltr"
                        aria-invalid="false"
                        autocorrect="off"
                        autocapitalize="off"
                        autocomplete="username"
                        class="in3_1"
                        id="passp-field-login"
                        name="login"
                        placeholder="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}/>
                    </form>
                    <button
                    onClick={handleRegistration}
                    type="button" className="b3">
                        <p className="p2">Зарегистрироваться</p>
                    </button>
                    <p className="p3_1">Уже имеете аккаунт?
                        <Link className="a3_2" to="/">Войти</Link>
                        .</p>
                </div>
            </div>
        </div>
    );
}

export default Regest;