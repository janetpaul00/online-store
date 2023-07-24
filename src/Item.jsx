import { faker } from "@faker-js/faker";
import { useParams } from "react-router-dom";
import items from "./items";

export default function Item() {
  const params = useParams();
  // console.log("we're at items");

  let selectedItem = items.find((item) => params.id == item.id);
  console.log(selectedItem);

  // console.log(params);

  return (
    <>
      <div className="item-showcase">
        <img
          className="item-big-image"
          height={900}
          width={600}
          src={`https://source.unsplash.com/collection/3356576/600x900?${Math.random()}`}
          alt={selectedItem.name}
        />
        <div className="item-text">
          <h3 className="product-name">{selectedItem.name}</h3>
          <p className="product-price">Price: AED {selectedItem.price}</p>
          <p>Description: {faker.commerce.productDescription()}</p>
          <p>Material: {faker.commerce.productMaterial()}</p>
        </div>
      </div>
    </>
  );
}
