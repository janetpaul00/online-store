// import "./catalog.css";
import Card from "./Card";
import items from "./items";

export default function Catalog() {
  console.log(items);
  return (
    <>
      <div className="catalog">
        <h2>Catalog</h2>
        <div className="cards">
          {items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
