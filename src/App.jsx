import "./App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Catalog from "./Catalog.jsx";
import { Route, Routes, Link } from "react-router-dom";
import Discover, { Connect } from "./Discover";

function App() {
  return (
    <div id="container">
      <Navbar>Navbar</Navbar>
      <main>
        <div className="content">
          <Routes>
            <Route path="*" element={<Hero />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/discover" element={<Discover />}></Route>
            <Route path="/connect" element={<Connect />}></Route>
          </Routes>
        </div>
      </main>
      <footer>All rights reserved</footer>
    </div>
  );
}

export default App;
