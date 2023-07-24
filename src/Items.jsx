//import Card from "./Card";
import { faker } from "@faker-js/faker";

let count = 1;
let items = new Array(12).fill(0).map(() => ({
  id: count++,
  name: faker.commerce.productName(),
  item: `${faker.color.human()} ${faker.commerce.productMaterial()} ${faker.commerce.product()}`,
  price: faker.number.int({ min: 500, max: 2000 }),
}));

export default items;
