import "./Character.scss";

import Flip from "../../assets/images/icons/return-down-forward-outline.svg";

//Importing Character Class Images
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

//Importing Gear Components
import HeadGear from "../HeadGear/HeadGear";
import BodyGear from "../BodyGear/BodyGear";
import BootGear from "../BootGear/BootGear";
import HandGear from "../HandGear/HandGear";
import HandGearSecond from "../HandGearSecond/HandGearSecond";
import SmallItemOne from "../SmallItemOne/SmallItemOne";
import SmallItemTwo from "../SmallItemTwo/SmallItemTwo";
import SmallItemThree from "../SmallItemThree/SmallItemThree";

import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

function Character() {
    const token = sessionStorage.getItem("token");
    let user = jwt_decode(token);

    const [characters, setCharacters] = useState([]);
    const [flipCard, setFlipCard] = useState([]);
    const [dualWield, setDualWield] = useState([]);

    const [displayHeadGear, setDisplayHeadGear] = useState(false);
    const [displayBodyGear, setDisplayBodyGear] = useState(false);
    const [displayHandGear, setDisplayHandGear] = useState(false);
    const [displayHandGearSecond, setDisplayHandGearSecond] = useState(false);
    const [displayBootGear, setDisplayBootGear] = useState(false);
    const [displaySmallItemOne, setDisplaySmallItemOne] = useState(false);
    const [displaySmallItemTwo, setDisplaySmallItemTwo] = useState(false);
    const [displaySmallItemThree, setDisplaySmallItemThree] = useState(false);

    const [displayItems, setDisplayItems] = useState("character__list__card__back__items");



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

    const flip = (index) => {
        if(flipCard.includes(index)) {
            setFlipCard(flipCard.filter(item => item !== index));
        } else {
            setFlipCard([...flipCard, index]);
        }
    }

    const dual = (index) => (checkDual) => {
        if(checkDual === true && dualWield.includes(index)) {
            setDualWield(dualWield.filter(item => item !== index));
        } else {
            setDualWield([...dualWield, index]);
        }
    }

    const checkHead = (gear) => {
        if(gear === null) {
            return (      
            <div className="character__list__card__back__items__gear__left__item">
                <h3 className="character__list__card__back__items__gear__left__item-title">Head:</h3>
                <div className="character__list__card__back__items__gear__left__item-null" onClick={() => {hideGear(true); setDisplayHeadGear(true);}}>
                    <h2 className="character__list__card__back__items__gear__left__item-null__plus">+</h2>
                </div>
            </div>
            );
        } else {
            return(
                <div className="character__list__card__back__items__gear__left__item">
                    <h3 className="character__list__card__back__items__gear__left__item-title">Head:</h3>
                    <img alt="boots-of-striding" src={gear} className="character__list__card__back__items__gear__left__item-img" onClick={() => {hideGear(true); setDisplayHeadGear(true);}}></img>
                </div>
            );
        }
    }

    
    const checkBody = (body) => {
        if(body === null) {
            return (
                <div className="character__list__card__back__items__gear__left__item">
                    <h3 className="character__list__card__back__items__gear__left__item-title">Body:</h3>
                    <div className="character__list__card__back__items__gear__left__item-null" onClick={() => {hideGear(true); setDisplayBodyGear(true);}}>
                        <h2 className="character__list__card__back__items__gear__left__item-null__plus">+</h2>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="character__list__card__back__items__gear__left__item">
                    <h3 className="character__list__card__back__items__gear__left__item-title">Body:</h3>
                    <img alt="boots-of-striding" src={body} className="character__list__card__back__items__gear__left__item-img" onClick={() => {hideGear(true); setDisplayBodyGear(true);}}></img>
                </div>
            );
        }
    }

    const checkHands = (chosenHand) => {
            if(chosenHand === null) {

                return(
                    <div className="character__list__card__back__items__gear__left__item">
                        <h3 className="character__list__card__back__items__gear__left__item-title">Hand:</h3>
                        <div className="character__list__card__back__items__gear__left__item-null" onClick={() => {hideGear(true); setDisplayHandGear(true);}}>
                            <h2 className="character__list__card__back__items__gear__left__item-null__plus">+</h2>
                        </div>
                    </div> 
                );
            } else {
                return(
                    <div className="character__list__card__back__items__gear__left__item">
                        <h3 className="character__list__card__back__items__gear__left__item-title">Hand:</h3>
                        <img alt="boots-of-striding" src={chosenHand} className="character__list__card__back__items__gear__left__item-img" onClick={() => {hideGear(true); setDisplayHandGear(true);}}></img>
                    </div> 
                );
            }
        
    }

    const checkBoot = (boots) => {
        if(boots === null) {
            return (
                <div className="character__list__card__back__items__gear__left__item">
                    <h3 className="character__list__card__back__items__gear__left__item-title">Boots:</h3>
                    <div className="character__list__card__back__items__gear__left__item-null" onClick={() => {hideGear(true); setDisplayBootGear(true);}}>
                        <h2 className="character__list__card__back__items__gear__left__item-null__plus">+</h2>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="character__list__card__back__items__gear__left__item">
                    <h3 className="character__list__card__back__items__gear__left__item-title">Boots:</h3>
                    <img alt="boots-of-striding" src={boots} className="character__list__card__back__items__gear__left__item-img" onClick={() => {hideGear(true); setDisplayBootGear(true);}}></img>
                </div>
            );
        }
    }

    
    const checkHandSecond = (chosenHandSecond) => {
        if(chosenHandSecond === null) {
            return (      
            <div className="create-form__card__items__right__gear">
                <h3 className="create-form__card__items__right__gear-title">Hands</h3>
                <div className="create-form__card__items__right__gear-add" onClick={() => {hideGear(true); setDisplayHandGearSecond(true);}}>
                    <h2 className="create-form__card__items__right__gear-add__plus">+</h2>
                </div>
            </div>);
        } else {
            return (      
                <div className="create-form__card__items__right__gear">
                    <h3 className="create-form__card__items__right__gear-title">Hands</h3>
                    <img className="create-form__card__items__right__gear-img" alt="right-hand-gear" src={chosenHandSecond} onClick={() => {hideGear(true); setDisplayHandGearSecond(true);}}></img>
                </div>);
        }
    }

    const checkSmallItemOne = (smallItemOne) => {
        if(smallItemOne === null) {
            return(
                <div className="character__list__card__back__items__gear__right__item">
                    <h3 className="character__list__card__back__items__gear__right__item-title">Small Item:</h3>
                    <div className="character__list__card__back__items__gear__right__item-null" onClick={() => {hideGear(true); setDisplaySmallItemOne(true);}}>
                        <h2 className="character__list__card__back__items__gear__right__item-null__plus">+</h2>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="character__list__card__back__items__gear__right__item">
                    <h3 className="character__list__card__back__items__gear__right__item-title">Small Item:</h3>
                    <img alt="boots-of-striding" src={smallItemOne} className="character__list__card__back__items__gear__right__item-img" onClick={() => {hideGear(true); setDisplaySmallItemOne(true);}}></img>
                </div>
            );
        }
    }

    const checkSmallItemTwo = (smallItemTwo) => {
        if(smallItemTwo === null) {
            return(
                <div className="character__list__card__back__items__gear__right__item">
                    <h3 className="character__list__card__back__items__gear__right__item-title">Small Item:</h3>
                    <div className="character__list__card__back__items__gear__right__item-null" onClick={() => {hideGear(true); setDisplaySmallItemTwo(true);}}>
                        <h2 className="character__list__card__back__items__gear__right__item-null__plus">+</h2>
                    </div>
                </div>
            )
        } else {
            return (      
                <div className="character__list__card__back__items__gear__right__item">
                    <h3 className="character__list__card__back__items__gear__right__item-title">Small Item:</h3>
                    <img alt="boots-of-striding" src={smallItemTwo} className="character__list__card__back__items__gear__right__item-img" onClick={() => {hideGear(true); setDisplaySmallItemTwo(true);}}></img>
                </div>
            );
        }
    }

    const checkSmallItemThree = (smallItemThree) => {
        if(smallItemThree === null) {
            return(
                <div className="character__list__card__back__items__gear__right__item">
                    <h3 className="character__list__card__back__items__gear__right__item-title">Small Item:</h3>
                    <div className="character__list__card__back__items__gear__right__item-null" onClick={() => {hideGear(true); setDisplaySmallItemThree(true);}}>
                        <h2 className="character__list__card__back__items__gear__right__item-null__plus">+</h2>
                    </div>
                </div>
            )
        } else {
            return (      
                <div className="character__list__card__back__items__gear__right__item">
                    <h3 className="character__list__card__back__items__gear__right__item-title">Small Item:</h3>
                    <img alt="boots-of-striding" src={smallItemThree} className="character__list__card__back__items__gear__right__item-img" onClick={() => {hideGear(true); setDisplaySmallItemThree(true);}}></img>
                </div>
            );
        }
    }

    const hideGear = (gear) => {
        if(gear === true) {
            setDisplayItems("character__list__card__back__items hidden");
        } else {
            setDisplayItems("character__list__card__back__items");
        }
    }

    const chosenHead = (index) => (head) => {
        const temp = [...characters];
        temp[index].head_gear = head;
        setCharacters(temp);
    }

    const chosenBody = (index) => (body) => {
        const temp = [...characters];
        temp[index].body_gear = body;
        setCharacters(temp);
    }

    const chosenBoot = (index) => (boot) => {
        const temp = [...characters];
        temp[index].boots_gear = boot;
        setCharacters(temp);
    }

    const chosenHand = (index) => (left) => {
        const temp = [...characters];

        if(!dualWield.includes(index) && temp[index].right_hand_gear === null) {
            temp[index].left_hand_gear = left;
            setCharacters(temp);
        } else if(!dualWield.includes(index) && temp[index].right_hand_gear !== null){
            temp[index].left_hand_gear = left;
            temp[index].right_hand_gear = null;
            setCharacters(temp);
        } else {
            temp[index].left_hand_gear = left;
            setCharacters(temp);
        }
    }

    const chosenHandSecond = (index) => (right) => {
        const temp = [...characters];
        if(!dualWield.includes(index) && temp[index].left_hand_gear === null) {
            temp[index].right_hand_gear = right;
            setCharacters(temp);
        } else if(!dualWield.includes(index) && temp[index].left_hand_gear !== null){
            temp[index].right_hand_gear = right;
            temp[index].left_hand_gear = null;
            setCharacters(temp);
        } else {
            temp[index].right_hand_gear = right;
            setCharacters(temp);
        }
    }

    const chosenDualWield = (index) => (dual) => {
        const temp = [...characters];
        temp[index].left_hand_gear = dual;
        temp[index].right_hand_gear = dual;
        setCharacters(temp);
    }

    const chosenSmallItemOne = (index) => (smallItemOne) => {
        const temp = [...characters];
        temp[index].small_item_one = smallItemOne;
        setCharacters(temp);
    }

    const chosenSmallItemTwo = (index) => (smallItemTwo) => {
        const temp = [...characters];
        temp[index].small_item_two = smallItemTwo;
        setCharacters(temp);
    }

    const chosenSmallItemThree = (index) => (smallItemThree) => {
        const temp = [...characters];
        temp[index].small_item_three = smallItemThree;
        setCharacters(temp);
    }

    return(
        <section className="character">
            
            <div className="character__button">
                <Link to={"/create-character"} className="character__button-link">Create Character</Link>
            </div>

            <div className="character__list">
                {characters.map((data, index) => {
                    return(
                    <div key={data.class} className={`character__list__card ${flipCard.includes(index) ? 'flipped' : ''}`}>
                        <div className="character__list__card__gradient"></div>
                        <img alt={data.class} src={imgClass(data.class)} className="character__list__card-img"></img>
                        <div className="character__list__card__front">
                            <div className="character__list__card__front__top">
                                <h1 className="character__list__card__front__top-class">{data.class}</h1>
                                <img alt="flip-icon" src={Flip} className="character__list__card__front__top-flip" onClick={() => flip(index)}></img>
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
                            <div className={displayItems}>
                                <h1 className="character__list__card__back__items-class">{data.class}</h1>
                                <img alt="flip-icon" src={Flip} className="character__list__card__back__items-flip" onClick={() => flip(index)}></img>
                                <div className="character__list__card__gradient"></div>
                                <img alt={data.class} src={imgClass(data.class)} className="character__list__card__back__items-img"></img>
                                <div className="character__list__card__back__items__gear">
                                    <div className="character__list__card__back__items__gear__left">

                                        {checkHead(data.head_gear)}

                                        {checkBody(data.body_gear)}
        
                                        {checkHands(data.left_hand_gear)}
                                        
                                        {checkBoot(data.boots_gear)}
                                    </div>
                                    <div className="character__list__card__back__items__gear__right">
                                        {checkSmallItemOne(data.small_item_one)}
        
                                        {checkSmallItemTwo(data.small_item_two)}
        
                                        {/* <div className="character__list__card__back__items__gear__right__item">
                                            <h3 className="character__list__card__back__items__gear__right__item-title">Hand:</h3>
                                            <img alt="boots-of-striding" src={dagger} className="character__list__card__back__items__gear__right__item-img"></img>
                                        </div> */}

                                        {checkHandSecond(data.right_hand_gear)}
        
                                        {checkSmallItemThree(data.small_item_three)}
                                    </div>
                                </div>
                            </div>
                            <HeadGear displayHeadGear = {displayHeadGear} displayHeadChange = {setDisplayHeadGear} displayHeadComp = {hideGear} chosenHead = {chosenHead(index)} />
                            <BodyGear displayBodyGear = {displayBodyGear} displayBodyChange = {setDisplayBodyGear} displayBodyComp = {hideGear} chosenBody = {chosenBody(index)}/>
                            <BootGear displayBootGear = {displayBootGear} displayBootChange = {setDisplayBootGear} displayBootComp = {hideGear} chosenBoot = {chosenBoot(index)}/>
                            <HandGear displayHandGear = {displayHandGear} displayHandChange = {setDisplayHandGear} displayHandComp = {hideGear}  chosenHand = {chosenHand(index)} chosenHandSecond = {chosenHandSecond(index)} chosenDualHanded = {chosenDualWield(index)} dualWield = {dual(index)}/>
                            <HandGearSecond displayHandGear = {displayHandGearSecond} displayHandChange = {setDisplayHandGearSecond} displayHandComp = {hideGear} chosenHand = {chosenHandSecond(index)} chosenHandSecond = {chosenHand(index)} chosenDualHanded = {chosenDualWield(index)} dualWield = {dual(index)} />
                            <SmallItemOne displaySmallItemOne = {displaySmallItemOne} displaySmallItemChange = {setDisplaySmallItemOne} displaySmallItemComp = {hideGear} chosenSmallItem = {chosenSmallItemOne(index)}></SmallItemOne>
                            <SmallItemTwo displaySmallItemOne = {displaySmallItemTwo} displaySmallItemChange = {setDisplaySmallItemTwo} displaySmallItemComp = {hideGear} chosenSmallItem = {chosenSmallItemTwo(index)}></SmallItemTwo>
                            <SmallItemThree displaySmallItemOne = {displaySmallItemThree} displaySmallItemChange = {setDisplaySmallItemThree} displaySmallItemComp = {hideGear} chosenSmallItem = {chosenSmallItemThree(index)}></SmallItemThree>
                        </div>
                    </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Character;