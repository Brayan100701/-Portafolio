import NavBar from "./NavBar";
import AcercaDe from "./AcercaDe";
import Formacion from "./Formacion";
import Skills from "./Skills";
import MasDe from "./MasDe";

function Welcome() {
  return (
    <>
      <NavBar />
      <AcercaDe />
      <Formacion />
      {/* <Proyectos /> */}
      <Skills />
      <MasDe />
    </>
  );
}

export default Welcome;
