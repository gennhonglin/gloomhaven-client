import "./Reputation.scss";
import { useState } from "react";

function Reputation() {

    const [sliderValue, setSliderValue] = useState(0);


    return(
        <section className="reputation">
            <h2 className="reputation__title">Reputation</h2>
            <div className="reputation__input">
                <input type="range" min="-20" max="20" defaultValue={sliderValue} onChange={e => setSliderValue(e.target.value)} className="reputation__input-slider"></input>
            </div>
            <h3>{sliderValue}</h3>
        </section>
    )
}

export default Reputation;