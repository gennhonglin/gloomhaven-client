import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.scss';
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
