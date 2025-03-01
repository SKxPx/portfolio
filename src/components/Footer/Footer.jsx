import "./css/Footer.css";
import Download from "../Download/Download";
import  { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="footer">
      <span className="info">Sebastián Alejandro Pavez  Castro</span>
      { location.pathname != "/Contact" && <Download /> }
    </footer>
  );
};

export default Footer;
