export default function MasDe() {
  return (
    <>
      <section id="mas-de" className="container p-3 mb-2 text-light">
        <h2>Más sobre mi</h2>
        <div className="row">
          <div className="col-sm-7 mb-3 mb-sm-0">
            <div className="card bg-secondary text-light">
              <div className="card-body">
                <h5>Aptitudes</h5>
                <ul className="extra">
                  <li>Autodidacta</li>
                  <li>Competencias digitales</li>
                  <li>Orientación al resultado</li>
                  <li>Resolución de problemas</li>
                  <li>Capacidad de adaptación</li>
                  <li>Proactividad</li>
                  <li>Toma de decisiones</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="card bg-secondary text-light">
              <div className="card-body">
                <h5>Hobbies</h5>
                <ul className="extra">
                  <li>Libros</li>
                  <li>Entusiasta del Hardware y PC Gaming</li>
                  <li>
                    Noticias de seguridad y novedades en distintas tecnologías
                  </li>
                  <li>Contenido de Divulgación científica</li>
                  <li>Videojuegos</li>
                  <li>Anime y Manga</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
