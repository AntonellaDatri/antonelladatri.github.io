function Education() {
  return (
    <section className="resume-section" id="education">
        <div className="resume-section-content">
            <h2 className="mb-5">Educación</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between ">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Universidad Nacional de Quilmes</h3>
                    <div className="subheading mb-3">Tecnicatura Universitaria en Programación Informática</div>
                    <p>GPA: 8.63</p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">2018 - Presente</span></div>
            </div>
                <a className="btn btn-primary" style={{float: "right"}} href="plan_estudios">Descargar plan de estudios</a>
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