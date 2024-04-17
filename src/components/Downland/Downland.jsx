import './css/Downland.css'

const Downland = () => {
  return (
    <div className="downland-container">
        <span className="text-downland">Puedes Descargar mi CV</span>
        <a
          href="https://res.cloudinary.com/dp1c36xd0/image/upload/v1713377508/Portfolio%20IMG/cv/zmlyrtbivcecvvuc5kqu.pdf"
          download="Sebastián_Castro_Pavez_(Full-Stack-Web-Developer).pdf"
          className="downland-CV"
        >
          <button className="downland">Descargar CV</button>
        </a>
      </div>
  )
}

export default Downland