import Skills from "../../components/Skills/Skills";
import ContactLinks from "../../components/ContactLinks/ContactLinks";
import Title from "../../components/Title/Title";
import "./css/Home.css";

const Home = () => {
  return (
    <main>
      <div className="home">
        <div className="content">
          <div className="title-container">
            <h2>
              Hola, Soy <br />
            </h2>
            <Title/>
          </div>
          <p className="p">
            <span>Desarrollador web Full-Stack</span> chileno. Siempre estoy en
            busca de <span>desarrollar</span>, <span>mejorar</span> y <span>adquirir</span> nuevas habilidades para crecer como
            profesional.
          </p>
          <ContactLinks />
        </div>
        <img
          src="https://res.cloudinary.com/dp1c36xd0/image/upload/v1740696470/img-portfolio/img/hxi3kouv9nsargnjjlwb.webp"
          alt="imgProfile"
          className="profileImg"
        />
      </div>
      <Skills />
    </main>
  );
};

export default Home;
