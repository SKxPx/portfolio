import Skills from "../../components/Skills/Skills";
import ContactLinks from "../../components/ContactLinks/ContactLinks";
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
          <ContactLinks />
        </div>
        <img
          src="https://res.cloudinary.com/dp1c36xd0/image/upload/v1713374244/Portfolio%20IMG/img/qq2haypi4z8ruovj6h3z.png"
          alt="imgProfile"
          className="profileImg"
        />
      </div>
      <Skills />
    </main>
  );
};

export default Home;
