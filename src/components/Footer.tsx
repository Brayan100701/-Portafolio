export default function Footer() {
  return (
    <>
      <br />
      <br />
      <br />
      <section id="footer" className="bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-3">
              <p>Atribucion de los iconos utilizados a </p>
            </div>
            <div className="col-3">
              <a href="https://www.flaticon.es/" target="blank">
                <img src="/flatIcon.png" />
              </a>
              <a href="https://fontawesome.com/" target="blank">
                <img src="/fontAwesome.svg" />
              </a>
              <a href="https://icons8.com/icons" target="blank">
                <img src="/icons8.svg" />
              </a>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-3">
              <p>Tecnologías usadas para este portafolio</p>
            </div>
            <div className="col-4">
              <img src="/tecnologias/react.png" />
              <img src="/tecnologias/typeScript.svg" />
              <img src="/tecnologias/html144.png" />
              <img src="/tecnologias/css144.png" />
              <img src="/tecnologias/bootstrap144.png" />
            </div>
          </div>
          <div className="row"></div>
        </div>
      </section>
    </>
  );
}
