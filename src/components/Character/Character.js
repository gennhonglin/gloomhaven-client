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

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/character/${user.data.party_id}`)
            .then((response) => {
                setCharacters(response.data);
            })
    }, []);


    //For post
    useEffect(() => {
        axios.post(`http://localhost:8080/character/${user.data.party_id}`, characters)
            .then((response) => {
                if(response.status === 204) {
                }
            })

    }, [characters]);


    //This function increments the exp by 1
    const addExp = (index) => {
        
        if(characters[index].exp === 500) {
            return;
        } else {
            let temp = [...characters];
            temp[index].exp++;
            setCharacters(temp);
        }


    }

    //This function decrements the exp by 1
    const subExp = (index) => {
        if(characters[index].exp === 0) {
            return;
        } else {
            let temp = [...characters];
            temp[index].exp--;
            setCharacters(temp);
        }
    }

    //This function increments the gold by 1
    const addGold = (index) => {
        if(characters[index].gold === 2000) {
            return;
        } else {
            let temp = [...characters];
            temp[index].gold++;
            setCharacters(temp);
        }
    }

    //this function decrements the gold by 1

    const subGold = (index) => {
        if(characters[index].gold === 0) {
            return;
        } else {
            let temp = [...characters];
            temp[index].gold--;
            setCharacters(temp);
        }
    }

    const perksCrement = (index, crement) => {

        if(!crement) {
            const temp = [...characters];
            temp[index].perks--;
            setCharacters(temp);
          
        } else {
            const temp = [...characters];
            temp[index].perks++;
            setCharacters(temp);
        }
    }

    const expDisplay = (index) => {
        if(characters[index].exp >= 45 && characters[index].exp < 95) {
            return 2;
        } else if (characters[index].exp >= 95 && characters[index].exp < 150) {
            return 3;
        } else if (characters[index].exp >= 150 && characters[index].exp < 210) {
            return 4;
        } else if (characters[index].exp >= 210 && characters[index].exp < 275) {
            return 5;
        } else if (characters[index].exp >= 275 && characters[index].exp < 345) {
            return 6;
        } else if (characters[index].exp >= 345 && characters[index].exp < 420) {
            return 7;
        } else if (characters[index].exp >= 420 && characters[index].exp < 500) {
            return 8;
        } else if (characters[index].exp >= 500) {
            return 9;
        } else if (characters[index].exp < 45) {
            return 1;
        }
    }




    const perksDisplay = (index) => {
        const checkboxes = [];

        for (let row = 0; row < 2; row++) {
          const rowCheckboxes = [];
          for (let col = 0; col < 9; col++) {
            const checkboxNumber = row * 9 + col + 1;
    
    
            if (col % 3 === 0) {
              rowCheckboxes.push(
                <h3 key={`block-${row}-${col}`} className="character__list__card__front__bot-row__check">
                  &#10003; :
                </h3>
              );
            }

            rowCheckboxes.push(
                <label key={checkboxNumber}>
                  <input type="checkbox" checked={checkboxNumber <= characters[index].perks} readOnly/>
                </label>
              );

          }
          checkboxes.push(<div key={`row-${row}`} className="character__list__card__front__bot-row">{rowCheckboxes}</div>);
        }
    
        return checkboxes;
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
                    <div key={data.class} className="character__list__card">
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
                                            <span className="character__list__card__front__middle-left__exp__container-button" onClick={() => subExp(index)}>-</span>
                                            <h3 className="character__list__card__front__middle-left__exp__container-points">{data.exp}</h3>
                                            <span className="character__list__card__front__middle-left__exp__container-button" onClick={() => addExp(index)}>+</span>
                                        </div>
                                    
                                    </div>
        
                                </div>
                                <div className="character__list__card__front__middle-right">
                                    <h3 className="character__list__card__front__middle-right__level">Level: {expDisplay(index)}</h3>
        
                                    <div className="character__list__card__front__middle-right__gold">
                                        <h3 className="character__list__card__front__middle-right__gold-title">Gold:</h3>
                                        <div className="character__list__card__front__middle-right__gold__container">
                                            <span className="character__list__card__front__middle-right__gold__container-button" onClick={() => subGold(index)}>-</span>
                                            <h3 className="character__list__card__front__middle-right__gold__container-points">{data.gold}</h3>
                                            <span className="character__list__card__front__middle-right__gold__container-button" onClick={() => addGold(index)}>+</span>  
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="character__list__card__front__bot">

                                {perksDisplay(index)}

                                <div className="character__list__card__front__bot__button-container">
                                    <button className="character__list__card__front__bot__button-container__button" onClick={() => {perksCrement(index, false)}}>-</button> 
                                    <button className="character__list__card__front__bot__button-container__button" onClick={() => {perksCrement(index, true)}}>+</button>  
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