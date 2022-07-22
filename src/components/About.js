import * as Icon from 'react-bootstrap-icons';

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
            <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            <div className="social-icons">
                <a target='_blank' className="social-icon" href="https://www.linkedin.com/in/antonella-d-atri-0b8418197/!"><Icon.Linkedin /></a>
                <a target='_blank' className="social-icon" href="https://github.com/AntonellaDatri"><Icon.Github /></a>
                {/* <a className="social-icon" href="#!"><Icon.ArrowRight /><i className="fab fa-twitter"></i></a>
                <a className="social-icon" href="#!"><Icon.ArrowRight /><i className="fab fa-facebook-f"></i></a> */}
            </div>
        </div>
    </section>
  );
}

export default About;