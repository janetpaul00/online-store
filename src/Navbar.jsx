import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <navbar className="navbar">
      <ul>
        <li>
          <Link to="/discover">Discover</Link>
        </li>
        <li>
          <Link to="/connect">Connect</Link>{" "}
        </li>
      </ul>
    </navbar>
  );
}
