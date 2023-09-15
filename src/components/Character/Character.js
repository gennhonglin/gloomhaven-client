import "./Character.scss";
import Brute from "../../assets/images/character-imgs/Brute.webp";
import Tinkerer from "../../assets/images/character-imgs/Tinkerer.webp";
import Berserker from "../../assets/images/character-imgs/Berserker.webp";
import BeastTyrant from "../../assets/images/character-imgs/Beast-Tyrant.webp";
import Cragheart from "../../assets/images/character-imgs/Cragheart.webp";
import Doomstalker from "../../assets/images/character-imgs/Doomstalker.webp";
import Elementalist from "../../assets/images/character-imgs/Elementalist.webp";
import Mindthief from "../../assets/images/character-imgs/Mindthief.webp";
import Nightshroud from "../../assets/images/character-imgs/Nightshroud.webp";
import PlagueHerald from "../../assets/images/character-imgs/PlagueHerald.webp";
import QuarterMaster from "../../assets/images/character-imgs/Quartermaster.webp";
import Sawbones from "../../assets/images/character-imgs/Sawbones.webp";
import Scoundrel from "../../assets/images/character-imgs/Scoundrel.webp";
import Soothsinger from "../../assets/images/character-imgs/Soothsinger.webp";
import SpellWeaver from "../../assets/images/character-imgs/SpellWeaver.webp";
import Summoner from "../../assets/images/character-imgs/Summoner.webp";
import Sunkeeper from "../../assets/images/character-imgs/Sunkeeper.webp";

import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import striding from "../../assets/images/item-imgs/boots-of-striding.png";
import heater from "../../assets/images/item-imgs/heater-shield.png";
import dagger from "../../assets/images/item-imgs/poison-dagger.png";
import hide from "../../assets/images/item-imgs/hide-armor.png";
import minor from "../../assets/images/item-imgs/minor-healing.png";
import stamina from "../../assets/images/item-imgs/minor-stamina.png";
import helmet from "../../assets/images/item-imgs/iron-helmet.png";
import { Link } from "react-router-dom";

function Character() {
    const token = sessionStorage.getItem("token");
    let user = jwt_decode(token);
    // const [exp, setExp] = useState(0);
    const [gold, setGold] = useState(0);
    const [level, setLevel] = useState(1);

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/character/${user.data.party_id}`)
            .then((response) => {
                setCharacters(response.data);
            })
    }, []);


    //For post
    useEffect(() => {
        
    }, [characters]);

    // useEffect(() => {
    //     if(exp >= 45 && exp < 95) {
    //         setLevel(2);
    //     } else if (exp >= 95 && exp < 150) {
    //         setLevel(3);
    //     } else if (exp >= 150 && exp < 210) {
    //         setLevel(4);
    //     } else if (exp >= 210 && exp < 275) {
    //         setLevel(5);
    //     } else if (exp >= 275 && exp < 345) {
    //         setLevel(6);
    //     } else if (exp >= 345 && exp < 420) {
    //         setLevel(7);
    //     } else if (exp >= 420 && exp < 500) {
    //         setLevel(8);
    //     } else if (exp >= 500) {
    //         setLevel(9);
    //     } else if (exp < 45) {
    //         setLevel(1);
    //     }

    // }, [exp])

    //This function increments the exp by 1
    const addExp = (index) => {
        // if(exp === 500) {
        //     setExp(500);
        // } else {
        //     setCharacters(characters[index].exp++);
        // }

        let temp = [...characters];
        
        temp[index].exp += 1;
        setCharacters(temp);

    }

    //This function decrements the exp by 1
    const subExp = () => {
        // if(exp === 0) {
        //     setExp(0);
        // } else {
        //     setExp(exp - 1);
        // }
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

    //this function determines what class img to use

    const imgClass = (character) => {
        if(character === "Brute") {
            return Brute;
        } else if (character === "Tinkerer") {
            return Tinkerer;
        } else if (character === "SpellWeaver") {
            return SpellWeaver;
        } else if (character === "Scoundrel") {
            return Scoundrel;
        } else if (character === "Sawbones") {
            return Sawbones;
        } else if (character === "Mindthief") {
            return Mindthief;
        } else if (character === "Summoner") {
            return Summoner;
        } else if (character === "Sunkeeper") {
            return Sunkeeper;
        } else if (character === "Plague Herald") {
            return PlagueHerald;
        } else if (character === "Cragheart") {
            return Cragheart;
        } else if (character === "Beast Tyrant") {
            return BeastTyrant;
        } else if (character === "Berserker") {
            return Berserker;
        } else if (character === "Elementalist") {
            return Elementalist;
        } else if (character === "Soothsinger") {
            return Soothsinger;
        } else if (character === "Night Shroud") {
            return Nightshroud;
        } else if (character === "Doomstalker") {
            return Doomstalker;
        } else if (character === "Quartermaster") {
            return QuarterMaster;
        }
    }

    return(
        <section className="character">
            
            <div className="character__button">
                <Link to={"/create-character"} className="character__button-link">Create Character</Link>
            </div>

            <div className="character__list">
                {characters.map((data, index) => {
                    return(
                    <div className="character__list__card">
                        <div className="character__list__card__front">
                            <div className="character__list__card__front__top">
                                <h1 className="character__list__card__front__top-class">{data.class}</h1>
                                <img alt="brute" src={imgClass(data.class)} className="character__list__card__front__top-img"></img>
                            </div>
        
                            <div className="character__list__card__front__middle">
                                <div className="character__list__card__front__middle-left">
                                    <h3 className="character__list__card__front__middle-left__name">Name: {data.character_name}</h3>
                                    <div className="character__list__card__front__middle-left__exp">
                                        <h3 className="character__list__card__front__middle-left__exp-title">Exp:</h3>
                                        <div className="character__list__card__front__middle-left__exp__container">
                                            <span className="character__list__card__front__middle-left__exp__container-button" onClick={subExp}>-</span>
                                            <h3 className="character__list__card__front__middle-left__exp__container-points">{data.exp}</h3>
                                            <span className="character__list__card__front__middle-left__exp__container-button" onClick={() => addExp(index)}>+</span>
                                        </div>
                                    
                                    </div>
        
                                </div>
                                <div className="character__list__card__front__middle-right">
                                    <h3 className="character__list__card__front__middle-right__level">Level: {level}</h3>
        
                                    <div className="character__list__card__front__middle-right__gold">
                                        <h3 className="character__list__card__front__middle-right__gold-title">Gold:</h3>
                                        <div className="character__list__card__front__middle-right__gold__container">
                                            <span className="character__list__card__front__middle-right__gold__container-button" onClick={subGold}>-</span>
                                            <h3 className="character__list__card__front__middle-right__gold__container-points">{gold}</h3>
                                            <span className="character__list__card__front__middle-right__gold__container-button" onClick={addGold}>+</span>  
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
        
                            <div className="character__list__card__front__bot">
                                <div className="character__list__card__front__bot-top">
                                    <h3 className="character__list__card__front__bot-top__check">&#10003; :
                                        <input type="checkbox"></input>
                                        <input type="checkbox"></input>
                                        <input type="checkbox"></input>
                                    </h3>
                                    <h3 className="character__list__card__front__bot-top__check">&#10003; :
                                        <input type="checkbox"></input>
                                        <input type="checkbox"></input>
                                        <input type="checkbox"></input>
                                    </h3>
                                    <h3 className="character__list__card__front__bot-top__check">&#10003; :
                                        <input type="checkbox"></input>
                                        <input type="checkbox"></input>
                                        <input type="checkbox"></input>
                                    </h3>
                                </div>
                                <div className="character__list__card__front__bot-bot">
                                    <h3 className="character__list__card__front__bot-bot__check">&#10003; :
                                        <input type="checkbox"></input>
                                        <input type="checkbox"></input>
                                        <input type="checkbox"></input>
                                    </h3>
                                    <h3 className="character__list__card__front__bot-bot__check">&#10003; :
                                        <input type="checkbox"></input>
                                        <input type="checkbox"></input>
                                        <input type="checkbox"></input>
                                    </h3>
                                    <h3 className="character__list__card__front__bot-bot__check">&#10003; :
                                        <input type="checkbox"></input>
                                        <input type="checkbox"></input>
                                        <input type="checkbox"></input>
                                    </h3>
                                </div>
                            </div>
                        </div>
        
                        <div className="character__list__card__back">
                            <div className="character__list__card__back__items">
                                <h1 className="character__list__card__back__items-class">{data.class}</h1>
                                <img alt="brute" src={Brute} className="character__list__card__back__items-img"></img>
                                <div className="character__list__card__back__items__gear">
                                    <div className="character__list__card__back__items__gear__left">
                                        <div className="character__list__card__back__items__gear__left__item">
                                            <h3 className="character__list__card__back__items__gear__left__item-title">Head:</h3>
                                            <img alt="boots-of-striding" src={data.head_gear} className="character__list__card__back__items__gear__left__item-img"></img>
                                        </div>
        
                                        <div className="character__list__card__back__items__gear__left__item">
                                            <h3 className="character__list__card__back__items__gear__left__item-title">Body:</h3>
                                            <img alt="boots-of-striding" src={hide} className="character__list__card__back__items__gear__left__item-img"></img>
                                        </div>
        
                                        <div className="character__list__card__back__items__gear__left__item">
                                            <h3 className="character__list__card__back__items__gear__left__item-title">Hand:</h3>
                                            <img alt="boots-of-striding" src={heater} className="character__list__card__back__items__gear__left__item-img"></img>
                                        </div>
                                        
                                        <div className="character__list__card__back__items__gear__left__item">
                                            <h3 className="character__list__card__back__items__gear__left__item-title">Boots:</h3>
                                            <img alt="boots-of-striding" src={striding} className="character__list__card__back__items__gear__left__item-img"></img>
                                        </div>
                                    </div>
                                    <div className="character__list__card__back__items__gear__right">
                                        <div className="character__list__card__back__items__gear__right__item">
                                            <h3 className="character__list__card__back__items__gear__right__item-title">Potion:</h3>
                                            <img alt="boots-of-striding" src={minor} className="character__list__card__back__items__gear__right__item-img"></img>
                                        </div>
        
                                        <div className="character__list__card__back__items__gear__right__item">
                                            <h3 className="character__list__card__back__items__gear__right__item-title">Potion:</h3>
                                            <img alt="boots-of-striding" src={minor} className="character__list__card__back__items__gear__right__item-img"></img>
                                        </div>
        
                                        <div className="character__list__card__back__items__gear__right__item">
                                            <h3 className="character__list__card__back__items__gear__right__item-title">Hand:</h3>
                                            <img alt="boots-of-striding" src={dagger} className="character__list__card__back__items__gear__right__item-img"></img>
                                        </div>
        
                                        <div className="character__list__card__back__items__gear__right__item">
                                            <h3 className="character__list__card__back__items__gear__right__item-title">Potion:</h3>
                                            <img alt="boots-of-striding" src={stamina} className="character__list__card__back__items__gear__right__item-img"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Character;