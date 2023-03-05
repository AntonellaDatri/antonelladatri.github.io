import { FaHtml5, FaCss3Alt, FaJsSquare, FaNpm ,FaNode, FaReact, FaSymfony, FaBootstrap, FaJava} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiSpring, SiPostgresql, SiPostman, SiFirebase } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";

function App() {
  return (
    <section className="resume-section" id="skills">
        <div className="resume-section-content">
            <h2 className="mb-5">Conocimientos</h2>
            <div className="subheading mb-3">Herramientas y Lenguajes de programacion</div>
            <ul className="list-inline dev-icons skills-grid">
                <li className="list-inline-item html-color"> <FaHtml5 /></li>
                <li className="list-inline-item css-color"><FaCss3Alt/></li>
                <li className="list-inline-item react-color"><FaReact/></li>
                <li className="list-inline-item bootstrap-color"><FaBootstrap/></li>
                <li className="list-inline-item java-color"><FaJava/></li>
                <li className="list-inline-item kotlin-color"><TbBrandKotlin/></li>
                <li className="list-inline-item spring-color"><SiSpring/></li>
                <li className="list-inline-item"><FaSymfony/></li>
                <li className="list-inline-item js-color"><FaJsSquare/></li>
                <li className="list-inline-item npm-color"><FaNpm/></li>
                <li className="list-inline-item node-color"><FaNode/></li>
                <li className="list-inline-item postman-color"><SiPostman/></li>
            </ul>
            <ul className="list-inline dev-icons skills-grid">
                <li className="list-inline-item firebase-color"><SiFirebase/></li>
                <li className="list-inline-item mySQL-color"><GrMysql/></li>
                <li className="list-inline-item postgreSQL-color"><SiPostgresql/></li>
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