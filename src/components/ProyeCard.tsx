type Props = {
  imList: string[];
  proyectResources: {
    title: string;
    github: string;
    acceso: string;
    preview: string;
    descripcion: { spanish: string; english: string };
  };
  language: {
    tech: string;
    github: string;
    visit: string;
  };
  currentLang: boolean;
};

export default function ProyeCard({
  imList,
  proyectResources,
  language,
  currentLang,
}: Props) {
  return (
    <>
      <div className="card bg-dark bg-gradient text-center text-light proye-card">
        <div className="card-header">
          <h2>{proyectResources.title}</h2>
        </div>
        <div className="card-body">
          <br />
          <div className="row">
            <div className="col-sm-4">
              <div className="row">
                <h5>{language.tech}</h5>
                <div className="row rowProyec">
                  {imList.map((e, index) => (
                    <ImTec key={index} source={e} />
                  ))}
                </div>
              </div>
              <br />
              <div className="descripcion-proyecto">
                {!currentLang
                  ? proyectResources.descripcion.spanish
                  : proyectResources.descripcion.english}
              </div>
            </div>
            <div className="col-8 proyect-preview">
              <img src={proyectResources.preview} className="img-fluid"></img>
            </div>
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          <a href={proyectResources.github} target="blank">
            <button type="button" className="btn btn-dark fw-bold">
              {language.github}
              <img
                src="/tecnologias/github250.png"
                className="iconos-foot-proyecto"
              ></img>
            </button>
          </a>
          {proyectResources.acceso ? (
            <a href={proyectResources.acceso} target="blank">
              <button type="button" className="btn btn-dark fw-bold">
                {language.visit}
                <img src="/internet.png" className="iconos-foot-proyecto"></img>
              </button>
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

interface ImProps {
  source: string;
}

function ImTec({ source }: ImProps) {
  return (
    <>
      <img src={source} className=""></img>
    </>
  );
}
