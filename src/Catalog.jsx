import Items from "./Items";

export default function Catalog() {
  return (
    <div className="catalog">
      <h2>This is the Catalog </h2>
      <div className="catalog-cards">
        <Items />
      </div>
    </div>
  );
}
