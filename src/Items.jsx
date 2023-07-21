import Card from "./Card";

export default function Items() {
  let items = [
    {
      name: "Autumnesque",
      item: "Waist bag",
      price: 900,
    },
    {
      name: "Boxy Blaise",
      item: "Outerwear/Jacket",
      price: "1040",
    },
    {
      name: "All seeing eye",
      item: "Pink Bucket hat",
      price: "400",
    },
    {
      name: "Bloughmi",
      item: "White linen blend top",
      price: "550",
    },
    {
      name: "Galaxy",
      item: "Thick rimmed aviator sunglasses",
      price: "1500",
    },
  ];

  return (
    <div className="cards">
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}
