import "./css/ContactLinks.css";

const ContactLinks = () => {
  return (
    <div>
      <h3>Redes de Contacto</h3>
      <ul className="ul">
        <li className="li">
          <a href="https://www.linkedin.com/in/sebasti%C3%A1n-pavez-castro/">
            <img
              className="img-li"
              src="https://res.cloudinary.com/dp1c36xd0/image/upload/v1740696440/img-portfolio/icons/lqibvjosph0ujey7713y.webp"
              alt="logo LinkedIn"
            ></img>
          </a>
          <span className="span-link">LinkedIn</span>
        </li>
        <li className="li">
          <a href="https://github.com/SKxPx/">
            <img
              className="img-li"
              src="https://res.cloudinary.com/dp1c36xd0/image/upload/v1740696440/img-portfolio/icons/evlrzjrt1cvoao4m4tuh.webp"
              alt="logo Github"
            ></img>
          </a>
          <span className="span-link">Github</span>
        </li>
        <li className="li">
          <a href="https://wa.me/56976147294?text=Hola%20Sebasti%C3%A1n%20Castro,%20%C2%BFc%C3%B3mo%20est%C3%A1s%3F">
            <img
              className="img-li"
              src="https://res.cloudinary.com/dp1c36xd0/image/upload/v1740696438/img-portfolio/icons/rgi121k5wzmujglwlaxu.webp"
              alt="logo WhatsApp"
            ></img>
          </a>
          <span className="span-link">WhatsApp</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactLinks;
