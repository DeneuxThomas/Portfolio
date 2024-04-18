//import
import "./scss/NavBar.scss";

function NavBar() {
  //state état donné(name, setname, useSate)

  //comportements

  //render
  return (
    <div className="container-navbar">
      <nav className="navbar show-navbar">
        <ul className="navbar-links">
          <li className="navbar-link-li">
            <a href="#" className="navbar-link">
              A PROPOS DE MOI
            </a>
          </li>
          <li className="navbar-link-li">
            <a href="#" className="navbar-link">
              MES COMPÉTENCES
            </a>
          </li>
          <li className="navbar-link-li">
            <a href="#" className="navbar-link">
              MES PROJETS
            </a>
          </li>
          <li className="navbar-link-li">
            <a href="#" className="navbar-link">
              MON PARCOURS
            </a>
          </li>
          <li className="navbar-link-li">
            <a href="#" className="navbar-link">
              CONTACT
            </a>
          </li>
          <li className="navbar-link-li">
            <a href="#" className="navbar-link">
              CV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
