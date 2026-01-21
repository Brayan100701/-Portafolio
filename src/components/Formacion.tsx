import Carr_img from "./Carr_img";
import imgList from "./ImgList";

interface Props {
  colorScheme: {
    cardColor: string;
  };
  language: {
    formation: string;
    academic: string;
    academicDescription: string;
    selfTaught: string;
    selfTaughtDescription: string;
    certificateLink: string;
  };
}

export default function Formacion({ colorScheme, language }: Props) {
  return (
    <Elements
      carouselIm={imgList.autodidacta}
      colorScheme={colorScheme}
      language={language}
    />
  );
}

interface PropsIn {
  carouselIm: { image: string; certificate: string }[];
  colorScheme: {
    cardColor: string;
  };
  language: {
    formation: string;
    academic: string;
    academicDescription: string;
    selfTaught: string;
    selfTaughtDescription: string;
    certificateLink: string;
  };
}

function Elements({ carouselIm, colorScheme, language }: PropsIn) {
  return (
    <>
      <section id="formacion" className="container p-3 mb-2 text-light">
        <br />
        <br />
        <h2>{language.formation}</h2>
        <div className="row">
          <div className="col-sm-5 mb-3 mb-sm-0">
            <div className={"card " + colorScheme.cardColor}>
              <div className="card-body">
                <h5 className="card-title">{language.academic}</h5>
                <p className="card-text">{language.academicDescription}</p>
                <img className="img-thumbnail" src="/esime.jpg" />
              </div>
            </div>
          </div>
          <div className="col-sm-7">
            <div className={"card " + colorScheme.cardColor}>
              <div className="card-body">
                <h5 className="card-title">{language.selfTaught}</h5>
                <p className="card-text">{language.selfTaughtDescription}</p>
                <div
                  id="carouselExampleAutoplaying"
                  className="carousel carousel-dark slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {carouselIm.map((e, index) => (
                      <>
                        <Carr_img
                          key={index}
                          img={e.image}
                          index={index}
                          certificate={e.certificate}
                          certificateLink={language.certificateLink}
                        />
                      </>
                    ))}
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
