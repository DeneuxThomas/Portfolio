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
              onglet1
            </a>
          </li>
          <li className="navbar-link-li">
            <a href="#" className="navbar-link">
              onglet2
            </a>
          </li>
          <li className="navbar-link-li">
            <a href="#" className="navbar-link">
              onglet3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
