import "./SignUp.scss";
import logo from "../../assets/images/gloomhaven-logo.png";
import email from "../../assets/images/icons/mail-outline.svg";
import person from "../../assets/images/icons/person-circle-outline.svg";
import lock from "../../assets/images/icons/lock-closed-outline.svg";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

function SignUp() {
    const navigate = useNavigate();
    const form = useRef();

    const signup = (e) => {
        e.preventDefault();

        if(form.current.password.value === form.current.confirm.value) {
            const signup = {
                email: form.current.email.value,
                party_name: form.current.party.value,
                password: form.current.password.value
            }

            axios.post('http://localhost:8080/party', signup);
            navigate('/homepage');
        }
    }



    return(
        <div className="sign-up">
            <div className="sign-up__heading">
                <h1 className="sign-up__heading-title">Gloomhaven</h1>
                <h1 className="sign-up__heading-title">Tracker</h1>
            </div>

            <div className="sign-up__container">
                <div className="sign-up__container__top">
                    <img className="sign-up__container__top-img" alt="gloomhaven-logo" src={logo}></img>
                    <h2 className="sign-up__container__top-title">Sign Up</h2>
                </div>

                <form onSubmit={signup} className="sign-up__container__form" ref={form}>
                    <div className="sign-up__container__form__input">
                        <img className="sign-up__container__form__input-img" alt="Email-Icon" src={email}></img>
                        <input name="email" className="sign-up__container__form__input-username" type="text" placeholder="Email"></input>
                    </div>
                    <div className="sign-up__container__form__input">
                        <img className="sign-up__container__form__input-img" alt="Person-Icon" src={person}></img>
                        <input name="party" className="sign-up__container__form__input-username" type="text" placeholder="Party Name"></input>
                    </div>
                    <div className="sign-up__container__form__input">
                        <img className="sign-up__container__form__input-img" alt="Lock-Icon" src={lock}></img>
                        <input name="password" className="sign-up__container__form__input-password" type="password" placeholder="Password"></input>
                    </div>
                    <div className="sign-up__container__form__input">
                        <img className="sign-up__container__form__input-img" alt="Lock-Icon" src={lock}></img>
                        <input name="confirm" className="sign-up__container__form__input-password" type="password" placeholder="Confirm Password"></input>
                    </div>
                    <div className="sign-up__container__form__sign-in">
                        <button type="submit" className="sign-up__container__form__sign-in__button">Sign Up</button>
                    </div>
                </form>

                <div className="sign-up__container__footer">
                    <p className="sign-up__container__footer__create-account">Already Have an Account? <Link to="/login" className="sign-up__container__footer__create-account__link">Login</Link></p>
                </div>
            </div>

        </div>
    )
}

export default SignUp;