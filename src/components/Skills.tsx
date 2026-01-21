import imgList from "./ImgList";
import TecCard from "./TecCard";

interface Props {
  colorScheme: {
    cardColor: string;
  };
  language: {
    title: string;
    tools: string;
    back: string;
    learning: string;
    frontend: string;
    others: string;
  };
}

export default function Skills({ colorScheme, language }: Props) {
  return (
    <>
      <section id="skills" className="container p-3 mb-2 text-light">
        <br />
        <br />
        <h2>{language.title}</h2>
        <br />
        <div className="row">
          <div className="col-sm-3 mb-3 mb-sm-0">
            <TecCard
              imList={imgList.herramientas}
              titulo={language.tools}
              colorScheme={colorScheme}
            />
          </div>
          <div className="col-sm-9">
            <div className="row">
              <div className="col">
                <TecCard
                  imList={imgList.backend}
                  titulo={language.back}
                  colorScheme={colorScheme}
                />
              </div>
              <div className="col">
                <TecCard
                  imList={imgList.frontend}
                  titulo={language.frontend}
                  colorScheme={colorScheme}
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <TecCard
                  imList={imgList.aprendiendo}
                  titulo={language.learning}
                  colorScheme={colorScheme}
                />
              </div>
              <div className="col">
                <TecCard
                  imList={imgList.otras}
                  titulo={language.others}
                  colorScheme={colorScheme}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
