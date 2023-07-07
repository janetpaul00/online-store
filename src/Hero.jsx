import Button from "./Button";
import Navbar from "./Navbar";
import Catalog from "./Catalog.jsx";
import { Route, Routes, Link } from "react-router-dom";

export default function Hero() {
  return (
    <div id="hero">
      <Navbar>Navbar</Navbar>

      <div className="content">
        <h1>Rpt Kllxn</h1>
        <Button>Button test</Button>
        <Link to="/catalog">Explore</Link>
        <Catalog />
      </div>

      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
      </Routes>
    </div>
  );
}
