import "./BootGear.scss";
import striding from "../../assets/images/item-imgs/1-14/gh-001-boots-of-striding.png";
import winged from "../../assets/images/item-imgs/1-14/gh-002-winged-shoes.png";
import speed from "../../assets/images/item-imgs/15-21/gh-015-boots-of-speed.png";
import greaves from "../../assets/images/item-imgs/22-28/gh-022-heavy-greaves.png";
import comfortable from "../../assets/images/item-imgs/29-35/gh-029-comfortable-shoes.png";
import dashing from "../../assets/images/item-imgs/36-42/gh-036-boots-of-dashing.png";
import quickness from "../../assets/images/item-imgs/43-49/gh-043-boots-of-quickness.png";
import sabatons from "../../assets/images/item-imgs/50-56/gh-050-steel-sabatons.png";
import serene from "../../assets/images/item-imgs/57-63/gh-057-serene-sandals.png";
import sprinting from "../../assets/images/item-imgs/64-151/gh-064-boots-of-sprinting.png";
import levitation from "../../assets/images/item-imgs/64-151/gh-071b-boots-of-levitation.png";
import happiness from "../../assets/images/item-imgs/64-151/gh-072b-shoes-of-happiness.png";
import rocket from "../../assets/images/item-imgs/64-151/gh-096-rocket-boots.png";
import endurance from "../../assets/images/item-imgs/64-151/gh-097-endurance-footwraps.png";
import drakescale from "../../assets/images/item-imgs/64-151/gh-098-drakescale-boots.png";
import magma from "../../assets/images/item-imgs/64-151/gh-099-magma-waders.png";


function BootGear(props) {
    
    if(props.displayBootGear === true) {
        return(
            <div className="boot-gear">
                <h1 className="boot-gear__title">Boot Gear Selection</h1>
                <div className="boot-gear__container">
                    <div className="boot-gear__container__left">
                        <div className="boot-gear__container__left__items">
                            <h3 className="boot-gear__container__left__items-title">Boots of Striding</h3>
                            <img className="boot-gear__container__left__items-img" src={striding} onClick={()=> { props.displayBootChange(false); props.displayBootComp("create-form__card__items"); props.chosenBoot(striding);}}></img>
                        </div>
                        <div className="boot-gear__container__left__items">
                            <h3 className="boot-gear__container__left__items-title">Boots of Speed</h3>
                            <img className="boot-gear__container__left__items-img" src={speed} onClick={()=> { props.displayBootChange(false); props.displayBootComp("create-form__card__items"); props.chosenBoot(speed);}}></img>
                        </div>
                        <div className="boot-gear__container__left__items">
                            <h3 className="boot-gear__container__left__items-title">Comfortable Shoes</h3>
                            <img className="boot-gear__container__left__items-img" src={comfortable} onClick={()=> { props.displayBootChange(false); props.displayBootComp("create-form__card__items"); props.chosenBoot(comfortable);}}></img>
                        </div>
                        <div className="boot-gear__container__left__items">
                            <h3 className="boot-gear__container__left__items-title">Boots of Quickness</h3>
                            <img className="boot-gear__container__left__items-img" src={quickness} onClick={()=> { props.displayBootChange(false); props.displayBootComp("create-form__card__items"); props.chosenBoot(quickness);}}></img>
                        </div>
                        <div className="boot-gear__container__left__items">
                            <h3 className="boot-gear__container__left__items-title">Serene Sandals</h3>
                            <img className="boot-gear__container__left__items-img" src={serene} onClick={()=> { props.displayBootChange(false); props.displayBootComp("create-form__card__items"); props.chosenBoot(serene);}}></img>
                        </div>
                        <div className="boot-gear__container__left__items">
                            <h3 className="boot-gear__container__left__items-title">Boots of Levitation</h3>
                            <img className="boot-gear__container__left__items-img" src={levitation} onClick={()=> { props.displayBootChange(false); props.displayBootComp("create-form__card__items"); props.chosenBoot(levitation);}}></img>
                        </div>
                        <div className="boot-gear__container__left__items">
                            <h3 className="boot-gear__container__left__items-title">Rocket Boots</h3>
                            <img className="boot-gear__container__left__items-img" src={rocket} onClick={()=> { props.displayBootChange(false); props.displayBootComp("create-form__card__items"); props.chosenBoot(rocket);}}></img>
                        </div>
                        <div className="boot-gear__container__left__items">
                            <h3 className="boot-gear__container__left__items-title">Drakescale Boots</h3>
                            <img className="boot-gear__container__left__items-img" src={drakescale} onClick={()=> { props.displayBootChange(false); props.displayBootComp("create-form__card__items"); props.chosenBoot(drakescale);}}></img>
                        </div>
                        
                    </div>

                    <div className="boot-gear__container__right">
                        <div className="boot-gear__container__right__items">
                            <h3 className="boot-gear__container__right__items-title">Winged Shoes</h3>
                            <img className="boot-gear__container__right__items-img" src={winged} onClick={()=> { props.displayBootChange(false); props.displayBootComp("create-form__card__items"); props.chosenBoot(winged);}}></img>
                        </div>
                        <div className="boot-gear__container__right__items">
                            <h3 className="boot-gear__container__right__items-title">Heavy Greaves</h3>
                            <img className="boot-gear__container__right__items-img" src={greaves} onClick={()=> { props.displayBootChange(false); props.displayBootComp("create-form__card__items"); props.chosenBoot(greaves);}}></img>
                        </div>
                        <div className="boot-gear__container__right__items">
                            <h3 className="boot-gear__container__right__items-title">Boots of Dashing</h3>
                            <img className="boot-gear__container__right__items-img" src={dashing} onClick={()=> { props.displayBootChange(false); props.displayBootComp("create-form__card__items"); props.chosenBoot(dashing);}}></img>
                        </div>
                        <div className="boot-gear__container__right__items">
                            <h3 className="boot-gear__container__right__items-title">Steel Sabatons</h3>
                            <img className="boot-gear__container__right__items-img" src={sabatons} onClick={()=> { props.displayBootChange(false); props.displayBootComp("create-form__card__items"); props.chosenBoot(sabatons);}}></img>
                        </div>
                        <div className="boot-gear__container__right__items">
                            <h3 className="boot-gear__container__right__items-title">Boots of Sprinting</h3>
                            <img className="boot-gear__container__right__items-img" src={sprinting} onClick={()=> { props.displayBootChange(false); props.displayBootComp("create-form__card__items"); props.chosenBoot(sprinting);}}></img>
                        </div>
                        <div className="boot-gear__container__right__items">
                            <h3 className="boot-gear__container__right__items-title">Shoes of Happiness</h3>
                            <img className="boot-gear__container__right__items-img" src={happiness} onClick={()=> { props.displayBootChange(false); props.displayBootComp("create-form__card__items"); props.chosenBoot(happiness);}}></img>
                        </div>
                        <div className="boot-gear__container__right__items">
                            <h3 className="boot-gear__container__right__items-title">Endurance Footwraps</h3>
                            <img className="boot-gear__container__right__items-img" src={endurance} onClick={()=> { props.displayBootChange(false); props.displayBootComp("create-form__card__items"); props.chosenBoot(endurance);}}></img>
                        </div>
                        <div className="boot-gear__container__right__items">
                            <h3 className="boot-gear__container__right__items-title">Magma Waders</h3>
                            <img className="boot-gear__container__right__items-img" src={magma} onClick={()=> { props.displayBootChange(false); props.displayBootComp("create-form__card__items"); props.chosenBoot(magma);}}></img>
                        </div>   
                    </div>
                </div>
                
            </div>
        )   
    }
}

export default BootGear;