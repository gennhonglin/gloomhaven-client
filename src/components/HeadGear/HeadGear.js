import "./HeadGear.scss";
import eagle from "../../assets/images/item-imgs/1-14/gh-006-eagle-eye-goggles.png";
import iron from "../../assets/images/item-imgs/1-14/gh-007-iron-helmet.png";
import empowering from "../../assets/images/item-imgs/15-21/gh-017-empowering-talisman.png";
import amulet from "../../assets/images/item-imgs/22-28/gh-024-amulet-of-life.png";
import hawk from "../../assets/images/item-imgs/29-35/gh-031-hawk-helm.png";
import heavy from "../../assets/images/item-imgs/36-42/gh-038-heavy-basinet.png";
import pendant from "../../assets/images/item-imgs/43-49/gh-045-pendant-of-dark-pacts.png";
import protective from "../../assets/images/item-imgs/50-56/gh-052-protective-charm.png";
import telescopic from "../../assets/images/item-imgs/57-63/gh-059-telescopic-lens.png";
import mask from "../../assets/images/item-imgs/64-151/gh-066-mask-of-terror.png";
import circlet from "../../assets/images/item-imgs/64-151/gh-075a-circlet-of-elements.png";
import chain from "../../assets/images/item-imgs/64-151/gh-076a-chain-hood.png";
import necklace from "../../assets/images/item-imgs/64-151/gh-106-necklace-of-teeth.png";
import horned from "../../assets/images/item-imgs/64-151/gh-107-horned-helm.png";
import drakescale from "../../assets/images/item-imgs/64-151/gh-108-drakescale-helm.png";
import thief from "../../assets/images/item-imgs/64-151/gh-109-thiefs-hood.png";
import helm from "../../assets/images/item-imgs/64-151/gh-110-helm-of-the-mountain.png";
import wave from "../../assets/images/item-imgs/64-151/gh-111-wave-crest.png";


function HeadGear(props) {
    
    if(props.displayHeadGear === true) {
        return(
            <div className="head-gear">
                <h1 className="head-gear__title">Head Gear Selection</h1>
                <div className="head-gear__container">
                    <div className="head-gear__container__left">
                        <div className="head-gear__container__left__items">
                            <h3 className="head-gear__container__left__items-title">Eagle-Eye Goggles</h3>
                            <img className="head-gear__container__left__items-img" src={eagle} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(eagle);}}></img>
                        </div>
                        <div className="head-gear__container__left__items">
                            <h3 className="head-gear__container__left__items-title">Empowering Talisman</h3>
                            <img className="head-gear__container__left__items-img" src={empowering} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(empowering);}}></img>
                        </div>
                        <div className="head-gear__container__left__items">
                            <h3 className="head-gear__container__left__items-title">Hawk Helm</h3>
                            <img className="head-gear__container__left__items-img" src={hawk} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(hawk);}}></img>
                        </div>
                        <div className="head-gear__container__left__items">
                            <h3 className="head-gear__container__left__items-title">Pendant of Dark Pacts</h3>
                            <img className="head-gear__container__left__items-img" src={pendant} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(pendant);}}></img>
                        </div>
                        <div className="head-gear__container__left__items">
                            <h3 className="head-gear__container__left__items-title">Telescopic Lens</h3>
                            <img className="head-gear__container__left__items-img" src={telescopic} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(telescopic);}}></img>
                        </div>
                        <div className="head-gear__container__left__items">
                            <h3 className="head-gear__container__left__items-title">Circlet of Elements</h3>
                            <img className="head-gear__container__left__items-img" src={circlet} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(circlet);}}></img>
                        </div>
                        <div className="head-gear__container__left__items">
                            <h3 className="head-gear__container__left__items-title">Necklace of Teeth</h3>
                            <img className="head-gear__container__left__items-img" src={necklace} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(necklace);}}></img>
                        </div>
                        <div className="head-gear__container__left__items">
                            <h3 className="head-gear__container__left__items-title">Drakescale Helm</h3>
                            <img className="head-gear__container__left__items-img" src={drakescale} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(drakescale);}}></img>
                        </div>
                        <div className="head-gear__container__left__items">
                            <h3 className="head-gear__container__left__items-title">Helm of the Mountain</h3>
                            <img className="head-gear__container__left__items-img" src={helm} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(helm);}}></img>
                        </div>
                    </div>

                    <div className="head-gear__container__right">
                        <div className="head-gear__container__right__items">
                            <h3 className="head-gear__container__right__items-title">Iron Helmet</h3>
                            <img className="head-gear__container__right__items-img" src={iron} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(iron);}}></img>
                        </div>
                        <div className="head-gear__container__right__items">
                            <h3 className="head-gear__container__right__items-title">Amulet of Life</h3>
                            <img className="head-gear__container__right__items-img" src={amulet} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(amulet);}}></img>
                        </div>
                        <div className="head-gear__container__right__items">
                            <h3 className="head-gear__container__right__items-title">Heavy Basinet</h3>
                            <img className="head-gear__container__right__items-img" src={heavy} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(heavy);}}></img>
                        </div>
                        <div className="head-gear__container__right__items">
                            <h3 className="head-gear__container__right__items-title">Protective Charm</h3>
                            <img className="head-gear__container__right__items-img" src={protective} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(protective);}}></img>
                        </div>
                        <div className="head-gear__container__right__items">
                            <h3 className="head-gear__container__right__items-title">Mask of Terror</h3>
                            <img className="head-gear__container__right__items-img" src={mask} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(mask);}}></img>
                        </div>
                        <div className="head-gear__container__right__items">
                            <h3 className="head-gear__container__right__items-title">Chain Hood</h3>
                            <img className="head-gear__container__right__items-img" src={chain} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(chain);}}></img>
                        </div>
                        <div className="head-gear__container__right__items">
                            <h3 className="head-gear__container__right__items-title">Horned Helm</h3>
                            <img className="head-gear__container__right__items-img" src={horned} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(horned);}}></img>
                        </div>
                        <div className="head-gear__container__right__items">
                            <h3 className="head-gear__container__right__items-title">Thief's Hood</h3>
                            <img className="head-gear__container__right__items-img" src={thief} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(thief);}}></img>
                        </div>
                        <div className="head-gear__container__right__items">
                            <h3 className="head-gear__container__right__items-title">Wave Crest</h3>
                            <img className="head-gear__container__right__items-img" src={wave} onClick={()=> { props.displayHeadChange(false); props.displayHeadComp("create-form__card__items"); props.chosenHead(wave);}}></img>
                        </div>
                        
                    </div>
                 
                </div>
            </div>
        )   
    }
}

export default HeadGear;