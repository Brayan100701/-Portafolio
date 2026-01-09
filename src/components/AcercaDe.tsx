export default function AcercaDe() {
  return (
    <>
      <section id="acerca-de" className="text-light bg-dark">
        <section id="contacto" className="container p-3 mb-2 text-light">
          <div className="row">
            <div className="col">
              <p className="descripcion" id="hola">
                ¡Hola!
              </p>
              <p className="descripcion" id="nombre">
                Mi nombre es Brayan Benjamín Sánchez Guillén
              </p>
              <p className="descripcion" id="inge">
                Ingeniero en Computación
              </p>
            </div>
            <div className="col">
              <img
                className="rounded-circle"
                src="/perfilFormal.png"
                id="perfil"
              />
            </div>
          </div>
          <div className="row">
            <p> </p>
          </div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/brayan-benjamín-sánchez-guillén-362b1a3a2"
          >
            <img
              className="rounded-circle iconos-portada"
              src="/linkedIn.png"
            />
          </a>
          <a target="_blank" href="https://github.com/Brayan100701">
            <img
              className="rounded-circle iconos-portada"
              src="/tecnologias/github150.png"
            />
          </a>
          <div className="row">
            <a
              className="btn btn-dark"
              id="btnpdf"
              href="/CV/CV-Brayan-Sanchez.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="CV-Brayan Sanchez.pdf"
            >
              Descarga mi CV
            </a>
          </div>
        </section>
        <div className="container">
          <p id="presentacion">
            Soy apasionado del desarrollo de software, hardware, PC Gaming y la
            tecnología en general. Tengo como objetivo continuar desarrollándome
            en el área de Tecnologías de la Información, fortaleciendo mis
            conocimientos en sistemas, infraestructura y desarrollo de software,
            con miras a roles de mayor responsabilidad técnica.
          </p>
        </div>
      </section>
    </>
  );
}
