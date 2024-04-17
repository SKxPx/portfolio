import Form from "../../components/Form/Form";
import Downland from "../../components/Downland/Downland";
import ContactLinks from "../../components/ContactLinks/ContactLinks";
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
        <ContactLinks />
      </div>
    </main>
  );
};

export default Contact;
