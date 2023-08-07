import "./Login.scss";
import logo from "../../assets/images/gloomhaven-logo.png";
import email from "../../assets/images/icons/mail-outline.svg";
import lock from "../../assets/images/icons/lock-closed-outline.svg";


function Login() {
    return(
        <div className="login">
            <div className="login__heading">
                <h1 className="login__heading-title">Gloomhaven</h1>
                <h1 className="login__heading-title">Tracker</h1>
            </div>

            <div className="login__container">
                <div className="login__container__top">
                    <img className="login__container__top-img" alt="board-game-logo" src={logo}></img>
                    <h2 className="login__container__top-title">Sign In</h2>
                </div>

                <form className="login__container__form">
                    <div className="login__container__form__input">
                        <img className="login__container__form__input-img" alt="Email-Icon" src={email}></img>
                        <input name="username" className="login__container__form__input-username" type="text" placeholder="Enter Email / Username"></input>
                    </div>
                    <div className="login__container__form__input">
                        <img className="login__container__form__input-img" alt="Lock-Icon" src={lock}></img>
                        <input name="password" className="login__container__form__input-password" type="password" placeholder="Enter Password"></input>
                    </div>




                </form>
            </div>

        </div>
    )
}

export default Login;