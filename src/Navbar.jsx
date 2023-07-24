import { NavLink } from "react-router-dom";

export default function Navbar() {
  function getClassName({ isActive }) {
    return isActive ? "navbar-active" : "";
  }

  function getCartClassName({ isActive }) {
    return isActive ? "navbar-active cart-button" : "";
  }

  return (
    <nav className="navbar">
      <div className="rept">
        <NavLink to="/">
          <h1>Rpt Kllxn</h1>
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink className={getCartClassName} to="/cart">
            Cart [0]
          </NavLink>
        </li>
        <li>
          <NavLink className={getClassName} to="/catalog">
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink className={getClassName} to="/connect">
            Connect
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
