//import Button from "./Button";
import Navbar from "./Navbar";
import Catalog from "./Catalog.jsx";
import { Route, Routes, Link } from "react-router-dom";
import Discover, { Connect } from "./Discover";

export default function Hero() {
  return (
    <div id="hero">
      <Navbar>Navbar</Navbar>

      <div className="content">
        <Link to="/">
          <h1>Rpt Kllxn</h1>
        </Link>

        <Link to="/catalog">
          <p className="catalog">Go to Catalog</p>
        </Link>
      </div>

      <Routes>
        {/* <Route path="*" element={<Hero />}></Route> */}
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/discover" element={<Discover />}></Route>
        <Route path="/connect" element={<Connect />}></Route>
      </Routes>
    </div>
  );
}
