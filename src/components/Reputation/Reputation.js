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