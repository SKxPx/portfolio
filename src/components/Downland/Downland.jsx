import './css/Downland.css'

const Downland = () => {
  return (
    <div className="downland-container">
        <span className="text-downland">Puedes Descargar mi CV</span>
        <a
          href="https://drive.google.com/file/d/135xfzZbV1tOB21y5PlPGC3daDJxXfDD2/view"
          download="Sebastián_Castro_Pavez_(Full-Stack-Web-Developer).pdf"
          className="downland-CV"
        >
          <button className="downland">Descargar CV</button>
        </a>
      </div>
  )
}

export default Downland