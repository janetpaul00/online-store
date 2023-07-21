export default function Card({ item }) {
  return (
    <div className="card">
      <img
        src={`https://source.unsplash.com/collection/3356576/480x720?${Math.random()}`}
        // src={item.image}
        alt={item.item}
      />
      <h3 className="product-name">{item.name}</h3>
      <div className="product-info">
        <p className="product-description">{item.item}</p>
        <p className="product-price">AED {item.price}</p>
      </div>
    </div>
  );
}
