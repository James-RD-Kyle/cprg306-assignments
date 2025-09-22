
export default function Item({ name, quantity, category }) { 
  return (
    <div className="border-2 border-white rounded-lg p-4 m-2 w-full max-w-2xl text-center">
      <h2>{name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </div>
  );
}
