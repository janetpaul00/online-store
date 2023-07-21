import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="rept">
        <Link to="/">
          <h1>Rpt Kllxn</h1>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
      </ul>
    </nav>
  );
}
