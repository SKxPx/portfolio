import './css/Download.css';

const Download = () => {
  return (
    <div className="download-container">
      <a
        href="public\assets\cv\Sebastián_Pavez_Castro.pdf"
        download="Sebastián_Pavez_Castro.pdf"
        className="download-CV"
      >
        <button className="download">Puedes descargar mi CV</button>
      </a>
    </div>
  );
};

export default Download;