function Experience() {
  return (
    <section className="resume-section" id="experience">
        <div className="resume-section-content">
            <h2 className="mb-5">Experiencia</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Software Developer </h3>
                    <div className="subheading mb-3">Universidad Nacional Arturo Jauretche </div>
                    <p>Creación, desarrollo y mantenimiento frontend y backend de sistemas web internos para el personal de la universidad. Entre mis tareas destaco el trato directo con el personal para el desarrollo del sistema. {/* Tengo experiencia en la interacción con APIs y Bases de Datos. */}</p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">Abril 2021 - Presente</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Auxiliar docente</h3>
                    <div className="subheading mb-3">Universidad Nacional de Quilmes </div>
                    <p>Apoyo en clases y ayuda en la corrección de tareas diarias de los alumnos durante los primeros años de mi carrera en la materia Introducción a la programación.</p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">Marzo 2019 - Diciembre 2020</span></div>
            </div>
        </div>
    </section>
  );
}

export default Experience;