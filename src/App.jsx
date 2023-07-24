import "./App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Catalog from "./Catalog.jsx";
import { Route, Routes, Link } from "react-router-dom";
import Item from "./Item";
import Connect from "./Connect";
import Cart from "./cart";

function App() {
  return (
    <div id="container">
      <Navbar>Navbar</Navbar>
      <main>
        <div className="content">
          <Routes>
            <Route path="*" element={<Hero />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/item/:id" element={<Item />}></Route>
            <Route path="/connect" element={<Connect />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
      </main>
      <footer>All rights reserved</footer>
    </div>
  );
}

export default App;
