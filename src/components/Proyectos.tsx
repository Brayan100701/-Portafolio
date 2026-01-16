export default function Proyectos() {
  return (
    <>
      <section id="proyectos" className="container p-3 mb-2 text-light">
        <h2>Proyectos destacados</h2>
        <div className="container">
          <div className="card text-center">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="true"
                    href="#proyectos"
                  >
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="false"
                    href="#proyectos"
                  >
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="false"
                    href="#proyectos"
                  >
                    Active
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
