export default function AcercaDe() {
  return (
    <>
      <section id="acerca-de" className="text-light bg-dark">
        <section id="contacto" className="container p-3 mb-2 text-light">
          <article>
            <p className="descripcion" id="hola">
              ¡Hola!
            </p>
            <p className="descripcion" id="nombre">
              Mi nombre es Brayan Benjamín Sánchez Guillén
            </p>
            <p className="descripcion" id="inge">
              Ingeniero en Computación
            </p>
            <img
              className="rounded-circle"
              src="/perfilFormal.png"
              id="perfil"
            />
            <div>
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
            </div>
          </article>
        </section>
      </section>
    </>
  );
}
