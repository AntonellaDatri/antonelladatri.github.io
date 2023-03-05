// import * as Icon from 'react-bootstrap-icons';

function About() {
  return (
    <section className="resume-section" id="about">
        <div className="resume-section-content">
            <h1 className="mb-0">
                Antonella
                <span className="text-primary">D'Atri</span>
            </h1>
            <div className="subheading mb-5">
                Berazategui · Buenos Aires, Argentina · (+54) 11 4168 1151 · <a href="datri.antonella99@gmail.com">datri.antonella99@gmail.com</a>
            </div>
            <p className="lead mb-2">👋 Hola, soy Anto, una desarrolladora de software y estudiante de informática de la Universidad Nacional de Quilmes.</p>
            <p className="lead mb-2">💼 Actualmente participo en el desarrollo, mantenimiento y testing de soluciones IT para el mundo financiero.</p>
            <p className="lead mb-2">🎓 Recientemente, me gradue de Tecnica en Programación Informática, pero sigo mis estudios de Licenciatura. Durante mis años universitarios fui parte del equipo de la materia Introducción a la programación como ayudante docente.</p>

            <div className="social-icons">
                <a  className="social-icon " href="https://www.linkedin.com/in/antonella-d-atri-0b8418197/!"><i class="bi bi-linkedin"></i></a>
                <a target='_blank' className="social-icon" href="https://github.com/AntonellaDatri"><i class="bi bi-github"></i></a>
                {/* <a className="social-icon" href="#!"><Icon.ArrowRight /><i className="fab fa-twitter"></i></a>
                <a className="social-icon" href="#!"><Icon.ArrowRight /><i className="fab fa-facebook-f"></i></a> */}
            </div>
        </div>
    </section>
  );
}

export default About;