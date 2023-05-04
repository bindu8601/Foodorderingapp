import "./cart.css";

export const CartItem = (props) => {
  const price = `$${props.price}`;

  return (
    <li className="cart-item">
      <div className="cart-item__content">
        <h3>{props.name}</h3>
        <div className="cart-item__price">
          <span>{price}</span>
          <span> X {props.amount}</span>
        </div>
      </div>
      <div className="cart-item__actions">
        <button className="btn" onClick={props.onRemove}>-</button>
        <button className="btn" onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};
