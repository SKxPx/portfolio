import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="https://res.cloudinary.com/dp1c36xd0/image/upload/v1713374245/Portfolio%20IMG/img/zpjq26f0eraqjjerdxkg.png" alt="logo" className="logo-img" />
        </Link>
      </div>

      <div className="nav-links">
        <Link className="nav-link" to="/About">
          Sobre Mi
        </Link>
        <Link className="nav-link" to="/Projects">
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
