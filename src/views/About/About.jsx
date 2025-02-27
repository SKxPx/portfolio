import Skills from "../../components/Skills/Skills";
import Certificate from "../../components/Certificate/Certificate";
import "./css/About.css";

const About = () => {
  return (
    <main>
      <div className="about">
        <h1 className="title-about">¡Sobre Mi!</h1>
        <div className="content-top">
          <div>
            <img
              src="https://res.cloudinary.com/dp1c36xd0/image/upload/v1740696470/img-portfolio/img/hxi3kouv9nsargnjjlwb.webp"
              alt="img Perfil"
              className="img-about-top"
            />
          </div>
          <p className="pTop">
            ¡Hola! Soy <span>Sebastián Alejandro Pavez Castro</span>, un apasionado{" "}
            <span>Full Stack Web Developer</span>
          </p>
        </div>
        <span className="span">Conocimiento en tecnologías como:</span>
        <Skills />
        <div className="content-bot">
          <div>
            <p className="text">
              Mi experiencia se enfoca en la <span>creación</span>,{" "}
              <span>desarrollo</span> y <span>maquetación</span> de proyectos,
              con el objetivo de ofrecer soluciones efectivas y mejorar la
              experiencia del usuario.
            </p>
            <p className="text">
              Como <span>autodidacta</span>, me esfuerzo por ampliar
              constantemente mi conocimiento en diversas tecnologías para{" "}
              <span>mantenerme actualizado</span> con las últimas tendencias y
              avances en el campo tecnológico. Aunque aún estoy en proceso de
              desarrollo en mi carrera laboral y en proyectos freelance, veo
              cada oportunidad como un emocionante desafío.
            </p>
            <p className="text">
              Estoy entusiasmado por las oportunidades futuras y ansioso por
              contribuir con mi pasión al mundo del desarrollo web. ¡Explora mi
              portafolio para descubrir más sobre los proyectos en los que he
              trabajado y las habilidades que puedo aportar!
            </p>
          </div>

          <img
            src="https://res.cloudinary.com/dp1c36xd0/image/upload/v1740696469/img-portfolio/img/p7ilev3ipkjybx8qvgut.webp"
            alt="img perfil 2"
            className="img-about-bot"
          />
        </div>
      </div>
      <Certificate />
    </main>
  );
};

export default About;
