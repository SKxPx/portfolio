import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="src\assets\img\logo.png" alt="logo" className="logo-img" />
        </Link>
      </div>

      <div className="nav-links">
        <Link className="nav-link" to="/">
          Inicio
        </Link>
        <Link className="nav-link" to="/About">
          Sobre Mi
        </Link>
        <Link className="nav-link" to="/Project">
          Proyectos
        </Link>
      </div>

      <div className="contact-link">
        <Link className="nav-link" to="/Contact">
          Contacto
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
