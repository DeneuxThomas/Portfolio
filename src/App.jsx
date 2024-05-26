import "./scss/App.scss";
import NavBar from "./NavBar.jsx";
import APropos from "./APropos.jsx";
import Competences from "./Competences.jsx";
import Qualites from "./Qualites.jsx";
import Projets from "./Projets.jsx";
import Contact from "./Contact.jsx";

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
        <section id="qualites" className="section">
          <Qualites />
        </section>
        <section id="projets" className="section">
          <Projets />
        </section>
        <section id="parcours" className="section"></section>
        <section id="contacts" className="section">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
