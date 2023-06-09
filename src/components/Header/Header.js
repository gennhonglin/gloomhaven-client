import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/images/gloomhaven-logo.png";

function Header() {
    const [hamburger, setHamburger] = useState("header__nav-hamburger");
    const [menuClick, setMenuClick] = useState(false);
    const [mobileNav, setMobileNav] = useState("header__nav__list");

    const updateMenu = () => {
        if(!menuClick) {
            setHamburger("header__nav-hamburger is-active");
            setMobileNav("header__nav__list is-active");
            setMenuClick(true);
        } else {
            setHamburger("header__nav-hamburger");
            setMobileNav("header__nav__list");
            setMenuClick(false);
        }
    }




    return(
        <header className="header">
            <nav className="header__nav">
                <div className="header__nav__logo">
                    <Link to={'/'}><img className="header__nav__logo-img" alt="GloomHaven Logo" src={Logo}/></Link>
                </div>
                <button className={hamburger} onClick={updateMenu}>
                    <div className="header__nav-hamburger__bar"></div>
                </button>
                <ul className={mobileNav}>
                    <li><Link className="header__nav__list-item">Party</Link></li>
                    <li><Link className="header__nav__list-item">Scenario</Link></li>
                    <li><Link className="header__nav__list-item">Shop</Link></li>
                    <li><Link className="header__nav__list-item">Map</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;