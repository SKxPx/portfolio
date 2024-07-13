import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx"
import Home from "./views/Home/Home.jsx"
import About from "./views/About/About.jsx"
import Contact from "./views/Contact/Contact.jsx"
import Projects from "./views/Projects/Projects.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Projects" element={<Projects/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
