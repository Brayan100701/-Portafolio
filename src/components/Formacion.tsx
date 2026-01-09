export default function Formacion() {
  return (
    <>
      <section id="formacion" className="container p-3 mb-2 text-light">
        <h2>Formación</h2>
        <div className="row">
          <div className="col-sm-5 mb-3 mb-sm-0">
            <div className="card bg-secondary text-light">
              <div className="card-body">
                <h5 className="card-title">Académica</h5>
                <p className="card-text">
                  Concluí la carrera de Ingeniería en Computación en la ESIME
                  Culhuacan y actualmente me encuentro en las últimas etapas
                  para el trámite de título y Cédula profesionales
                </p>
                <img className="img-thumbnail" src="/esime.jpg" />
              </div>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="card bg-secondary text-light">
              <div className="card-body">
                <h5 className="card-title">Autodidacta</h5>
                <p className="card-text">
                  Me defino por mi autonomía e iniciativa. Mi proceso se nutre
                  de documentación, Reddit, YouTube, foros y cursos,
                  permitiéndome integrar conocimientos nuevos con agilidad.
                  Transformo esta información en soluciones prácticas y
                  resultados tangibles, demostrando una mentalidad resolutiva y
                  una evolución constante impulsada por la curiosidad genuina y
                  la capacidad de investigar soluciones eficaces por cuenta
                  propia.
                </p>
                <div
                  id="carouselExampleAutoplaying"
                  className="carousel carousel-dark slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="cSharp.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="cSharpBack.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img src="/git.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="/uml.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/js19.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/python39.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/fullStack.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
