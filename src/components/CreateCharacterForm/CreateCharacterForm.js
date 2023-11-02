import "./CreateCharacterForm.scss";
//Import Gear Components
import HeadGear from "../HeadGear/HeadGear";
import BodyGear from "../BodyGear/BodyGear";
import BootGear from "../BootGear/BootGear";
import HandGear from "../HandGear/HandGear";
import HandGearSecond from "../HandGearSecond/HandGearSecond";
import SmallItemOne from "../SmallItemOne/SmallItemOne";
import SmallItemTwo from "../SmallItemTwo/SmallItemTwo";
import SmallItemThree from "../SmallItemThree/SmallItemThree";

//Import Class Images
import Brute from "../../assets/images/character-imgs/Brute.jpg";
import Tinkerer from "../../assets/images/character-imgs/Tinkerer.jpg";
import Berserker from "../../assets/images/character-imgs/Berserker.jpg";
import BeastTyrant from "../../assets/images/character-imgs/Beast-Tyrant.jpg";
import Cragheart from "../../assets/images/character-imgs/Cragheart.jpg";
import Doomstalker from "../../assets/images/character-imgs/Doomstalker.jpg";
import Elementalist from "../../assets/images/character-imgs/Elementalist.jpg";
import Mindthief from "../../assets/images/character-imgs/Mindthief.jpg";
import Nightshroud from "../../assets/images/character-imgs/Nightshroud.jpg";
import PlagueHerald from "../../assets/images/character-imgs/PlagueHerald.jpg";
import QuarterMaster from "../../assets/images/character-imgs/Quartermaster.jpg";
import Sawbones from "../../assets/images/character-imgs/Sawbones.jpg";
import Scoundrel from "../../assets/images/character-imgs/Scoundrel.jpg";
import Soothsinger from "../../assets/images/character-imgs/Soothsinger.jpg";
import SpellWeaver from "../../assets/images/character-imgs/SpellWeaver.jpg";
import Summoner from "../../assets/images/character-imgs/Summoner.jpg";
import Sunkeeper from "../../assets/images/character-imgs/Sunkeeper.jpg";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

function CreateCharacterForm() {
    //Hide and display different parts of the form
    const [selectedClass, setSelectedClass] = useState("none");
    const [cardDisplay, setCardDisplay] = useState("create-form__card hidden");
    const [displayClass, setDisplayClass] = useState("create-form__class");
    const [displayExp, setDisplayExp] = useState("create-form__card__exp hidden");
    const [displayGold, setDisplayGold] = useState("create-form__card__gold hidden");
    const [displayPerks, setDisplayPerks] = useState("create-form__card__perks hidden");
    const [displayItems, setDisplayItems] = useState("create-form__card__items hidden");
    const [hideCharacterName, setHideCharacterName] = useState("create-form__card__character-name");
    const [classTitle, setClassTitle] = useState("create-form__select-class");
    const [selectedImg, setSelectedImg] = useState(null);

    //Display Gear on click
    const [displayHeadGear, setDisplayHeadGear] = useState(false);
    const [displayBodyGear, setDisplayBodyGear] = useState(false);
    const [displayHandGear, setDisplayHandGear] = useState(false);
    const [displayHandGearSecond, setDisplayHandGearSecond] = useState(false);
    const [displayBootGear, setDisplayBootGear] = useState(false);
    const [displaySmallItemOne, setDisplaySmallItemOne] = useState(false);
    const [displaySmallItemTwo, setDisplaySmallItemTwo] = useState(false);
    const [displaySmallItemThree, setDisplaySmallItemThree] = useState(false);

    //Check if user selected hand gear is dual wielded
    const [dualWield, setDualWield] = useState(false);

    //user selected items
    //Change to objects so I dont have to have as many states.
    const [chosenHead, setChosenHead] = useState(null);
    const [chosenBody, setChosenBody] = useState(null);
    const [chosenDualHanded, setChosenDualHanded] = useState(null);
    const [chosenHand, setChosenHand] = useState(null);
    const [chosenHandSecond, setChosenHandSecond] = useState(null);
    const [chosenSmallItem, setChosenSmallItem] = useState(null);
    const [chosenSmallItemTwo, setChosenSmallItemTwo] = useState(null);
    const [chosenSmallItemThree, setChosenSmallItemThree] = useState(null);
    const [chosenBoot, setChosenBoot] = useState(null);

    //Contain the data being given and storing them
    const [characterName, setCharacterName] = useState("");
    const [expCounter, setExpCounter] = useState(0);
    const [goldCounter, setGoldCounter] = useState(0);
    const [perkCounter, setPerkCounter] = useState(0);

    const navigate = useNavigate();
    const form = useRef();
    const token = sessionStorage.getItem("token");
    let user = jwt_decode(token);


    //This useeffect is to display chosen image
    useEffect(()=> {

        //Can change this to a map
        if(selectedClass === "Brute") {
            setSelectedImg(Brute);
        } else if(selectedClass === "Tinkerer"){
            setSelectedImg(Tinkerer);
        } else if(selectedClass === "SpellWeaver") {
            setSelectedImg(SpellWeaver);
        } else if(selectedClass === "Scoundrel") {
            setSelectedImg(Scoundrel);
        } else if(selectedClass === "Sawbones") {
            setSelectedImg(Sawbones);
        } else if(selectedClass === "Mindthief") {
            setSelectedImg(Mindthief);
        } else if(selectedClass === "Summoner") {
            setSelectedImg(Summoner);
        } else if(selectedClass === "Sunkeeper") {
            setSelectedImg(Sunkeeper);
        } else if(selectedClass === "Plague Herald") {
            setSelectedImg(PlagueHerald);
        } else if(selectedClass === "Cragheart") {
            setSelectedImg(Cragheart);
        } else if(selectedClass === "Beast Tyrant") {
            setSelectedImg(BeastTyrant);
        } else if(selectedClass === "Berserker") {
            setSelectedImg(Berserker);
        } else if(selectedClass === "Elementalist") {
            setSelectedImg(Elementalist);
        } else if(selectedClass === "Soothsinger") {
            setSelectedImg(Soothsinger);
        } else if(selectedClass === "Night Shroud") {
            setSelectedImg(Nightshroud);
        } else if(selectedClass === "Doomstalker") {
            setSelectedImg(Doomstalker);
        } else if(selectedClass === "Quartermaster") {
            setSelectedImg(QuarterMaster);
        }

    }, [selectedClass])

    const createCharacter = (e) => {
        e.preventDefault();

        let newChar;

        if(dualWield) {
            newChar = {
                party_id: user.data.party_id,
                class: selectedClass,
                character_name: form.current.cname.value,
                exp: form.current.exp.value,
                gold: form.current.gold.value,
                perks: perkCounter,
                head_gear: chosenHead,
                body_gear: chosenBody,
                left_hand_gear: chosenDualHanded,
                right_hand_gear: chosenDualHanded,
                boots_gear: chosenBoot,
                small_item_one: chosenSmallItem,
                small_item_two: chosenSmallItemTwo,
                small_item_three: chosenSmallItemThree,
                small_item_four: null  
            }
        } else {
            newChar = {
                party_id: user.data.party_id,
                class: selectedClass,
                character_name: form.current.cname.value,
                exp: form.current.exp.value,
                gold: form.current.gold.value,
                perks: perkCounter,
                head_gear: chosenHead,
                body_gear: chosenBody,
                left_hand_gear: chosenHand,
                right_hand_gear: chosenHandSecond,
                boots_gear: chosenBoot,
                small_item_one: chosenSmallItem,
                small_item_two: chosenSmallItemTwo,
                small_item_three: chosenSmallItemThree,
                small_item_four: null  
            }
        }

        axios.post('http://localhost:8080/character', newChar);
        navigate(-1);

    }


    const setName = (event) => {
        if(event.target.value.length < 3 || event.target.value === "") {
            setCharacterName(event.target.value); 
            return;
        } else {
            setCharacterName(event.target.value);
        }
    }

    const setExp = (event) => {
        setExpCounter(event.target.value);
    }

    const setGold = (event) => {
        setGoldCounter(event.target.value);
    }

    const hideName = (e) => {
        e.preventDefault();
        if(characterName.length < 3 || characterName === "") {
            return;
        } else {
            setHideCharacterName("create-form__card__character-name hidden");
            setDisplayExp("create-form__card__exp");
        }
    }

    const hideExp = (e) => {
        e.preventDefault();
        if(expCounter < 0) {
            return;
        } else {
            setDisplayExp("create-form__card__exp hidden");
            setDisplayGold("create-form__card__gold");
        }
    }

    const hideGold = (e) => {
        e.preventDefault();

        if(goldCounter < 0) {
            return;
        } else {
            setDisplayGold("create-form__card__gold hidden");
            setDisplayPerks("create-form__card__perks");
        }
    }

    const hidePerks = (e) => {
        e.preventDefault();
        setDisplayPerks("create-form__card__perks hidden");
        setDisplayItems("create-form__card__items");
    }

    const checkIncrement = (event) => {
        event.preventDefault();
        if(event.target.checked) {
            setPerkCounter(perkCounter + 1);
        } else if(!event.target.checked) {
            setPerkCounter(perkCounter - 1);
        } 
    }

    const checkHead = () => {
        if(chosenHead === null) {
            return (      
            <div className="create-form__card__items__left__gear">
                <h3 className="create-form__card__items__left__gear-title">Head</h3>
                <div className="create-form__card__items__left__gear-add" onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplayHeadGear(true);}}>
                    <h2 className="create-form__card__items__left__gear-add__plus">+</h2>
                </div>
            </div>);
        } else {
            return (      
                <div className="create-form__card__items__left__gear">
                    <h3 className="create-form__card__items__left__gear-title">Head</h3>
                    <img className="create-form__card__items__left__gear-img" alt="head-gear" src={chosenHead} onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplayHeadGear(true);}}></img>
                </div>);
        }
    }

    
    const checkBody = () => {
        if(chosenBody === null) {
            return (      
            <div className="create-form__card__items__left__gear">
                <h3 className="create-form__card__items__left__gear-title">Body</h3>
                <div className="create-form__card__items__left__gear-add" onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplayBodyGear(true);}}>
                    <h2 className="create-form__card__items__left__gear-add__plus">+</h2>
                </div>
            </div>);
        } else {
            return (      
                <div className="create-form__card__items__left__gear">
                    <h3 className="create-form__card__items__left__gear-title">Body</h3>
                    <img className="create-form__card__items__left__gear-img" alt="body-gear" src={chosenBody} onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplayBodyGear(true);}}></img>
                </div>);
        }
    }

    const checkHands = () => {
        if(dualWield === true) {
            return (      
                <div className="create-form__card__items__left__gear">
                    <h3 className="create-form__card__items__left__gear-title">Hands</h3>
                    <img className="create-form__card__items__left__gear-img" alt="dual-wield-hand-gear" src={chosenDualHanded} onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplayHandGear(true);}}></img>
                </div>);
        } else {
            if(chosenHand === null) {
                return (      
                <div className="create-form__card__items__left__gear">
                    <h3 className="create-form__card__items__left__gear-title">Hands</h3>
                    <div className="create-form__card__items__left__gear-add" onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplayHandGear(true);}}>
                        <h2 className="create-form__card__items__left__gear-add__plus">+</h2>
                    </div>
                </div>);
            } else {
                return (      
                    <div className="create-form__card__items__left__gear">
                        <h3 className="create-form__card__items__left__gear-title">Hands</h3>
                        <img className="create-form__card__items__left__gear-img" alt="left-handed-gear" src={chosenHand} onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplayHandGear(true);}}></img>
                    </div>);
            }
        } 
    }

    
    const checkHandsSecond = () => {
        if(dualWield === true) {
            return (      
                <div className="create-form__card__items__right__gear">
                    <h3 className="create-form__card__items__right__gear-title">Hands</h3>
                    <img className="create-form__card__items__right__gear-img" alt="dual-wielded-hand-gear" src={chosenDualHanded} onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplayHandGearSecond(true);}}></img>
                </div>);
        } else {
            if(chosenHandSecond === null) {
                return (      
                <div className="create-form__card__items__right__gear">
                    <h3 className="create-form__card__items__right__gear-title">Hands</h3>
                    <div className="create-form__card__items__right__gear-add" onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplayHandGearSecond(true);}}>
                        <h2 className="create-form__card__items__right__gear-add__plus">+</h2>
                    </div>
                </div>);
            } else {
                return (      
                    <div className="create-form__card__items__right__gear">
                        <h3 className="create-form__card__items__right__gear-title">Hands</h3>
                        <img className="create-form__card__items__right__gear-img" alt="right-hand-gear" src={chosenHandSecond} onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplayHandGearSecond(true);}}></img>
                    </div>);
            }
        }

    }

    const checkSmallItemOne = () => {
        if(chosenSmallItem === null) {
            return(
                <div className="create-form__card__items__right__gear">
                    <h3 className="create-form__card__items__right__gear-title">Small Item</h3>
                    <div className="create-form__card__items__right__gear-add" onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplaySmallItemOne(true);}}>
                        <h2 className="create-form__card__items__right__gear-add__plus">+</h2>
                    </div>
                </div>
            )
        } else {
            return (      
                <div className="create-form__card__items__right__gear">
                    <h3 className="create-form__card__items__right__gear-title">Small Item</h3>
                    <img className="create-form__card__items__right__gear-img" alt="body-gear" src={chosenSmallItem} onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplaySmallItemOne(true);}}></img>
                </div>);
        }
    }

    const checkSmallItemTwo = () => {
        if(chosenSmallItemTwo === null) {
            return(
                <div className="create-form__card__items__right__gear">
                    <h3 className="create-form__card__items__right__gear-title">Small Item</h3>
                    <div className="create-form__card__items__right__gear-add" onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplaySmallItemTwo(true);}}>
                        <h2 className="create-form__card__items__right__gear-add__plus">+</h2>
                    </div>
                </div>
            )
        } else {
            return (      
                <div className="create-form__card__items__right__gear">
                    <h3 className="create-form__card__items__right__gear-title">Small Item</h3>
                    <img className="create-form__card__items__right__gear-img" alt="body-gear" src={chosenSmallItemTwo} onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplaySmallItemTwo(true);}}></img>
                </div>);
        }
    }

    const checkSmallItemThree = () => {
        if(chosenSmallItemThree === null) {
            return(
                <div className="create-form__card__items__right__gear">
                    <h3 className="create-form__card__items__right__gear-title">Small Item</h3>
                    <div className="create-form__card__items__right__gear-add" onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplaySmallItemThree(true);}}>
                        <h2 className="create-form__card__items__right__gear-add__plus">+</h2>
                    </div>
                </div>
            )
        } else {
            return (      
                <div className="create-form__card__items__right__gear">
                    <h3 className="create-form__card__items__right__gear-title">Small Item</h3>
                    <img className="create-form__card__items__right__gear-img" alt="body-gear" src={chosenSmallItemThree} onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplaySmallItemThree(true);}}></img>
                </div>);
        }
    }

    const checkBoot = () => {
        if(chosenBoot === null) {
            return (      
            <div className="create-form__card__items__left__gear">
                <h3 className="create-form__card__items__left__gear-title">Boots</h3>
                <div className="create-form__card__items__left__gear-add" onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplayBootGear(true);}}>
                    <h2 className="create-form__card__items__left__gear-add__plus">+</h2>
                </div>
            </div>);
        } else {
            return (      
                <div className="create-form__card__items__left__gear">
                    <h3 className="create-form__card__items__left__gear-title">Boots</h3>
                    <img className="create-form__card__items__left__gear-img" alt="boot-gear" src={chosenBoot} onClick={() => {setDisplayItems("create-form__card__items hidden"); setDisplayBootGear(true);}}></img>
                </div>);
        }
    }

    




    return(
        <form onSubmit={createCharacter} className="create-form" ref={form}>
            <div className={classTitle}>
                <h2 className="create-form__select-class__title">Select your Class</h2>
            </div>
            <div className={displayClass}>
                <div id="brute" className="create-form__class__container">
                    <h2 className="create-form__class__container-title">Brute</h2>
                    <img src={Brute} alt="Brute" className="create-form__class__container-img" onClick={()=>{ setSelectedClass("Brute"); setCardDisplay("create-form__card"); setDisplayClass("create-form__class hidden"); setClassTitle("create-form__select-class hidden")}}></img>  
                    <div className="create-form__class__container__next">
                        <a className="create-form__class__container__next-button" href="#tinkerer">NEXT</a> 
                    </div> 
                </div>
                <div id="tinkerer" className="create-form__class__container">
                    <div className="create-form__class__container__before">
                        <a className="create-form__class__container__before-button" href="#brute">BEFORE</a> 
                    </div>    
                    <h2 className="create-form__class__container-title">Tinkerer</h2>
                    <img src={Tinkerer} alt="Tinkerer" className="create-form__class__container-img" onClick={()=>{setSelectedClass("Tinkerer"); setCardDisplay("create-form__card"); setDisplayClass("create-form__class hidden"); setClassTitle("create-form__select-class hidden")}}></img>
                    <div className="create-form__class__container__next">
                        <a className="create-form__class__container__next-button" href="#spellweaver">NEXT</a> 
                    </div>    
                </div>
                <div id="spellweaver" className="create-form__class__container">
                    <div className="create-form__class__container__before">
                        <a className="create-form__class__container__before-button" href="#tinkerer">BEFORE</a> 
                    </div>  
                    <h2 className="create-form__class__container-title">SpellWeaver</h2>
                    <img src={SpellWeaver} alt="SpellWeaver" className="create-form__class__container-img" onClick={()=>{setSelectedClass("SpellWeaver"); setCardDisplay("create-form__card"); setDisplayClass("create-form__class hidden"); setClassTitle("create-form__select-class hidden")}}></img>
                    <div className="create-form__class__container__next">
                        <a className="create-form__class__container__next-button" href="#scoundrel">NEXT</a> 
                    </div>     
                </div>
                <div id="scoundrel"  className="create-form__class__container">
                    <div className="create-form__class__container__before">
                        <a className="create-form__class__container__before-button" href="#spellweaver">BEFORE</a> 
                    </div> 
                    <h2 className="create-form__class__container-title">Scoundrel</h2>
                    <img src={Scoundrel} alt="Scoundrel" className="create-form__class__container-img" onClick={()=>{setSelectedClass("Scoundrel"); setCardDisplay("create-form__card"); setDisplayClass("create-form__class hidden"); setClassTitle("create-form__select-class hidden")}}></img>
                    <div className="create-form__class__container__next">
                        <a className="create-form__class__container__next-button" href="#mindthief">NEXT</a> 
                    </div>      
                </div>
                <div id="mindthief"  className="create-form__class__container" >
                    <div className="create-form__class__container__before">
                        <a className="create-form__class__container__before-button" href="#scoundrel">BEFORE</a> 
                    </div>
                    <h2 className="create-form__class__container-title">Mindthief</h2>
                    <img src={Mindthief} alt="Mindthief" className="create-form__class__container-img" onClick={()=>{setSelectedClass("Mindthief"); setCardDisplay("create-form__card");setDisplayClass("create-form__class hidden"); setClassTitle("create-form__select-class hidden")}}></img>
                    <div className="create-form__class__container__next">
                        <a className="create-form__class__container__next-button" href="#cragheart">NEXT</a> 
                    </div>  
                </div>
                <div id="cragheart" className="create-form__class__container">
                    <div className="create-form__class__container__before">
                        <a className="create-form__class__container__before-button" href="#mindthief">BEFORE</a> 
                    </div> 
                    <h2 className="create-form__class__container-title">Cragheart</h2>
                    <img src={Cragheart} alt="Cragheart" className="create-form__class__container-img" onClick={()=>{setSelectedClass("Cragheart"); setCardDisplay("create-form__card"); setDisplayClass("create-form__class hidden"); setClassTitle("create-form__select-class hidden")}}></img>
                    <div className="create-form__class__container__next">
                        <a className="create-form__class__container__next-button" href="#berserker">NEXT</a> 
                    </div>       
                </div>
                <div id="berserker" className="create-form__class__container">
                    <div className="create-form__class__container__before">
                        <a className="create-form__class__container__before-button" href="#cragheart">BEFORE</a> 
                    </div>  
                    <h2 className="create-form__class__container-title">Berserker</h2>
                    <img src={Berserker} alt="Berserker" className="create-form__class__container-img" onClick={()=>{setSelectedClass("Berserker"); setCardDisplay("create-form__card"); setDisplayClass("create-form__class hidden"); setClassTitle("create-form__select-class hidden")}}></img>
                    <div className="create-form__class__container__next">
                        <a className="create-form__class__container__next-button" href="#soothsinger">NEXT</a> 
                    </div>      
                </div>
                <div id="soothsinger" className="create-form__class__container">
                    <div className="create-form__class__container__before">
                        <a className="create-form__class__container__before-button" href="#berserker">BEFORE</a> 
                    </div>  
                    <h2 className="create-form__class__container-title">Soothsinger</h2>
                    <img src={Soothsinger} alt="Soothsinger" className="create-form__class__container-img" onClick={()=>{setSelectedClass("Soothsinger"); setCardDisplay("create-form__card"); setDisplayClass("create-form__class hidden"); setClassTitle("create-form__select-class hidden")}}></img>
                    <div className="create-form__class__container__next">
                        <a className="create-form__class__container__next-button" href="#sunkeeper">NEXT</a> 
                    </div>      
                </div>
                <div id="sunkeeper" className="create-form__class__container">
                    <div className="create-form__class__container__before">
                        <a className="create-form__class__container__before-button" href="#soothsinger">BEFORE</a> 
                    </div>  
                    <h2 className="create-form__class__container-title">Sunkeeper</h2>
                    <img src={Sunkeeper} alt="Sunkeeper" className="create-form__class__container-img" onClick={()=>{setSelectedClass("Sunkeeper"); setCardDisplay("create-form__card"); setDisplayClass("create-form__class hidden"); setClassTitle("create-form__select-class hidden")}}></img>
                    <div className="create-form__class__container__next">
                        <a className="create-form__class__container__next-button" href="#elementalist">NEXT</a> 
                    </div>      
                </div>
                <div id="elementalist" className="create-form__class__container">
                    <div className="create-form__class__container__before">
                        <a className="create-form__class__container__before-button" href="#sunkeeper">BEFORE</a> 
                    </div>  
                    <h2 className="create-form__class__container-title">Elementalist</h2>
                    <img src={Elementalist} alt="Elementalist" className="create-form__class__container-img" onClick={()=>{setSelectedClass("Elementalist"); setCardDisplay("create-form__card"); setDisplayClass("create-form__class hidden"); setClassTitle("create-form__select-class hidden")}}></img>
                    <div className="create-form__class__container__next">
                        <a className="create-form__class__container__next-button" href="#beast-tyrant">NEXT</a> 
                    </div>     
                </div>
                <div id="beast-tyrant" className="create-form__class__container">
                    <div className="create-form__class__container__before">
                        <a className="create-form__class__container__before-button" href="#elementalist">BEFORE</a> 
                    </div>  
                    <h2 className="create-form__class__container-title">Beast Tyrant</h2>
                    <img src={BeastTyrant} alt="Beast-Tyrant" className="create-form__class__container-img" onClick={()=>{setSelectedClass("Beast Tyrant"); setCardDisplay("create-form__card"); setDisplayClass("create-form__class hidden"); setClassTitle("create-form__select-class hidden")}}></img>
                    <div className="create-form__class__container__next">
                        <a className="create-form__class__container__next-button" href="#night-shroud">NEXT</a> 
                    </div>     
                </div>
                <div id="night-shroud" className="create-form__class__container">
                    <div className="create-form__class__container__before">
                        <a className="create-form__class__container__before-button" href="#beast-tyrant">BEFORE</a> 
                    </div> 
                    <h2 className="create-form__class__container-title">Night Shroud</h2>
                    <img src={Nightshroud} alt="Nightshroud" className="create-form__class__container-img" onClick={()=>{setSelectedClass("Night Shroud"); setCardDisplay("create-form__card"); setDisplayClass("create-form__class hidden"); setClassTitle("create-form__select-class hidden")}}></img>
                    <div className="create-form__class__container__next">
                        <a className="create-form__class__container__next-button" href="#doomstalker">NEXT</a> 
                    </div>     
                </div>
                <div id="doomstalker" className="create-form__class__container">
                    <div className="create-form__class__container__before">
                        <a className="create-form__class__container__before-button" href="#night-shroud">BEFORE</a> 
                    </div> 
                    <h2 className="create-form__class__container-title">Doomstalker</h2>
                    <img src={Doomstalker} alt="Doomstalker" className="create-form__class__container-img" onClick={()=>{setSelectedClass("Doomstalker"); setCardDisplay("create-form__card"); setDisplayClass("create-form__class hidden"); setClassTitle("create-form__select-class hidden")}}></img>
                    <div className="create-form__class__container__next">
                        <a className="create-form__class__container__next-button" href="#plague-herald">NEXT</a> 
                    </div>      
                </div>
                <div id="plague-herald" className="create-form__class__container">
                    <div className="create-form__class__container__before">
                        <a className="create-form__class__container__before-button" href="#doomstalker">BEFORE</a> 
                    </div>  
                    <h2 className="create-form__class__container-title">Plague Herald</h2>
                    <img src={PlagueHerald} alt="Plague-Herald" className="create-form__class__container-img" onClick={()=>{setSelectedClass("Plague Herald"); setCardDisplay("create-form__card"); setDisplayClass("create-form__class hidden"); setClassTitle("create-form__select-class hidden")}}></img>
                    <div className="create-form__class__container__next">
                        <a className="create-form__class__container__next-button" href="#quartermaster">NEXT</a> 
                    </div>      
                </div>
                <div id="quartermaster" className="create-form__class__container">
                    <div className="create-form__class__container__before">
                        <a className="create-form__class__container__before-button" href="#plague-herald">BEFORE</a> 
                    </div>  
                    <h2 className="create-form__class__container-title">Quartermaster</h2>
                    <img src={QuarterMaster} alt="Quartermaster" className="create-form__class__container-img" onClick={()=>{setSelectedClass("Quartermaster"); setCardDisplay("create-form__card"); setDisplayClass("create-form__class hidden"); setClassTitle("create-form__select-class hidden")}}></img>
                    <div className="create-form__class__container__next">
                        <a className="create-form__class__container__next-button" href="#sawbones">NEXT</a> 
                    </div>     
                </div>
                <div id="sawbones" className="create-form__class__container">
                    <div className="create-form__class__container__before">
                        <a className="create-form__class__container__before-button" href="#quartermaster">BEFORE</a> 
                    </div> 
                    <h2 className="create-form__class__container-title">Sawbones</h2>
                    <img src={Sawbones} alt="Sawbones" className="create-form__class__container-img" onClick={()=>{setSelectedClass("Sawbones"); setCardDisplay("create-form__card"); setDisplayClass("create-form__class hidden"); setClassTitle("create-form__select-class hidden")}}></img>
                    <div className="create-form__class__container__next">
                        <a className="create-form__class__container__next-button" href="#summoner">NEXT</a> 
                    </div>     
                </div>
                <div id="summoner" className="create-form__class__container">
                    <div className="create-form__class__container__before">
                        <a className="create-form__class__container__before-button" href="#sawbones">BEFORE</a> 
                    </div>  
                    <h2 className="create-form__class__container-title">Summoner</h2>
                    <img src={Summoner} alt="Summoner" className="create-form__class__container-img" onClick={()=>{setSelectedClass("Summoner"); setCardDisplay("create-form__card"); setDisplayClass("create-form__class hidden"); setClassTitle("create-form__select-class hidden")}}></img>    
                </div>
            </div>
            <div className={cardDisplay}>
                <img src={selectedImg} alt="class" className="create-form__card-img"></img>
                <h2 className="create-form__card-title">{selectedClass}</h2>
                <div className={hideCharacterName}>
                    <div className="create-form__card__character-name__back">
                        <h2 className="create-form__card__character-name__back-button" onClick={() => {  setDisplayClass("create-form__class"); setCardDisplay("create-form__card hidden"); setClassTitle("create-form__select-class");}}>BACK</h2> 
                    </div>
                    <label className="create-form__card__character-name__name">Character Name: </label>
                    <input className="create-form__card__character-name__input" type="text" id="cname" name="cname" minLength="3" maxLength="20" defaultValue={characterName} onChange={setName} required></input>
                    <button className="create-form__card__character-name__button" onClick={hideName}>Enter</button>
                </div>
                <div className={displayExp}>
                    <div className="create-form__card__exp__back">
                        <h2 className="create-form__card__exp__back-button" onClick={() => { setHideCharacterName("create-form__card__character-name"); setDisplayExp("create-form__card__exp hidden");}}>BACK</h2> 
                    </div>
                    <label className="create-form__card__exp__title">EXP: </label>
                    <input className="create-form__card__character-name__input" type="number" id="exp" name="exp" min="0" max="500" defaultValue="0" onChange={setExp} required></input>
                    <button className="create-form__card__character-name__button" onClick={hideExp}>Enter</button>
                </div>
                <div className={displayGold}>
                    <div className="create-form__card__gold__back">
                        <h2 className="create-form__card__gold__back-button" onClick={() => { setDisplayExp("create-form__card__exp"); setDisplayGold("create-form__card__gold hidden");}}>BACK</h2> 
                    </div>
                    <label className="create-form__card__gold__title">Gold: </label>
                    <input className="create-form__card__character-name__input" type="number" id="gold" name="gold" min="0" max="2000" defaultValue="0" onChange={setGold} required></input>
                    <button className="create-form__card__character-name__button" onClick={hideGold}>Enter</button>
                </div>
                <div className={displayPerks}>
                    <div className="create-form__card__perks__back">
                        <h2 className="create-form__card__perks__back-button" onClick={() => { setDisplayGold("create-form__card__gold"); setDisplayPerks("create-form__card__perks hidden");}}>BACK</h2> 
                    </div>
                    <h2 className="create-form__card__perks__title">Perks</h2>
                    <div className="create-form__card__perks__top">
                        <h3 className="create-form__card__perks__top__check">&#10003; :
                            <input type="checkbox" onChange={checkIncrement}></input>
                            <input type="checkbox" onChange={checkIncrement}></input>
                            <input type="checkbox" onChange={checkIncrement}></input>
                        </h3>
                        <h3 className="create-form__card__perks__top__check">&#10003; :
                            <input type="checkbox" onChange={checkIncrement}></input>
                            <input type="checkbox" onChange={checkIncrement}></input>
                            <input type="checkbox" onChange={checkIncrement}></input>
                        </h3>
                        <h3 className="create-form__card__perks__top__check">&#10003; :
                            <input type="checkbox" onChange={checkIncrement}></input>
                            <input type="checkbox" onChange={checkIncrement}></input>
                            <input type="checkbox" onChange={checkIncrement}></input>
                        </h3>
                    </div>
                        <div className="create-form__card__perks__bot">
                            <h3 className="create-form__card__perks__bot__check">&#10003; :
                                <input type="checkbox" onChange={checkIncrement}></input>
                                <input type="checkbox" onChange={checkIncrement}></input>
                                <input type="checkbox" onChange={checkIncrement}></input>
                            </h3>
                            <h3 className="create-form__card__perks__bot__check">&#10003; :
                                <input type="checkbox" onChange={checkIncrement}></input>
                                <input type="checkbox" onChange={checkIncrement}></input>
                                <input type="checkbox" onChange={checkIncrement}></input>
                            </h3>
                            <h3 className="create-form__card__perks__bot__check">&#10003; :
                                <input type="checkbox" onChange={checkIncrement}></input>
                                <input type="checkbox" onChange={checkIncrement}></input>
                                <input type="checkbox" onChange={checkIncrement}></input>
                            </h3>
                        </div>
                        <button className="create-form__card__perks__enter" onClick={hidePerks}>Enter</button>
                </div>
                <div className={displayItems}>
                    <div className="create-form__card__items__back">
                        <h2 className="create-form__card__items__back-button" onClick={() => { setDisplayPerks("create-form__card__perks"); setDisplayItems("create-form__card__items hidden");}}>BACK</h2> 
                    </div>

                    <div className="create-form__card__items__submit">
                        <button type="submit" className="create-form__card__items__submit-button">Create</button>
                    </div>

                    <div className="create-form__card__items__left">
                        {checkHead()}
                        
                        {checkBody()}

                        {checkHands()}

                        {checkBoot()}
            
                    </div>

                    <div className="create-form__card__items__right">
                        {checkSmallItemOne()}

                        {checkSmallItemTwo()}

                        {checkHandsSecond()}

                        {checkSmallItemThree()}
                    </div>
                
                </div>
                <HeadGear displayHeadGear = {displayHeadGear} displayHeadChange = {setDisplayHeadGear} displayHeadComp = {setDisplayItems} chosenHead = {setChosenHead}/>
                <BodyGear displayBodyGear = {displayBodyGear} displayBodyChange = {setDisplayBodyGear} displayBodyComp = {setDisplayItems} chosenBody = {setChosenBody}/>
                <HandGear displayHandGear = {displayHandGear} displayHandChange = {setDisplayHandGear} displayHandComp = {setDisplayItems}  chosenHand = {setChosenHand} chosenHandSecond = {setChosenHandSecond} chosenDualHanded = {setChosenDualHanded} dualWield = {setDualWield}/>
                <HandGearSecond displayHandGear = {displayHandGearSecond} displayHandChange = {setDisplayHandGearSecond} displayHandComp = {setDisplayItems} chosenHand = {setChosenHandSecond} chosenHandSecond = {setChosenHand} chosenDualHanded = {setChosenDualHanded} dualWield = {setDualWield} />
                <SmallItemOne displaySmallItemOne = {displaySmallItemOne} displaySmallItemChange = {setDisplaySmallItemOne} displaySmallItemComp = {setDisplayItems} chosenSmallItem = {setChosenSmallItem}></SmallItemOne>
                <SmallItemTwo displaySmallItemOne = {displaySmallItemTwo} displaySmallItemChange = {setDisplaySmallItemTwo} displaySmallItemComp = {setDisplayItems} chosenSmallItem = {setChosenSmallItemTwo}></SmallItemTwo>
                <SmallItemThree displaySmallItemOne = {displaySmallItemThree} displaySmallItemChange = {setDisplaySmallItemThree} displaySmallItemComp = {setDisplayItems} chosenSmallItem = {setChosenSmallItemThree}></SmallItemThree>
                <BootGear displayBootGear = {displayBootGear} displayBootChange = {setDisplayBootGear} displayBootComp = {setDisplayItems} chosenBoot = {setChosenBoot}/>    
            </div>

        </form>
    )
}

export default CreateCharacterForm;