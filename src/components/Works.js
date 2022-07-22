function App() {
  return (
    <section className="resume-section" id="Works">
        <div className="resume-section-content">
          <h2 className="mb-5">Works</h2>
          <div className="imagenDemo">
            <img src="Api.png" width="80%" alt="Api Demo"/>
            <div className="mb-1"></div>
            <div className="buttonDemo">
              <a class="btn btn-primary" style={{width: "40%"}} href="https://desapp-grupo-f-012022.herokuapp.com/swagger-ui/#" role="button">Demo</a>
              <a class="btn btn-dark" style={{width: "40%"}} href="https://github.com/AntonellaDatri/DesApp-Grupo-F-012022" role="button">Repo</a>
            </div>
          </div>
          <div className="mb-5"></div>
          <div className="imagenDemo">
            <img src="Klaus.png" width="80%" alt="Juego klaus Demo"/>
            <div className="mb-1"></div>
            <div className="buttonDemo">
              <a class="btn btn-primary" style={{width: "40%"}} href="https://mendezigna.github.io/klaus-mision-rescate/" role="button">Demo</a>
              <a class="btn btn-dark" style={{width: "40%"}} href="https://github.com/mendezigna/klaus-mision-rescate" role="button">Repo</a>
            </div>
          </div>
          <div className="mb-5"></div>
          <div className="imagenDemo">
            <img src="PiedraPapelTijeraLagartoSpock.png" width="80%" alt="Piedra Papel Tijera Lagarto Spock Demo"/>
            <div className="mb-1"></div>
            <div className="buttonDemo">
              <a class="btn btn-primary" style={{width: "40%"}} href="https://antonelladatri.github.io/piedra-papel-tijera-lagarto-spock/#/piedra-papel-tijera-lagarto-spock/" role="button">Demo</a>
              <a class="btn btn-dark" style={{width: "40%"}} href="https://github.com/AntonellaDatri/piedra-papel-tijera-lagarto-spock" role="button">Repo</a>
            </div>
          </div>
        </div>
    </section>
  );
}

export default App;