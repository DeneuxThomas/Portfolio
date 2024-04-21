import "./scss/App.scss";
import NavBar from "./NavBar.jsx";
import APropos from "./APropos.jsx";
import Competences from "./Competences.jsx";

function App() {
  //state état donné(name, setname, useSate)

  //comportements

  //render
  return (
    <div className="container-app">
      <NavBar />
      <div className="container-content">
        <section id="apropos" className="section">
          <APropos />
        </section>
        <section id="competences" className="section">
          <Competences />
        </section>
        <section id="projets" className="section"></section>
        <section id="parcours" className="section"></section>
        <section id="contacts" className="section"></section>
        <section id="cv" className="section"></section>
      </div>
    </div>
  );
}

export default App;
