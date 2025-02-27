import "./css/Cards.css";
import Skills from "../Skills/Skills";

const Cards = () => {
  return (
    <div>
      <h1 className="title-card">Proyectos</h1>
      <h2 className="subtitle-card">Proyectos Formativos</h2>
      <a href="https://vehibuy-rho.vercel.app/" className="link">
        <div className="card-project">
          <div className="card-content">
            <h3 className="title-card-project">
              Proyecto Final (Grupal) VehiBuy
            </h3>
            <img
              src="https://res.cloudinary.com/dp1c36xd0/image/upload/v1740696489/img-portfolio/projects/zied3srmtmdz3sp0osml.webp"
              alt="VehiBuy"
              className="img-card-project"
            />
            <p className="p-card">
              Sumérgete en el mundo del lujo automotriz con VehiBuy, nuestro
              emocionante proyecto final en el bootcamp de Soy Henry. Formando
              parte de un equipo dinámico.
            </p>
          </div>
          <h3 className="technologies">Tecnologías Utilizadas</h3>
          <Skills />
        </div>
      </a>
      <a href="https://github.com/SKxPx/PIFood" className="link">
        <div className="card-project">
          <div className="card-content">
            <h3 className="title-card-project">
              Proyecto Final (individual) PI-Food
            </h3>
            <img
              src="https://res.cloudinary.com/dp1c36xd0/image/upload/v1740696489/img-portfolio/projects/teuohysc23uev4y1i8tf.webp"
              alt="Perfil Github"
              className="img-card-project"
            />
            <p className="p-card">
              Es una aplicación web de página única (SPA) que permite a los
              usuarios buscar, ver y guardar recetas de alimentos utilizando la
              API de Spoonacular.
            </p>
          </div>
          <h3 className="technologies">Tecnologías Utilizadas</h3>
          <Skills />
        </div>
      </a>
    </div>
  );
};

export default Cards;
