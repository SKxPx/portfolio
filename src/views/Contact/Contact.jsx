import Form from "../../components/Form/Form";
import Downland from "../../components/Downland/Downland";
import "./css/Contact.css";

const Contact = () => {
  return (
    <main className="main-contact">
      <div className="contact-top">
        <h1 className="title-contact">Si quieres contactarme:</h1>
        <Downland />
      </div>
      <div className="contact">
        <Form />
        <div>
          <h2>Redes de Contacto</h2>
          <ul className="ul">
            <li className="li">
              <a
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
              <a href="https://github.com/SKxPx/">
                <img
                  className="img-li"
                  src="src\assets\icons\Github.png"
                  alt="Github"
                ></img>
              </a>
              <span className="span-link">Github</span>
            </li>
            <li className="li">
              <a
                href="https://wa.me/56976147294?text=Hola%20Sebasti%C3%A1n%20Castro,%20%C2%BFc%C3%B3mo%20est%C3%A1s%3F"
              >
                <img
                  className="img-li"
                  src="src\assets\icons\WhatsApp.png"
                  alt="Github"
                ></img>
              </a>
              <span className="span-link">WhatsApp</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Contact;
