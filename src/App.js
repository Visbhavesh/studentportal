import "./App.css";
import Title from "./component/Tittle";
import Footer from "./component/footer";
import Card from "./component/card.js";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Dashboard from "./Dashboard.js";
function App() {
  return (
    <div className="App">
      <Title />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
