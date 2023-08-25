import "./Login.scss";
import logo from "../../assets/images/gloomhaven-logo.png";
import email from "../../assets/images/icons/mail-outline.svg";
import lock from "../../assets/images/icons/lock-closed-outline.svg";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";


function Login() {

    const navigate = useNavigate();
    const form = useRef();

    const login = (e) => {
        e.preventDefault();

        let checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let login;

        if(form.current.username.value.match(checkEmail)) {
            login = {
                email: form.current.username.value,
                password: form.current.password.value,
                checkEmail: true
            }
        } else {
            login = {
                party_name: form.current.username.value,
                password: form.current.password.value,
                checkEmail: false
            }
        }

        axios.post('http://localhost:8080/party/login', login)
            .then((response) => {
                if(response.status === 201) {
                    sessionStorage.setItem('token', response.data);
                    navigate("/Homepage");
                }
            })


    }


    return(
        <div className="login">
            <div className="login__heading">
                <h1 className="login__heading-title">Gloomhaven</h1>
                <h1 className="login__heading-title">Tracker</h1>
            </div>

            <div className="login__container">
                <div className="login__container__top">
                    <img className="login__container__top-img" alt="gloomhaven-logo" src={logo}></img>
                    <h2 className="login__container__top-title">Sign In</h2>
                </div>

                <form onSubmit={login}  className="login__container__form" ref={form}>
                    <div className="login__container__form__input">
                        <img className="login__container__form__input-img" alt="Email-Icon" src={email}></img>
                        <input name="username" className="login__container__form__input-username" type="text" placeholder="Enter Email / Username"></input>
                    </div>
                    <div className="login__container__form__input">
                        <img className="login__container__form__input-img" alt="Lock-Icon" src={lock}></img>
                        <input name="password" className="login__container__form__input-password" type="password" placeholder="Enter Password"></input>
                    </div>
                    <div className="login__container__form__sign-in">
                        <button type="submit" className="login__container__form__sign-in__button">Login</button>
                    </div>
                </form>

                <div className="login__container__footer">
                    <p className="login__container__footer__create-account">Don't have an account? <Link to="/signup" className="login__container__footer__create-account__link">Create an Account</Link></p>
                </div>
            </div>

        </div>
    )
}

export default Login;