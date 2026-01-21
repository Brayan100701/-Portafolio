import imgList from "./ImgList";
import ProyeCard from "./ProyeCard";
import ProyectResources from "./ProyectResources";

interface Props {
  language: {
    title: string;
    tech: string;
    github: string;
    visit: string;
  };
  currentLang: boolean;
}

export default function Proyectos({ language, currentLang }: Props) {
  return (
    <>
      <section id="proyectos" className="container p-3 mb-2 text-light">
        <br />
        <br />
        <h2>{language.title}</h2>
        <br />
        <ProyeCard
          imList={imgList.pokedexTec}
          proyectResources={ProyectResources.pokeApi}
          language={language}
          currentLang={currentLang}
        />
      </section>
    </>
  );
}
