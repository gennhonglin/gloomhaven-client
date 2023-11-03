import "./BodyGear.scss";
import hide from "../../assets/images/item-imgs/1-14/gh-003-hide-armor.png";
import leather from "../../assets/images/item-imgs/1-14/gh-004-leather-armor.png";
import invisibility from "../../assets/images/item-imgs/1-14/gh-005-cloak-of-invisibility.png";
import pockets from "../../assets/images/item-imgs/15-21/gh-016-cloak-of-pockets.png";
import chainmail from "../../assets/images/item-imgs/22-28/gh-023-chainmail.png";
import studded from "../../assets/images/item-imgs/29-35/gh-030-studded-leather.png";
import evocation from "../../assets/images/item-imgs/36-42/gh-037-robes-of-evocation.png";
import splintmail from "../../assets/images/item-imgs/43-49/gh-044-splintmail.png";
import shadow from "../../assets/images/item-imgs/50-56/gh-051-shadow-armor.png";
import phasing from "../../assets/images/item-imgs/57-63/gh-058-cloak-of-phasing.png";
import platemail from "../../assets/images/item-imgs/64-151/gh-065-platemail.png";
import blinking from "../../assets/images/item-imgs/64-151/gh-073a-blinking-cape.png";
import swordedge from "../../assets/images/item-imgs/64-151/gh-074a-swordedge-armor.png";
import summoning from "../../assets/images/item-imgs/64-151/gh-100-robes-of-summoning.png";
import second from "../../assets/images/item-imgs/64-151/gh-101-second-skin.png";
import sacrificial from "../../assets/images/item-imgs/64-151/gh-102-sacrificial-robes.png";
import drakescale from "../../assets/images/item-imgs/64-151/gh-103-drakescale-armor.png";
import steam from "../../assets/images/item-imgs/64-151/gh-104-steam-armor.png";
import flea from "../../assets/images/item-imgs/64-151/gh-105-flea-bitten-shawl.png";



function BodyGear(props) {
    
    if(props.displayBodyGear === true) {
        return(
            <div className="body-gear">
                <h1 className="body-gear__title">Body Gear Selection</h1>
                <div className="body-gear__container">
                    <div className="body-gear__container__left">
                        <div className="body-gear__container__left__items">
                            <h3 className="body-gear__container__left__items-title">Hide Armor</h3>
                            <img className="body-gear__container__left__items-img" src={hide} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(hide);}}></img>
                        </div>
                        <div className="body-gear__container__left__items">
                            <h3 className="body-gear__container__left__items-title">Cloak of Invisibility</h3>
                            <img className="body-gear__container__left__items-img" src={invisibility} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(invisibility);}}></img>
                        </div>
                        <div className="body-gear__container__left__items">
                            <h3 className="body-gear__container__left__items-title">Chainmail</h3>
                            <img className="body-gear__container__left__items-img" src={chainmail} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(chainmail);}}></img>
                        </div>
                        <div className="body-gear__container__left__items">
                            <h3 className="body-gear__container__left__items-title">Robes of Evocation</h3>
                            <img className="body-gear__container__left__items-img" src={evocation} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(evocation);}}></img>
                        </div>
                        <div className="body-gear__container__left__items">
                            <h3 className="body-gear__container__left__items-title">Shadow Armor</h3>
                            <img className="body-gear__container__left__items-img" src={shadow} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(shadow);}}></img>
                        </div>
                        <div className="body-gear__container__left__items">
                            <h3 className="body-gear__container__left__items-title">Platemail</h3>
                            <img className="body-gear__container__left__items-img" src={platemail} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(platemail);}}></img>
                        </div>
                        <div className="body-gear__container__left__items">
                            <h3 className="body-gear__container__left__items-title">Swordedge Armor</h3>
                            <img className="body-gear__container__left__items-img" src={swordedge} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(swordedge);}}></img>
                        </div>
                        <div className="body-gear__container__left__items">
                            <h3 className="body-gear__container__left__items-title">Second Skin</h3>
                            <img className="body-gear__container__left__items-img" src={second} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(second);}}></img>
                        </div>
                        <div className="body-gear__container__left__items">
                            <h3 className="body-gear__container__left__items-title">Drakescale Armor</h3>
                            <img className="body-gear__container__left__items-img" src={drakescale} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(drakescale);}}></img>
                        </div>
                        <div className="body-gear__container__left__items">
                            <h3 className="body-gear__container__left__items-title">Flea-Bitten Shawl</h3>
                            <img className="body-gear__container__left__items-img" src={flea} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(flea);}}></img>
                        </div>
                    </div>

                    <div className="body-gear__container__right">
                        <div className="body-gear__container__right__items">
                            <h3 className="body-gear__container__right__items-title">Leather Armor</h3>
                            <img className="body-gear__container__right__items-img" src={leather} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(leather);}}></img>
                        </div>
                        <div className="body-gear__container__right__items">
                            <h3 className="body-gear__container__right__items-title">Cloak of Pockets</h3>
                            <img className="body-gear__container__right__items-img" src={pockets} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(pockets);}}></img>
                        </div>
                        <div className="body-gear__container__right__items">
                            <h3 className="body-gear__container__right__items-title">Studded Leather</h3>
                            <img className="body-gear__container__right__items-img" src={studded} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(studded);}}></img>
                        </div>
                        <div className="body-gear__container__right__items">
                            <h3 className="body-gear__container__right__items-title">Splintmail</h3>
                            <img className="body-gear__container__right__items-img" src={splintmail} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(splintmail);}}></img>
                        </div>
                        <div className="body-gear__container__right__items">
                            <h3 className="body-gear__container__right__items-title">Cloak of Phasing</h3>
                            <img className="body-gear__container__right__items-img" src={phasing} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(phasing);}}></img>
                        </div>
                        <div className="body-gear__container__right__items">
                            <h3 className="body-gear__container__right__items-title">Blinking Cape</h3>
                            <img className="body-gear__container__right__items-img" src={blinking} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(blinking);}}></img>
                        </div>
                        <div className="body-gear__container__right__items">
                            <h3 className="body-gear__container__right__items-title">Robes of Summoning</h3>
                            <img className="body-gear__container__right__items-img" src={summoning} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(summoning);}}></img>
                        </div>
                        <div className="body-gear__container__right__items">
                            <h3 className="body-gear__container__right__items-title">Sacrificial Robes</h3>
                            <img className="body-gear__container__right__items-img" src={sacrificial} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(sacrificial);}}></img>
                        </div>
                        <div className="body-gear__container__right__items">
                            <h3 className="body-gear__container__right__items-title">Steam Armor</h3>
                            <img className="body-gear__container__right__items-img" src={steam} onClick={()=> { props.displayBodyChange(false); props.displayBodyComp("create-form__card__items"); props.chosenBody(steam);}}></img>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )   
    }
}

export default BodyGear;