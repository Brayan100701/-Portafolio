import imgList from "./ImgList";
import ProyeCard from "./ProyeCard";
import ProyectResources from "./ProyectResources";

export default function Proyectos() {
  return (
    <>
      <section id="proyectos" className="container p-3 mb-2 text-light">
        <br />
        <br />
        <h2>Proyectos destacados</h2>
        <br />
        <ProyeCard
          imList={imgList.pokedexTec}
          proyectResources={ProyectResources.pokeApi}
        />
      </section>
    </>
  );
}
