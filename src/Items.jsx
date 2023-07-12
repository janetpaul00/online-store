import bag from "./src/assets/bag.jpg";
import blazer from "./src/assets/blazer.jpg";
import sunglasses from "./src/assets/sunglasses.jpg";
import top from "./src/assets/top.jpg";
import hat from "./src/assets/hat.jpg";

export default function Items() {
  let items = [
    {
      name: "Autumnesque",
      item: "Waist bag",
      price: "900",
      image: bag,
    },
    {
      name: "Boxy Blazer",
      item: "Outerwear/Jacket",
      price: "1040",
      image: blazer,
    },
    {
      name: "See you Blue",
      item: "Bucket hat",
      price: "400",
      image: hat,
    },
    {
      name: "Blomie",
      item: "Linen blend top",
      price: "550",
      image: top,
    },
    {
      name: "Galaxy",
      item: "Sunglasses",
      price: "1500",
      image: sunglasses,
    },
  ];
  return items;
}
