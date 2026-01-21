import Languages from "./Languages";
import NavBar from "./NavBar";
import AcercaDe from "./AcercaDe";
import Formacion from "./Formacion";
import Proyectos from "./Proyectos";
import Skills from "./Skills";
import MasDe from "./MasDe";
import Footer from "./Footer";
import { useState } from "react";

function Welcome() {
  const [language, setLanguage] = useState(false);

  const colorScheme = {
    cardColor: " bg-dark text-light",
  };

  return (
    <>
      <NavBar
        language={
          !language ? Languages.spanish.navBar : Languages.english.navBar
        }
        setLanguage={setLanguage}
        english={language}
      />
      <AcercaDe
        language={!language ? Languages.spanish.about : Languages.english.about}
      />
      <Proyectos
        language={
          !language ? Languages.spanish.proyects : Languages.english.proyects
        }
        currentLang={language}
      />
      <Skills
        colorScheme={colorScheme}
        language={
          !language
            ? Languages.spanish.technologies
            : Languages.english.technologies
        }
      />
      <Formacion
        colorScheme={colorScheme}
        language={
          !language ? Languages.spanish.formation : Languages.english.formation
        }
      />
      <MasDe
        colorScheme={colorScheme}
        aptitudesList={
          !language ? Languages.spanish.more : Languages.english.more
        }
      />
      <Footer
        footer={!language ? Languages.spanish.footer : Languages.english.footer}
      />
    </>
  );
}

export default Welcome;
