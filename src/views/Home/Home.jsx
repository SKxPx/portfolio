import Skills from "../../components/Skills/Skills";
import "./css/Home.css";

const Home = () => {
  return (
    <main>
      <div className="home">
        <div className="content">
          <div className="animation-container">
            <h1>
              Hola, Soy <br />
              <span className="title-span">Sebastián Castro Pavez</span>
            </h1>
          </div>
          <p className="p">
            <span>Desarrollador web Full-Stack</span> chileno. Siempre estoy en
            busca de <span>desarrollar</span>, <span>mejorar</span> y
            <span>adquirir</span> nuevas habilidades para crecer como
            profesional.
          </p>
          <ul className="ul">
            <li className="li">
              <a
                className=""
                href="https://www.linkedin.com/in/sebasti%C3%A1n-castro-pavez/"
              >
                <img
                  className="img-li"
                  src="src\assets\icons\LinkedIn.png"
                  alt="LinkedIn"
                ></img>
              </a>
              <span className="span-link">LinkedIn</span>
            </li>
            <li className="li">
              <a className="" href="https://github.com/SKxPx/">
                <img
                  className="img-li"
                  src="src\assets\icons\Github.png"
                  alt="Github"
                ></img>
              </a>
              <span className="span-link">Github</span>
            </li>
          </ul>
        </div>
        <img
          src="src\assets\img\imgProfile.png"
          alt="imgProfile"
          className="profileImg"
        />
      </div>
      <Skills />
    </main>
  );
};

export default Home;
