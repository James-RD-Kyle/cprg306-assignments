

export default function Item({name, quantity, category, onSelect}) { 
  return (
        <li className="border-2 border-white rounded-lg p-4 m-2" onClick={onSelect}>
          <p>{name}</p>
          <p>Quantity: {quantity}</p>
          <p>Category: {category}</p>
        </li>
  );
}