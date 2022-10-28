import { NavLink } from "react-router-dom";
import "../index.css";
function Navigation() {
  const navBar = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  return (
    <div class="topnav" id="myTopnav">
      <NavLink to="/" className="logo">
        AltSchool
      </NavLink>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/user" className="nav-link">
        Users
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
      <NavLink className="icon" onClick={navBar}>
        <i class="fa fa-bars"></i>
      </NavLink>
    </div>
  );
}
export default Navigation;
