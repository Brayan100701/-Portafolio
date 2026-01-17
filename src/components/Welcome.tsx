import NavBar from "./NavBar";
import AcercaDe from "./AcercaDe";
import Formacion from "./Formacion";
import Proyectos from "./Proyectos";
import Skills from "./Skills";
import MasDe from "./MasDe";
import Footer from "./Footer";

function Welcome() {
  const colorScheme = {
    cardColor: " bg-dark text-light",
  };
  return (
    <>
      <NavBar />
      <AcercaDe />
      <Proyectos />
      <Skills colorScheme={colorScheme} />
      <Formacion colorScheme={colorScheme} />
      <MasDe colorScheme={colorScheme} />
      <Footer colorScheme={colorScheme} />
    </>
  );
}

export default Welcome;
