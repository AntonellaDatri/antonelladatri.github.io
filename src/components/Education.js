function Education() {
  return (
    <section className="resume-section" id="education">
        <div className="resume-section-content">
            <h2 className="mb-5">Educación</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between ">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Universidad Nacional de Quilmes</h3>
                    <div className="spaceBetween">
                        <div className="subheading ">Licenciatura en Informática </div>
                        <div className="mb-2"><span className="text-primary">2018 - Presente</span></div>
                    </div>
                    <div className="spaceBetween">
                        <div className="subheading">Tecnicatura Universitaria en Programación Informática</div>
                        <div><span className="text-primary">2018 - 2022</span></div>
                    </div>
                    <p className="lead mb-1"> - Desarrollo de Software con multiples tecnologias y lenguajes de progamacion usando metodologias Agiles; MVPs y SCRUM.</p>
                    <p className="lead mb-1"> - Deploys con CI/CD.</p>
                    <p className="lead mb-1"> - Testing y coverage unitario, de integración, e2e y de arquitectura.</p>
                    <p className="lead mb-1"> - Programación imperativa, funcional y orientada a objetos. Diseño y normalización de bases de datos, estructuras de datos y metaprogramación.</p>
                </div>
            </div>
                <a target="_blank" className="btn btn-primary" style={{float: "right"}} href="plan_estudios.pdf">Descargar plan de estudios</a>
            <div className="mb-5" ></div>
            {/* <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                    <h3 className="mb-0">James Buchanan High School</h3>
                    <div className="subheading mb-3">Technology Magnet Program</div>
                    <p>GPA: 3.56</p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">August 2002 - May 2006</span></div>
            </div> */}
        </div>
    </section>
  );
}

export default Education;