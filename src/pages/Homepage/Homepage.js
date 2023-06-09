import Header from "../../components/Header/Header";
import "./Homepage.scss";
import Character from "../../components/Character/Character";
import Prosperity from "../../components/Prosperity/Prosperity";
import Reputation from "../../components/Reputation/Reputation";
import Footer from "../../components/Footer/Footer";

function Homepage() {
    return(
        <div>
            <Header />
            <Character />
            <Prosperity />
            <Reputation />
            <Footer />
        </div>
    )
}

export default Homepage