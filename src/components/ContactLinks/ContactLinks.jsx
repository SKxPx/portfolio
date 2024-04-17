import "./css/ContactLinks.css";

const ContactLinks = () => {
  return (
    <div>
      <h3>Redes de Contacto</h3>
      <ul className="ul">
        <li className="li">
          <a href="https://www.linkedin.com/in/sebasti%C3%A1n-castro-pavez/">
            <img
              className="img-li"
              src="https://res.cloudinary.com/dp1c36xd0/image/upload/v1713374222/Portfolio%20IMG/icons/u7toubcf73cvu2gj7o45.png"
              alt="LinkedIn"
            ></img>
          </a>
          <span className="span-link">LinkedIn</span>
        </li>
        <li className="li">
          <a href="https://github.com/SKxPx/">
            <img
              className="img-li"
              src="https://res.cloudinary.com/dp1c36xd0/image/upload/v1713374222/Portfolio%20IMG/icons/lwp07jop978bfl2uamuy.png"
              alt="Github"
            ></img>
          </a>
          <span className="span-link">Github</span>
        </li>
        <li className="li">
          <a href="https://wa.me/56976147294?text=Hola%20Sebasti%C3%A1n%20Castro,%20%C2%BFc%C3%B3mo%20est%C3%A1s%3F">
            <img
              className="img-li"
              src="https://res.cloudinary.com/dp1c36xd0/image/upload/v1713374224/Portfolio%20IMG/icons/sm2l24iexq9ff2bnhldj.png"
              alt="Github"
            ></img>
          </a>
          <span className="span-link">WhatsApp</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactLinks;
