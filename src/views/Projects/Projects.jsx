import "./css/Projects.css";
import Cards from "../../components/Cards/Cards";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <main className="projects">
      <div className="project-container">
        <Cards />
        <span className="message-text">
        Si quieres conocer más detalles sobre mis proyectos, puedes consultar mi CV. Además, te invito a visitar mi perfil en GitHub, donde encontrarás las últimas actualizaciones y trabajos.
        </span>
        <ul className="ul">
          <li className="li">
            <a className="" href="https://github.com/SKxPx/">
              <img
                className="img-li"
                src="https://res.cloudinary.com/dp1c36xd0/image/upload/v1740696440/img-portfolio/icons/evlrzjrt1cvoao4m4tuh.webp"
                alt="logo Github"
              ></img>
            </a>
            <span className="span-link">Github</span>
          </li>
        </ul>
        <span className="message-text">Por otro lado, si prefieres, puedes hacer clic en el botón de abajo para contactarme directamente.</span>
        <button className="btn">
          <Link className="btn-contact" to="/Contact">
            Contacto
          </Link>
        </button>
      </div>
    </main>
  );
};

export default Projects;
