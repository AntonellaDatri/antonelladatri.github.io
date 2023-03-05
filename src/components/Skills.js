import { FaHtml5, FaCss3Alt, FaJsSquare, FaNpm ,FaNode, FaReact, FaSymfony, FaBootstrap, FaJava, FaPhp} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiSpring, SiPostgresql, SiPostman, SiFirebase } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import { FcCheckmark } from "react-icons/fc";

function App() {
  return (
    <section className="resume-section" id="skills">
        <div className="resume-section-content">
            <h2 className="mb-5">Conocimientos</h2>
            <div className="subheading mb-3">Herramientas y Lenguajes de programacion</div>
            <ul className="list-inline dev-icons skills-grid">
                <a target='_blank' rel="noreferrer" className="social-icon skills-items" href="https://developer.mozilla.org/es/docs/Web/HTML"><li className="list-inline-item html-color"> <FaHtml5 /></li></a>
                <a target='_blank' rel="noreferrer" className="social-icon skills-items" href="https://developer.mozilla.org/es/docs/Web/CSS"><li className="list-inline-item css-color"><FaCss3Alt/></li></a>
                <a target='_blank' rel="noreferrer" className="social-icon skills-items" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><li className="list-inline-item js-color"><FaJsSquare/></li></a>
                <a target='_blank' rel="noreferrer" className="social-icon skills-items" href="https://reactjs.org/"><li className="list-inline-item react-color"><FaReact/></li></a>
                <a target='_blank' rel="noreferrer" className="social-icon skills-items" href="https://www.java.com/es/"><li className="list-inline-item java-color"><FaJava/></li></a>
                <a target='_blank' rel="noreferrer" className="social-icon skills-items" href="https://kotlinlang.org/"><li className="list-inline-item kotlin-color"><TbBrandKotlin/></li></a>
                <a target='_blank' rel="noreferrer" className="social-icon skills-items" href="https://www.php.net/"><li className="list-inline-item php-color"><FaPhp/></li></a>
                <a target='_blank' rel="noreferrer" className="social-icon skills-items" href="https://spring.io/"><li className="list-inline-item spring-color"><SiSpring/></li></a>
                <a target='_blank' rel="noreferrer" className="social-icon skills-items" href="https://symfony.es/"><li className="list-inline-item symfony-color"><FaSymfony/></li></a>
            </ul>
            <ul className="list-inline dev-icons skills-grid">
                <a target='_blank' rel="noreferrer" className="social-icon skills-items" href="https://www.npmjs.com/"><li className="list-inline-item npm-color"><FaNpm/></li></a>
                <a target='_blank' rel="noreferrer" className="social-icon skills-items" href="https://nodejs.org/en/"><li className="list-inline-item node-color"><FaNode/></li></a>
                <a target='_blank' rel="noreferrer" className="social-icon skills-items" href="https://www.postman.com/"><li className="list-inline-item postman-color"><SiPostman/></li></a>
                <a target='_blank' rel="noreferrer" className="social-icon skills-items" href="https://getbootstrap.com/"><li className="list-inline-item bootstrap-color"><FaBootstrap/></li></a>
            </ul>
            <ul className="list-inline dev-icons skills-grid">
                <a target='_blank' rel="noreferrer" className="social-icon skills-items" href="https://firebase.google.com/?hl=es"><li className="list-inline-item firebase-color"><SiFirebase/></li></a>
                <a target='_blank' rel="noreferrer" className="social-icon skills-items" href="https://www.mysql.com/"><li className="list-inline-item mySQL-color"><GrMysql/></li></a>
                <a target='_blank' rel="noreferrer" className="social-icon skills-items" href="https://www.postgresql.org/"><li className="list-inline-item postgreSQL-color"><SiPostgresql/></li></a>
            </ul>
            <div className="subheading mb-3">Otros conocimientos</div>
            <ul className="fa-ul mb-0 ms-0">
                <li className="list-style-type ">
                    <FcCheckmark/>
                    <spam className="ml-3"> Test Unitarios </spam> 

                </li>
                <li className="list-style-type">
                    <FcCheckmark/>
                    <spam className="ml-3"> Test de Arquitectura </spam>
 
                </li>
                <li className="list-style-type">
                    <FcCheckmark/>
                    <spam className="ml-3"> OOP </spam>

                </li>
                <li className="list-style-type">
                    <FcCheckmark/>
                    <span className="fa-li"><i className="fas fa-check"></i></span>
                    <spam className="ml-3">AOP </spam>
                </li>
            </ul>
        </div>
    </section>
  );
}

export default App;