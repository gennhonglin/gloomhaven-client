import axios from "axios";
import "./Reputation.scss";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function Reputation({rep}) {
    const token = sessionStorage.getItem("token");
    let user = jwt_decode(token);

    const [sliderValue, setSliderValue] = useState(rep);


    useEffect(() => {
        
        const updateReputation = {
            party_id: user.data.party_id,
            reputation: sliderValue
        }

        axios.post(`http://localhost:8080/party/reputation/${user.data.party_id}`, updateReputation)
            .then((response) => {
                if(response.status === 204) {
                    axios.get(`http://localhost:8080/party/reputation/${user.data.party_id}`)
                    .then((result) => {
                        setSliderValue(result.data);
                    });
                }
            });
    }, [sliderValue])

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
            <header className="reputation__title__container">
                <h2 className="reputation__title__container-title">Reputation</h2>
            </header>
            <h2 className="reputation__rep">Rep</h2>
            <div className="reputation__input">
                <input type="range" min="-20" max="20" value={sliderValue} onChange={e => setSliderValue(parseInt(e.target.value), 10)} className="reputation__input-slider"></input>
            </div>

            <div className="reputation__crement">
                <button className="reputation__crement-button" onClick={minusButton}>-</button>
                <h3 className="reputation__crement-display">{sliderValue}</h3>
                <button className="reputation__crement-button" onClick={plusButton}>+</button>
            </div>
        </section>
    )
}

export default Reputation;