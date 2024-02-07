import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Servicios from './pages/Servicios/Servicios';

function App() {
  return (
    <div>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/servicios" element={<Servicios/>}></Route>
      </Routes>
    </Router>
    </div>
    );
}

export default App;
