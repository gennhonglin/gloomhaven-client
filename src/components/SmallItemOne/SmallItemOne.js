import "./SmallItemOne.scss";
import minorHealing from "../../assets/images/item-imgs/1-14/gh-012-minor-healing-potion.png";
import minorStamina from "../../assets/images/item-imgs/1-14/gh-013-minor-stamina-potion.png";
import minorPower from "../../assets/images/item-imgs/1-14/gh-014-minor-power-potion.png";
import minorMana from "../../assets/images/item-imgs/15-21/gh-020-minor-mana-potion.png";
import stun from "../../assets/images/item-imgs/15-21/gh-021-stun-powder.png";
import majorHealing from "../../assets/images/item-imgs/22-28/gh-027-major-healing-potion.png";
import moon from "../../assets/images/item-imgs/22-28/gh-028-moon-earring.png";
import majorStamina from "../../assets/images/item-imgs/29-35/gh-034-major-stamina-potion.png";
import figurine from "../../assets/images/item-imgs/29-35/gh-035-falcon-figurine.png";
import majorPower from "../../assets/images/item-imgs/36-42/gh-041-major-power-potion.png";
import haste from "../../assets/images/item-imgs/36-42/gh-042-ring-of-haste.png";
import majorMana from "../../assets/images/item-imgs/43-49/gh-048-major-mana-potion.png";
import sun from "../../assets/images/item-imgs/43-49/gh-049-sun-earring.png";
import superHealing from "../../assets/images/item-imgs/50-56/gh-055-super-healing-potion.png";
import brutality from "../../assets/images/item-imgs/50-56/gh-056-ring-of-brutality.png";
import doom from "../../assets/images/item-imgs/57-63/gh-062-doom-powder.png";
import luckyEye from "../../assets/images/item-imgs/57-63/gh-063-lucky-eye.png";
import star from "../../assets/images/item-imgs/64-151/gh-069-star-earring.png";
import secondChance from "../../assets/images/item-imgs/64-151/gh-070-second-chance-ring.png";
import minorCure from "../../assets/images/item-imgs/64-151/gh-089b-minor-cure-potion.png";
import majorCure from "../../assets/images/item-imgs/64-151/gh-090b-major-cure-potion.png";
import steel from "../../assets/images/item-imgs/64-151/gh-091b-steel-ring.png";
import dampening from "../../assets/images/item-imgs/64-151/gh-092b-dampening-ring.png";
import power from "../../assets/images/item-imgs/64-151/gh-093b-scroll-of-power.png";
import healing from "../../assets/images/item-imgs/64-151/gh-094b-scroll-of-healing.png";
import stamina from "../../assets/images/item-imgs/64-151/gh-095b-scroll-of-stamina.png";
import skulls from "../../assets/images/item-imgs/64-151/gh-123-ring-of-skulls.png";
import doomed from "../../assets/images/item-imgs/64-151/gh-124-doomed-compass.png";
import curious from "../../assets/images/item-imgs/64-151/gh-125-curious-gear.png";
import spider from "../../assets/images/item-imgs/64-151/gh-126-remote-spider.png";
import giantSpider from "../../assets/images/item-imgs/64-151/gh-127-giant-remote-spider.png";
import censer from "../../assets/images/item-imgs/64-151/gh-128-black-censer.png";
import blackCard from "../../assets/images/item-imgs/64-151/gh-129-black-card.png";
import helix from "../../assets/images/item-imgs/64-151/gh-130-helix-ring.png";
import betrayer from "../../assets/images/item-imgs/64-151/gh-131-heart-of-the-betrayer.png";
import powerCore from "../../assets/images/item-imgs/64-151/gh-132-power-core.png";
import resonant from "../../assets/images/item-imgs/64-151/gh-133-resonant-crystal.png";



function SmallItemOne(props) {
    
    if(props.displaySmallItemOne === true) {
        return(
            <div className="small-item">
                <h1 className="small-item__title">Small Item Selection</h1>
                <div className="small-item__container">
                    <div className="small-item__container__left">
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Minor Healing Potion</h3>
                            <img className="small-item__container__left__items-img" alt="minor-healing-potion" src={minorHealing} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(minorHealing);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Minor Power Potion</h3>
                            <img className="small-item__container__left__items-img" alt="minor-power-potion" src={minorPower} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(minorPower);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Stun Powder</h3>
                            <img className="small-item__container__left__items-img" alt="stun-powder" src={stun} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(stun);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Moon Earring</h3>
                            <img className="small-item__container__left__items-img" alt="moon-earring" src={moon} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(moon);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Falcon Figurine</h3>
                            <img className="small-item__container__left__items-img" alt="falcon-figurine" src={figurine} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(figurine);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Ring of Haste</h3>
                            <img className="small-item__container__left__items-img" alt="ring-of-haste" src={haste} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(haste);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Sun Earring</h3>
                            <img className="small-item__container__left__items-img" alt="sun-earring" src={sun} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(sun);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Ring of Brutality</h3>
                            <img className="small-item__container__left__items-img" alt="ring-of-brutality" src={brutality} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(brutality);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Lucky Eye</h3>
                            <img className="small-item__container__left__items-img" alt="lucky-eye" src={luckyEye} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(luckyEye);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Second Chance Ring</h3>
                            <img className="small-item__container__left__items-img" alt="second-chance-ring" src={secondChance} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(secondChance);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Major Cure Potion</h3>
                            <img className="small-item__container__left__items-img" alt="major-cure-potion" src={majorCure} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(majorCure);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Dampening Ring</h3>
                            <img className="small-item__container__left__items-img" alt="dampening-ring" src={dampening} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(dampening);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Scroll of Healing</h3>
                            <img className="small-item__container__left__items-img" alt="scroll-of-healing" src={healing} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(healing);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Ring of Skulls</h3>
                            <img className="small-item__container__left__items-img" alt="ring-of-skulls" src={skulls} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(skulls);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Curious Gear</h3>
                            <img className="small-item__container__left__items-img" alt="curious-gear" src={curious} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(curious);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Giant Remote Spider</h3>
                            <img className="small-item__container__left__items-img" alt="giant-remote-spider" src={giantSpider} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(giantSpider);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Black Card</h3>
                            <img className="small-item__container__left__items-img" alt="black-card" src={blackCard} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(blackCard);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Heart of the Betrayer</h3>
                            <img className="small-item__container__left__items-img" alt="heart-of-the-betrayer" src={betrayer} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(betrayer);}}></img>
                        </div>
                        <div className="small-item__container__left__items">
                            <h3 className="small-item__container__left__items-title">Resonant Crystal</h3>
                            <img className="small-item__container__left__items-img" alt="resonant-crystal" src={resonant} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(resonant);}}></img>
                        </div>
                        
                        
                    </div>

                    <div className="small-item__container__right">
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Minor Stamina Potion</h3>
                            <img className="small-item__container__right__items-img" alt="minor-stamina-potion" src={minorStamina} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(minorStamina);}}></img>
                        </div>
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Minor Mana Potion</h3>
                            <img className="small-item__container__right__items-img" alt="minor-mana-potion" src={minorMana} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(minorMana);}}></img>
                        </div>
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Major Healing Potion</h3>
                            <img className="small-item__container__right__items-img" alt="major-healing-potion" src={majorHealing} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(majorHealing);}}></img>
                        </div>
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Major Stamina Potion</h3>
                            <img className="small-item__container__right__items-img" alt="major-stamina-potion" src={majorStamina} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(majorStamina);}}></img>
                        </div>
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Major Power Potion</h3>
                            <img className="small-item__container__right__items-img" alt="major-power-potion" src={majorPower} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(majorPower);}}></img>
                        </div>
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Major Mana Potion</h3>
                            <img className="small-item__container__right__items-img" alt="major-mana-potion" src={majorMana} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(majorMana);}}></img>
                        </div>
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Super Healing Potion</h3>
                            <img className="small-item__container__right__items-img" alt="super-healing-potion" src={superHealing} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(superHealing);}}></img>
                        </div>
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Doom Powder</h3>
                            <img className="small-item__container__right__items-img" alt="doom-powder" src={doom} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(doom);}}></img>
                        </div>
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Star Earring</h3>
                            <img className="small-item__container__right__items-img" alt="star-earring" src={star} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(star);}}></img>
                        </div>
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Minor Cure Potion</h3>
                            <img className="small-item__container__right__items-img" alt="minor-cure-potion" src={minorCure} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(minorCure);}}></img>
                        </div>
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Steel Ring</h3>
                            <img className="small-item__container__right__items-img" alt="steel-ring" src={steel} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(steel);}}></img>
                        </div>
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Scroll of Power</h3>
                            <img className="small-item__container__right__items-img" alt="scroll-of-power" src={power} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(power);}}></img>
                        </div>
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Scroll of Stamina</h3>
                            <img className="small-item__container__right__items-img" alt="scroll-of-stamina" src={stamina} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(stamina);}}></img>
                        </div>
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Doomed Compass</h3>
                            <img className="small-item__container__right__items-img" alt="doomed-compass" src={doomed} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(doomed);}}></img>
                        </div>
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Remote Spider</h3>
                            <img className="small-item__container__right__items-img" alt="remote-spider" src={spider} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(spider);}}></img>
                        </div>
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Black Censer</h3>
                            <img className="small-item__container__right__items-img" alt="black-censer" src={censer} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(censer);}}></img>
                        </div>
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Helix Ring</h3>
                            <img className="small-item__container__right__items-img" alt="helix-ring" src={helix} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(helix);}}></img>
                        </div>
                        <div className="small-item__container__right__items">
                            <h3 className="small-item__container__right__items-title">Power Core</h3>
                            <img className="small-item__container__right__items-img" alt="power-core" src={powerCore} onClick={()=> { props.displaySmallItemChange(false); props.displaySmallItemComp("create-form__card__items"); props.chosenSmallItem(powerCore);}}></img>
                        </div>
                    </div>
                </div>
                
            </div>
        )   
    }
}

export default SmallItemOne;