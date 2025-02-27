import "./css/Certificate.css";

const Certificate = () => {
  return (
    <div className="certificates">
      <h2 className="title-certificates">Certificados</h2>
      <ul className="ul-certificates">
        <li>
          <a href="https://certificates.soyhenry.com/new-cert?id=487b49bab99bad26e9bf57e65739e34d9f218de190c320085ea9861b036ed892">
            <img
              className="img-certificates"
              src="https://res.cloudinary.com/dp1c36xd0/image/upload/v1740697693/img-portfolio/img-certificados/ehufsahefufodfjsjuva.webp"
              alt="logo Soy Henry"
            />
            <span>Full Stack Web Developer - Soy Henry</span>
          </a>
        </li>
        <li>
          <a href="https://www.credly.com/badges/1ce2ff98-85c1-4632-b5c5-8de25b0fba72/public_url">
            <img
              className="img-certificates"
              src="https://res.cloudinary.com/dp1c36xd0/image/upload/v1740697983/img-portfolio/img-certificados/golqfm9ubjmn4ychouia.webp"
              alt="Introduction Cybersecurity"
            />
            <span>Introduction to Cybersecurity - Cisco</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Certificate;
