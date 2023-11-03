import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import './App.scss';
import Homepage from "./pages/Homepage/Homepage";
import CreateCharacter from "./pages/CreateCharacter/CreateCharacter";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="*" element={<Navigate to="./login" replace/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/homepage" element={<Homepage/>}></Route>
            <Route path="/create-character" element={<CreateCharacter/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
