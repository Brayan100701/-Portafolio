interface Props {
  language: {
    hi: string;
    name: string;
    degree: string;
    description: string;
    button: string;
    ref: string;
  };
}

export default function AcercaDe({ language }: Props) {
  return (
    <>
      <section id="acerca-de" className="text-light">
        <section id="contacto" className="container p-3 mb-2 text-light">
          <div className="row">
            <div className="col">
              <p className="descripcion" id="hola">
                {language.hi}
              </p>
              <p className="descripcion" id="nombre">
                {language.name}
              </p>
              <p className="descripcion" id="inge">
                {language.degree}
              </p>
            </div>
            <div className="col">
              <img
                className="rounded-circle iconos-portada"
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
          <div className="container">
            <p id="presentacion">{language.description}</p>
            <a
              className="btn btn-dark"
              id="btnpdf"
              href={language.ref}
              target="_blank"
              rel="noopener noreferrer"
              download="CV-Brayan Sanchez.pdf"
            >
              {language.button}
            </a>
          </div>
        </section>
      </section>
    </>
  );
}
