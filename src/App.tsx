import './Style/styles.css';
import Navbar from "./components/navbar"
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Contact from "./pages/contact"

let elements;

function Render() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path='/portfolio' element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>
  )
}


export default Render;
