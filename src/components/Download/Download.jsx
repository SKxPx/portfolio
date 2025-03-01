import './css/Download.css';

const Download = () => {
  return (
    <div className="download-container">
      <span className="text-download">Puedes Descargar mi CV</span>
      <a
        href="/assets/cv/Sebastián_Pavez_Castro.pdf"
        download="Sebastián_Pavez_Castro.pdf"
        className="download-CV"
      >
        <button className="download">Descargar CV</button>
      </a>
    </div>
  );
};

export default Download;