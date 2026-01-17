import imgList from "./ImgList";
import TecCard from "./TecCard";

interface Props {
  colorScheme: {
    cardColor: string;
  };
}

export default function Skills({ colorScheme }: Props) {
  return (
    <>
      <section id="skills" className="container p-3 mb-2 text-light">
        <br />
        <br />
        <h2>Tecnologías</h2>
        <br />
        <div className="row">
          <div className="col-sm-3 mb-3 mb-sm-0">
            <TecCard
              imList={imgList.herramientas}
              titulo="Herramientas"
              colorScheme={colorScheme}
            />
          </div>
          <div className="col-sm-9">
            <div className="row">
              <div className="col">
                <TecCard
                  imList={imgList.backend}
                  titulo="Backend"
                  colorScheme={colorScheme}
                />
              </div>
              <div className="col">
                <TecCard
                  imList={imgList.frontend}
                  titulo="FrontEnd"
                  colorScheme={colorScheme}
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <TecCard
                  imList={imgList.aprendiendo}
                  titulo="Aprendiendo"
                  colorScheme={colorScheme}
                />
              </div>
              <div className="col">
                <TecCard
                  imList={imgList.otras}
                  titulo="Otras"
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
