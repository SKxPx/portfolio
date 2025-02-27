import './css/Downland.css'

const Downland = () => {
  return (
    <div className="downland-container">
        <span className="text-downland">Puedes Descargar mi CV</span>
        <a
          href="/assets/cv/CV.pdf"
          download="Sebastián_Castro_Pavez.pdf"
          className="downland-CV"
        >
          <button className="downland">Descargar CV</button>
        </a>
      </div>
  )
}

export default Downland