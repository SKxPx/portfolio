export const validateEmail = (email) => {
  const re =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validateForm = (formData) => {
  const { email, name, message } = formData;

  const errors = {};

  if (!validateEmail(email)) {
    errors.email = "Por favor, ingresa un correo electrónico válido";
  }

  if (!name.trim()) {
    errors.name = "Por favor, ingresa tu nombre";
  } else if (!/^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(name.trim())) {
    errors.name = "El nombre solo puede contener letras y espacios, no números ni caracteres especiales.";
  }

  if (!message.trim()) {
    errors.message = "Por favor, ingresa un mensaje";
  }

  return errors;
};
