import "./Character.scss";
import brute from "../../assets/images/character-imgs/Brute.webp";
import { useEffect, useState } from "react";
import striding from "../../assets/images/item-imgs/boots-of-striding.png";
import heater from "../../assets/images/item-imgs/heater-shield.png";
import dagger from "../../assets/images/item-imgs/poison-dagger.png";
import hide from "../../assets/images/item-imgs/hide-armor.png";
import minor from "../../assets/images/item-imgs/minor-healing.png";
import stamina from "../../assets/images/item-imgs/minor-stamina.png";
import helmet from "../../assets/images/item-imgs/iron-helmet.png";
import { Link } from "react-router-dom";

function Character() {
    const [exp, setExp] = useState(0);
    const [gold, setGold] = useState(0);
    const [bruteLevel, setBruteLevel] = useState(1);

    useEffect(() => {
        if(exp >= 45 && exp < 95) {
            setBruteLevel(2);
        } else if (exp >= 95 && exp < 150) {
            setBruteLevel(3);
        } else if (exp >= 150 && exp < 210) {
            setBruteLevel(4);
        } else if (exp >= 210 && exp < 275) {
            setBruteLevel(5);
        } else if (exp >= 275 && exp < 345) {
            setBruteLevel(6);
        } else if (exp >= 345 && exp < 420) {
            setBruteLevel(7);
        } else if (exp >= 420 && exp < 500) {
            setBruteLevel(8);
        } else if (exp >= 500) {
            setBruteLevel(9);
        } else if (exp < 45) {
            setBruteLevel(1);
        }

    }, [exp])

    //This function increments the exp by 1
    const addExp = () => {
        if(exp === 500) {
            setExp(500);
        } else {
            setExp(exp + 1);
        }
    }

    //This function decrements the exp by 1
    const subExp = () => {
        if(exp === 0) {
            setExp(0);
        } else {
            setExp(exp - 1);
        }
    }

    //This function increments the gold by 1
    const addGold = () => {
        if(gold === 2000) {
            setGold(2000);
        } else {
            setGold(gold + 1);
        }
    }

    //this function decrements the gold by 1

    const subGold = () => {
        if(gold === 0) {
            setGold(0);
        } else {
            setGold(gold - 1);
        }
    }

    return(
        <section className="character">
            
            <div className="character__button">
                <Link to={"/create-character"} className="character__button-link">Create Character</Link>
            </div>

            <div className="character__card">
                <div className="character__card__front">
                    <div className="character__card__front__top">
                        <h1 className="character__card__front__top-class">Brute</h1>
                        <img alt="brute" src={brute} className="character__card__front__top-img"></img>
                    </div>

                    <div className="character__card__front__middle">
                        <div className="character__card__front__middle-left">
                            <h3 className="character__card__front__middle-left__name">Name: Steph</h3>
                            <div className="character__card__front__middle-left__exp">
                                <h3 className="character__card__front__middle-left__exp-title">Exp:</h3>
                                <div className="character__card__front__middle-left__exp__container">
                                    <span className="character__card__front__middle-left__exp__container-button" onClick={subExp}>-</span>
                                    <h3 className="character__card__front__middle-left__exp__container-points">{exp}</h3>
                                    <span className="character__card__front__middle-left__exp__container-button" onClick={addExp}>+</span>
                                </div>
                            
                            </div>

                        </div>
                        <div className="character__card__front__middle-right">
                            <h3 className="character__card__front__middle-right__level">Level: {bruteLevel}</h3>

                            <div className="character__card__front__middle-right__gold">
                                <h3 className="character__card__front__middle-right__gold-title">Gold:</h3>
                                <div className="character__card__front__middle-right__gold__container">
                                    <span className="character__card__front__middle-right__gold__container-button" onClick={subGold}>-</span>
                                    <h3 className="character__card__front__middle-right__gold__container-points">{gold}</h3>
                                    <span className="character__card__front__middle-right__gold__container-button" onClick={addGold}>+</span>  
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="character__card__front__bot">
                        <div className="character__card__front__bot-top">
                            <h3 className="character__card__front__bot-top__check">&#10003; :
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                            </h3>
                            <h3 className="character__card__front__bot-top__check">&#10003; :
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                            </h3>
                            <h3 className="character__card__front__bot-top__check">&#10003; :
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                            </h3>
                        </div>
                        <div className="character__card__front__bot-bot">
                            <h3 className="character__card__front__bot-bot__check">&#10003; :
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                            </h3>
                            <h3 className="character__card__front__bot-bot__check">&#10003; :
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                            </h3>
                            <h3 className="character__card__front__bot-bot__check">&#10003; :
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="character__card__back">
                    <div className="character__card__back__items">
                        <h1 className="character__card__back__items-class">Brute</h1>
                        <img alt="brute" src={brute} className="character__card__back__items-img"></img>
                        <div className="character__card__back__items__gear">
                            <div className="character__card__back__items__gear__left">
                                <div className="character__card__back__items__gear__left__item">
                                    <h3 className="character__card__back__items__gear__left__item-title">Head:</h3>
                                    <img alt="boots-of-striding" src={helmet} className="character__card__back__items__gear__left__item-img"></img>
                                </div>

                                <div className="character__card__back__items__gear__left__item">
                                    <h3 className="character__card__back__items__gear__left__item-title">Body:</h3>
                                    <img alt="boots-of-striding" src={hide} className="character__card__back__items__gear__left__item-img"></img>
                                </div>

                                <div className="character__card__back__items__gear__left__item">
                                    <h3 className="character__card__back__items__gear__left__item-title">Hand:</h3>
                                    <img alt="boots-of-striding" src={heater} className="character__card__back__items__gear__left__item-img"></img>
                                </div>
                                
                                <div className="character__card__back__items__gear__left__item">
                                    <h3 className="character__card__back__items__gear__left__item-title">Boots:</h3>
                                    <img alt="boots-of-striding" src={striding} className="character__card__back__items__gear__left__item-img"></img>
                                </div>
                            </div>
                            <div className="character__card__back__items__gear__right">
                                <div className="character__card__back__items__gear__right__item">
                                    <h3 className="character__card__back__items__gear__right__item-title">Potion:</h3>
                                    <img alt="boots-of-striding" src={minor} className="character__card__back__items__gear__right__item-img"></img>
                                </div>

                                <div className="character__card__back__items__gear__right__item">
                                    <h3 className="character__card__back__items__gear__right__item-title">Potion:</h3>
                                    <img alt="boots-of-striding" src={minor} className="character__card__back__items__gear__right__item-img"></img>
                                </div>

                                <div className="character__card__back__items__gear__right__item">
                                    <h3 className="character__card__back__items__gear__right__item-title">Hand:</h3>
                                    <img alt="boots-of-striding" src={dagger} className="character__card__back__items__gear__right__item-img"></img>
                                </div>

                                <div className="character__card__back__items__gear__right__item">
                                    <h3 className="character__card__back__items__gear__right__item-title">Potion:</h3>
                                    <img alt="boots-of-striding" src={stamina} className="character__card__back__items__gear__right__item-img"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Character;