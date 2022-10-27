import { NavLink } from "react-router-dom";
import "../index.css";
function Navigation() {
  return (
    <div className="navbar-container">
      <nav>
        <ul className="nav-list">
          <NavLink to="/" className="logo">AltSchool</NavLink>
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/user" className="nav-link">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
