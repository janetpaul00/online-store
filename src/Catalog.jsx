// import "./catalog.css";
import Items from "./Items";

export default function Catalog() {
  return (
    <div className="catalog">
      <style>{`#container {
        background: white}`}</style>
      <h2>Catalog</h2>
      <Items />
    </div>
  );
}
