import imgList from "./ImgList";
import TecCard from "./TecCard";

export default function Skills() {
  return (
    <>
      <section id="skills" className="container p-3 mb-2 text-light">
        <h2>Tecnologías</h2>
        <div className="row">
          <div className="col-sm-3 mb-3 mb-sm-0">
            <TecCard imList={imgList.herramientas} titulo="Herramientas" />
          </div>
          <div className="col-sm-9">
            <div className="row">
              <div className="col">
                <TecCard imList={imgList.backend} titulo="Backend" />
              </div>
              <div className="col">
                <TecCard imList={imgList.frontend} titulo="FrontEnd" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <TecCard imList={imgList.aprendiendo} titulo="Aprendiendo" />
              </div>
              <div className="col">
                <TecCard imList={imgList.otras} titulo="Otras" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
