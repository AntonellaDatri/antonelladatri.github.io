import * as Icon from './Icons';

function App() {
  return (
    <section className="resume-section" id="skills">
        <div className="resume-section-content">
            <h2 className="mb-5">Conocimientos</h2>
            <div className="subheading mb-3">Lenguajes de programacion</div>
            <ul className="list-inline dev-icons">
                
                <li className="list-inline-item"><Icon.Html5/></li>
                <li className="list-inline-item"><Icon.Css3/></li>
                <li className="list-inline-item"><Icon.Js/></li>
                <li className="list-inline-item"><Icon.Npm/></li>
                <li className="list-inline-item"><Icon.React/></li>
                <li className="list-inline-item"><Icon.Symfony/></li>
                <li className="list-inline-item"><Icon.Spring/></li>
                <li className="list-inline-item"><Icon.Bootstrap/></li>
                <li className="list-inline-item"><Icon.Java/></li>
                <li className="list-inline-item"><Icon.MySQL/></li>
                <li className="list-inline-item"><Icon.Kotlin/></li>
                <li className="list-inline-item"><Icon.PostgreSQL/></li>
            </ul>
            <div className="subheading mb-3">Otros conocimientos</div>
            <ul className="fa-ul mb-0">
                <li>
                    <span className="fa-li"><i className="fas fa-check"></i></span>
                    Test Unitarios

                </li>
                <li>
                    <span className="fa-li"><i className="fas fa-check"></i></span>
                    Test de Arquitectura
 
                </li>
                <li>
                    <span className="fa-li"><i className="fas fa-check"></i></span>
                    OOP

                </li>
                <li>
                    <span className="fa-li"><i className="fas fa-check"></i></span>
                    AOP
                </li>
            </ul>
        </div>
    </section>
  );
}

export default App;