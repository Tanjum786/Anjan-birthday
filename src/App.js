import { Route, Routes } from "react-router";
import "./App.css";
import { Birthdaywishes } from "./components/Birthdaywishes";
import Frontpage from "./components/Frontpage";

function App() {
  return (
    <div className="App">
  <Routes>
    <Route path="/" element={<Frontpage/>}/>
    <Route path="/wishespage" element={<Birthdaywishes/>}/>
  </Routes>
    </div>
  );
}

export default App;
