import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateForm } from "./Validation/Validation";
import "./css/Form.css";

const Form = () => {
  const refForm = useRef();

  const handlerSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_4nlu1qp";
    const templateId = "template_rh9nwp8";
    const apiKey = "nQu6RSHFRfwVbu1wb";

    const formData = {
      email: refForm.current.email.value,
      name: refForm.current.name.value,
      message: refForm.current.message.value,
    };

    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => {
        toast.error(error);
      });
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => {
        console.log(result.text);
        toast.success("Su correo electrónico ha sido enviado correctamente. Pronto recibirá una respuesta de mi parte.");
        refForm.current.reset();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Hubo un error al enviar el correo electrónico");
      });
  };

  return (
    <form ref={refForm} onSubmit={handlerSubmit} className="form">
      <ToastContainer />
      <fieldset className="form-container">
        <legend className="title">Información de contacto</legend>
        <div className="container-info">
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Ej: sebastian@gmail.com"
            className="input-text"
            required
          />
        </div>
        <div className="container-info">
          <label htmlFor="name">Nombre:</label>
          <input
            name="name"
            id="name"
            type="text"
            maxLength={200}
            placeholder="Ej: Sebastián"
            className="input-text"
            required
          />
        </div>
        <div className="container-info">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Ej: Hola"
            className="textarea"
            required
          ></textarea>
        </div>
        <input type="submit" value="Enviar" className="submit" />
      </fieldset>
    </form>
  );
};

export default Form;
