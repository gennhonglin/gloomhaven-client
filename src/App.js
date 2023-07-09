import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.scss';
import Homepage from "./pages/Homepage/Homepage";
import CreateCharacter from "./pages/CreateCharacter/CreateCharacter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/create-character" element={<CreateCharacter/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
