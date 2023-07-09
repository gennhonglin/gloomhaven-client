import "./CreateCharacter.scss";
import Header from "../../components/Header/Header";
import CreateCharacterForm from "../../components/CreateCharacterForm/CreateCharacterForm";

function CreateCharacter() {
    return(
        <section className="create">
            <Header/>
            <CreateCharacterForm/>
        </section>
    )
}

export default CreateCharacter;