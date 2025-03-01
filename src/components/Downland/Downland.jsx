import './css/Downland.css'

const Downland = () => {
  return (
    <div className="downland-container">
        <span className="text-downland">Puedes Descargar mi CV</span>
        <a
          href="/assets/cv/Sebastián_Pavez_Castro.pdf"
          download="Sebastián_Pavez_Castro.pdf"
          className="downland-CV"
        >
          <button className="downland">Descargar CV</button>
        </a>
      </div>
  )
}

export default Downland