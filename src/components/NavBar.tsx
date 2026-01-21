interface Props {
  language: {
    project: string;
    tech: string;
    formation: string;
    more: string;
    changeL: string;
  };
  setLanguage: any;
  english: boolean;
}

export default function NavBar({ language, setLanguage, english }: Props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid inicio">
          <a className="navbar-brand" href="#acerca-de">
            Brayan Benjamin Sanchez Guillen
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#proyectos"
                >
                  {language.project}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#skills"
                >
                  {language.tech}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#formacion"
                >
                  {language.formation}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#mas-de"
                >
                  {language.more}
                </a>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => setLanguage(!english)}
                >
                  {language.changeL}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
