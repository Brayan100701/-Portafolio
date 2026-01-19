interface Props {
  colorScheme: {
    cardColor: string;
  };
}

export default function MasDe({ colorScheme }: Props) {
  return (
    <>
      <section id="mas-de" className="container p-3 mb-2 text-light">
        <br />
        <br />
        <h2>Más sobre mi</h2>
        <br />
        <div className="row">
          <div className="col-sm-7 mb-3 mb-sm-0">
            <div className={"card " + colorScheme.cardColor}>
              <div className="card-body mas-de">
                <h5>Aptitudes</h5>
                <ul className="list-group list-group-flush extra">
                  <li className="list-group-item bg-transparent">
                    Autodidacta
                  </li>
                  <li className="list-group-item bg-transparent">
                    Competencias digitales
                  </li>
                  <li className="list-group-item bg-transparent">
                    Orientación al resultado
                  </li>
                  <li className="list-group-item bg-transparent">
                    Resolución de problemas
                  </li>
                  <li className="list-group-item bg-transparent">
                    Capacidad de adaptación
                  </li>
                  <li className="list-group-item bg-transparent">
                    Proactividad
                  </li>
                  <li className="list-group-item bg-transparent">
                    Toma de decisiones
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className={"card " + colorScheme.cardColor}>
              <div className="card-body mas-de">
                <h5>Hobbies</h5>
                <ul className="list-group list-group-flush extra">
                  <li className="list-group-item bg-transparent">Libros</li>
                  <li className="list-group-item bg-transparent">
                    Entusiasta del Hardware y PC Gaming
                  </li>
                  <li className="list-group-item bg-transparent">
                    Noticias de seguridad y novedades en distintas tecnologías
                  </li>
                  <li className="list-group-item bg-transparent">
                    Contenido de Divulgación científica
                  </li>
                  <li className="list-group-item bg-transparent">
                    Videojuegos
                  </li>
                  <li className="list-group-item bg-transparent">
                    Anime y Manga
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
