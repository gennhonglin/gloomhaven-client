import "./HandGear.scss";
import heater from "../../assets/images/item-imgs/1-14/gh-008-heater-shield.png";
import piercing from "../../assets/images/item-imgs/1-14/gh-009-piercing-bow.png";
import war from "../../assets/images/item-imgs/1-14/gh-010-war-hammer.png";
import poison from "../../assets/images/item-imgs/1-14/gh-011-poison-dagger.png";
import battle from "../../assets/images/item-imgs/15-21/gh-018-battle-axe.png";
import weighted from "../../assets/images/item-imgs/15-21/gh-019-weighted-net.png";
import jagged from "../../assets/images/item-imgs/22-28/gh-025-jagged-sword.png";
import long from "../../assets/images/item-imgs/22-28/gh-026-long-spear.png";
import tower from "../../assets/images/item-imgs/29-35/gh-032-tower-shield.png";
import volatile from "../../assets/images/item-imgs/29-35/gh-033-volatile-bomb.png";
import hooked from "../../assets/images/item-imgs/36-42/gh-039-hooked-chain.png";
import versatile from "../../assets/images/item-imgs/36-42/gh-040-versatile-dagger.png";
import spiked from "../../assets/images/item-imgs/43-49/gh-046-spiked-shield.png";
import reaping from "../../assets/images/item-imgs/43-49/gh-047-reaping-scythe.png";
import black from "../../assets/images/item-imgs/50-56/gh-053-black-knife.png";
import eminence from "../../assets/images/item-imgs/50-56/gh-054-staff-of-eminence.png";
import unstable from "../../assets/images/item-imgs/57-63/gh-060-unstable-explosives.png";
import wall from "../../assets/images/item-imgs/57-63/gh-061-wall-shield.png";
import balanced from "../../assets/images/item-imgs/64-151/gh-067-balanced-blade.png";
import halberd from "../../assets/images/item-imgs/64-151/gh-068-halberd.png";
import frigid from "../../assets/images/item-imgs/64-151/gh-077b-frigid-blade.png";
import storm from "../../assets/images/item-imgs/64-151/gh-078b-storm-blade.png";
import inferno from "../../assets/images/item-imgs/64-151/gh-079b-inferno-blade.png";
import tremor from "../../assets/images/item-imgs/64-151/gh-080b-tremor-blade.png";
import brilliant from "../../assets/images/item-imgs/64-151/gh-081b-brilliant-blade.png";
import night from "../../assets/images/item-imgs/64-151/gh-082b-night-blade.png";
import wandOfFrost from "../../assets/images/item-imgs/64-151/gh-083b-wand-of-frost.png";
import wandOfStorms from "../../assets/images/item-imgs/64-151/gh-084b-wand-of-storms.png";
import wandOfInfernos from "../../assets/images/item-imgs/64-151/gh-085b-wand-of-infernos.png";
import wandOfTremors from "../../assets/images/item-imgs/64-151/gh-086b-wand-of-tremors.png";
import wandOfBrilliance from "../../assets/images/item-imgs/64-151/gh-087b-wand-of-brilliance.png";
import wandOfDarkness from "../../assets/images/item-imgs/64-151/gh-088b-wand-of-darkness.png";
import ancient from "../../assets/images/item-imgs/64-151/gh-112-ancient-drill.png";
import skullbane from "../../assets/images/item-imgs/64-151/gh-113-skullbane-axe.png";
import xorn from "../../assets/images/item-imgs/64-151/gh-114-staff-of-xorn.png";
import mountain from "../../assets/images/item-imgs/64-151/gh-115-mountain-hammer.png";
import falchion from "../../assets/images/item-imgs/64-151/gh-116-fueled-falchion.png";
import bloody from "../../assets/images/item-imgs/64-151/gh-117-bloody-axe.png";
import elements from "../../assets/images/item-imgs/64-151/gh-118-staff-of-elements.png";
import hatred from "../../assets/images/item-imgs/64-151/gh-119-skull-of-hatred.png";
import summoning from "../../assets/images/item-imgs/64-151/gh-120-staff-of-summoning.png";
import dawn from "../../assets/images/item-imgs/64-151/gh-121-orb-of-dawn.png";
import twilight from "../../assets/images/item-imgs/64-151/gh-122-orb-of-twilight.png";



function HandGear(props) {
    
    if(props.displayHandGear === true) {
        return(
            <div className="hand-gear">
                <h1 className="hand-gear__title">Hand Gear Selection</h1>
                <div className="hand-gear__container">
                    <div className="hand-gear__container__left">
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Heater Shield</h3>
                            <img className="hand-gear__container__left__items-img" alt="heater-shield" src={heater} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(heater); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">War Hammer</h3>
                            <img className="hand-gear__container__left__items-img" alt="war-hammer" src={war} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(null); props.chosenHandSecond(null); props.chosenDualHanded(war); props.dualWield(true);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Battle-Axe</h3>
                            <img className="hand-gear__container__left__items-img" alt="battle-axe" src={battle} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(battle); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Jagged Sword</h3>
                            <img className="hand-gear__container__left__items-img" alt="jagged-sword" src={jagged} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(jagged); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Tower Shield</h3>
                            <img className="hand-gear__container__left__items-img" alt="tower-shield" src={tower} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(tower); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Hooked Chain</h3>
                            <img className="hand-gear__container__left__items-img" alt="hooked-chain" src={hooked} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(null); props.chosenHandSecond(null); props.chosenDualHanded(hooked); props.dualWield(true);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Spiked Shield</h3>
                            <img className="hand-gear__container__left__items-img" alt="spiked-shield" src={spiked} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(spiked); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Black Knife</h3>
                            <img className="hand-gear__container__left__items-img" alt="black-knife" src={black} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(black); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Unstable Explosives</h3>
                            <img className="hand-gear__container__left__items-img" alt="unstable-explosives" src={unstable} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(unstable); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Balanced Blade</h3>
                            <img className="hand-gear__container__left__items-img" alt="balanced-blade" src={balanced} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(balanced); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Frigid Blade</h3>
                            <img className="hand-gear__container__left__items-img" alt="frigid-blade" src={frigid} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(frigid); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Inferno Blade</h3>
                            <img className="hand-gear__container__left__items-img" alt="inferno-blade" src={inferno} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(inferno); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Brilliant Blade</h3>
                            <img className="hand-gear__container__left__items-img" alt="brilliant-blade" src={brilliant} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(brilliant); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Wand of Frost</h3>
                            <img className="hand-gear__container__left__items-img" alt="wand-of-frost" src={wandOfFrost} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(wandOfFrost); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Wand of Infernos</h3>
                            <img className="hand-gear__container__left__items-img" alt="wand-of-infernos" src={wandOfInfernos} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(wandOfInfernos); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Wand of Brilliance</h3>
                            <img className="hand-gear__container__left__items-img" alt="wand-of-brilliance" src={wandOfBrilliance} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(wandOfBrilliance); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Ancient Drill</h3>
                            <img className="hand-gear__container__left__items-img" alt="ancient-drill" src={ancient} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(null); props.chosenHandSecond(null); props.chosenDualHanded(ancient); props.dualWield(true);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Staff of Xorn</h3>
                            <img className="hand-gear__container__left__items-img" alt="staff-of-xorn" src={xorn} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(null); props.chosenHandSecond(null); props.chosenDualHanded(xorn); props.dualWield(true);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Fueled Falchion</h3>
                            <img className="hand-gear__container__left__items-img" alt="fueled-falchion" src={falchion} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(falchion); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Staff of Elements</h3>
                            <img className="hand-gear__container__left__items-img" alt="staff-of-elements" src={elements} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(null); props.chosenHandSecond(null); props.chosenDualHanded(elements); props.dualWield(true);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Staff of Summoning</h3>
                            <img className="hand-gear__container__left__items-img" alt="staff-of-summoning" src={summoning} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items");props.chosenHand(null); props.chosenHandSecond(null); props.chosenDualHanded(summoning);  props.dualWield(true);}}></img>
                        </div>
                        <div className="hand-gear__container__left__items">
                            <h3 className="hand-gear__container__left__items-title">Orb of Twilight</h3>
                            <img className="hand-gear__container__left__items-img" alt="orb-of-twilight" src={twilight} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(twilight); props.dualWield(false);}}></img>
                        </div>
                    </div>

                    <div className="hand-gear__container__right">
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Piercing Bow</h3>
                            <img className="hand-gear__container__right__items-img" alt="piercing-bow" src={piercing} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(null); props.chosenHandSecond(null); props.chosenDualHanded(piercing);  props.dualWield(true);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Poison Dagger</h3>
                            <img className="hand-gear__container__right__items-img" alt="poison-dagger" src={poison} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(poison); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Weighted Net</h3>
                            <img className="hand-gear__container__right__items-img" alt="weighted-net" src={weighted} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(null); props.chosenHandSecond(null); props.chosenDualHanded(weighted);  props.dualWield(true);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Long Spear</h3>
                            <img className="hand-gear__container__right__items-img" alt="long-spear" src={long} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(null); props.chosenHandSecond(null); props.chosenDualHanded(long);  props.dualWield(true);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Volatile Bomb</h3>
                            <img className="hand-gear__container__right__items-img" alt="volatile-bomb" src={volatile} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(volatile); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Versatile Dagger</h3>
                            <img className="hand-gear__container__right__items-img" alt="versatile-dagger" src={versatile} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(versatile); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Reaping Scythe</h3>
                            <img className="hand-gear__container__right__items-img" alt="reaping-scythe" src={reaping} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(null); props.chosenHandSecond(null); props.chosenDualHanded(reaping);  props.dualWield(true);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Staff of Eminence</h3>
                            <img className="hand-gear__container__right__items-img" alt="staff-of-eminence" src={eminence} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(null); props.chosenHandSecond(null); props.chosenDualHanded(eminence);  props.dualWield(true);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Wall Shield</h3>
                            <img className="hand-gear__container__right__items-img" alt="wall-shield" src={wall} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(null); props.chosenHandSecond(null); props.chosenDualHanded(wall);  props.dualWield(true);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Halberd</h3>
                            <img className="hand-gear__container__right__items-img" alt="halberd" src={halberd} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(null); props.chosenHandSecond(null); props.chosenDualHanded(halberd);  props.dualWield(true);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Storm Blade</h3>
                            <img className="hand-gear__container__right__items-img" alt="storm-blade" src={storm} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(storm); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Tremor Blade</h3>
                            <img className="hand-gear__container__right__items-img" alt="tremor-blade" src={tremor} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(tremor); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Night Blade</h3>
                            <img className="hand-gear__container__right__items-img" alt="night-blade" src={night} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(night); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Wand of Storms</h3>
                            <img className="hand-gear__container__right__items-img" alt="wand-of-storms" src={wandOfStorms} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(wandOfStorms); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Wand of Tremors</h3>
                            <img className="hand-gear__container__right__items-img" alt="wand-of-tremors" src={wandOfTremors} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(wandOfTremors); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Wand of Darkness</h3>
                            <img className="hand-gear__container__right__items-img" alt="wand-of-darkness" src={wandOfDarkness} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(wandOfDarkness); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Skullbane Axe</h3>
                            <img className="hand-gear__container__right__items-img" alt="skullbane-axe" src={skullbane} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(null); props.chosenHandSecond(null); props.chosenDualHanded(skullbane);  props.dualWield(true);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Mountain Hammer</h3>
                            <img className="hand-gear__container__right__items-img" alt="mountain-hammer" src={mountain} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(null); props.chosenHandSecond(null); props.chosenDualHanded(mountain);  props.dualWield(true);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Bloody Axe</h3>
                            <img className="hand-gear__container__right__items-img" alt="bloody-axe" src={bloody} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(bloody); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Skull of Hatred</h3>
                            <img className="hand-gear__container__right__items-img" alt="skull-of-hatred" src={hatred} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(hatred); props.dualWield(false);}}></img>
                        </div>
                        <div className="hand-gear__container__right__items">
                            <h3 className="hand-gear__container__right__items-title">Orb of Dawn</h3>
                            <img className="hand-gear__container__right__items-img" alt="orb-of-dawn" src={dawn} onClick={()=> { props.displayHandChange(false); props.displayHandComp("create-form__card__items"); props.chosenHand(dawn); props.dualWield(false);}}></img>
                        </div>
                    </div>
                </div>
                
            </div>
        )   
    }
}

export default HandGear;