//import
import "./scss/NavBar.scss";

function NavBar() {
  //state état donné(name, setname, useSate)

  //comportements

  //render
  return (
    <div className="container-navbar">
      <nav className="navbar show-navbar">
        <div className="navbar-logo">Thomas DENEUX</div>
        <ul className="navbar-links">
          <li className="navbar-link-li">
            <a href="#apropos" className="navbar-link">
              A Propos
            </a>
          </li>
          <li className="navbar-link-li">
            <a href="#competences" className="navbar-link">
              Compétences
            </a>
          </li>
          <li className="navbar-link-li">
            <a href="#projets" className="navbar-link">
              Projets
            </a>
          </li>
          <li className="navbar-link-li">
            <a href="#contacts" className="navbar-link">
              Contact
            </a>
          </li>
          <li className="navbar-link-li">
            <a href="#contacts" className="navbar-link">
              CV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
