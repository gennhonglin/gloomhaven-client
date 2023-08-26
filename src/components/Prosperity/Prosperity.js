import axios from "axios";
import "./Prosperity.scss";
import jwt_decode from "jwt-decode";
import {useEffect, useState} from "react";


function Prosperity() {
    const token = sessionStorage.getItem("token");
    let user = jwt_decode(token);

    const [prosperityPoint, setProsperityPoint] = useState(user.prosperity_points);
    const [prosperityLevel, setProsperityLevel] = useState(1);


    useEffect(() => {

            const updateProsperity = {
                party_id: user.data.party_id,
                prosperity_points: prosperityPoint
            }


            axios.post(`http://localhost:8080/party/${user.data.party_id}`, updateProsperity)
                .then((response) => {
                    if(response.status === 204) {
                        axios.get(`http://localhost:8080/party/${user.data.party_id}`)
                        .then((result) => {
                            setProsperityPoint(result.data);
                        });
                    }
                });

        



        if (prosperityPoint < 5) {
            setProsperityLevel(1);
        } else if (prosperityPoint >= 5 && prosperityPoint < 10) {
            setProsperityLevel(2);
        } else if(prosperityPoint >= 10 && prosperityPoint < 16) {
            setProsperityLevel(3);
        } else if(prosperityPoint >= 16 && prosperityPoint < 23) {
            setProsperityLevel(4);
        } else if(prosperityPoint >= 23 && prosperityPoint < 31) {
            setProsperityLevel(5);
        } else if(prosperityPoint >= 31 && prosperityPoint < 40) {
            setProsperityLevel(6);
        } else if(prosperityPoint >= 40 && prosperityPoint< 51) {
            setProsperityLevel(7);
        } else if(prosperityPoint >= 51 && prosperityPoint < 65) {
            setProsperityLevel(8);
        } else if(prosperityPoint >= 65) {
            setProsperityLevel(9);
        }
    }, [prosperityPoint])


    const sliderUpdate = (e) => {
        setProsperityPoint(e);
    }

    const minusButton = () => {
        if(prosperityPoint <= 0) {
            setProsperityPoint(0);
        } else {
            setProsperityPoint(prosperityPoint - 1);
        }
    }

    const plusButton = () => {
        if(prosperityPoint >= 100) {
            setProsperityPoint(100);
        } else {
            setProsperityPoint(prosperityPoint + 1);
        }
    }


    return(
        <section className="prosperity">
            <h2 className="prosperity__title">Prosperity Level: {prosperityLevel}</h2>
            <div className="prosperity__input">
                <button onClick={minusButton}>-</button>
                <input type="range" min="0" max="100" value={prosperityPoint} onChange={e => {sliderUpdate(parseInt(e.target.value,10));}} className="prosperity__input-slider"></input>
                <button onClick={plusButton}>+</button>
            </div>
            <h3>{prosperityPoint}</h3>
        </section>
    )
}

export default Prosperity;