import Header from "../../components/Header/Header";
import "./Homepage.scss";
import Character from "../../components/Character/Character";
import Prosperity from "../../components/Prosperity/Prosperity";
import Reputation from "../../components/Reputation/Reputation";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";


function Homepage() {
    const token = sessionStorage.getItem("token");
    let user = jwt_decode(token);

    const [data, setData] = useState();

    useEffect(()=> {
        axios.get(`http://localhost:8080/party/${user.data.party_id}`)
        .then((result) => {
            setData(result.data);
        });
    }, [])


    return(
        <div>
            <Header />
            <Character />
            {data && <Prosperity prosperity = {data.prosperity_points}/>}
            {data && <Reputation rep = {data.reputation} />}
            <Footer />
        </div>
    )
}

export default Homepage