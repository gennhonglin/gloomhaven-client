import "./Reputation.scss";
import { useEffect, useState } from "react";

function Reputation() {

    const [sliderValue, setSliderValue] = useState(0);

    const minusButton = () => {
        if(sliderValue <= -20) {
            setSliderValue(-20);
        } else {
            setSliderValue(sliderValue - 1);
        }
    } 

    const plusButton = () => {
        if(sliderValue === 20) {
            setSliderValue(20);
        } else {
            setSliderValue(sliderValue + 1);
        }
    }


    return(
        <section className="reputation">
            <h2 className="reputation__title">Reputation</h2>
            <div className="reputation__input">
                <button onClick={minusButton}>-</button>
                <input type="range" min="-20" max="20" value={sliderValue} onChange={e => setSliderValue(parseInt(e.target.value), 10)} className="reputation__input-slider"></input>
                <button onClick={plusButton}>+</button>
            </div>
            <h3>{sliderValue}</h3>
        </section>
    )
}

export default Reputation;