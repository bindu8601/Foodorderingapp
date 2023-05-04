import { useContext } from "react";
import "../meals.css";
import { Mealitemform } from "./Mealitemform";
import { CartContext } from "../../../store/cart-context";

export const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="li">
      <div className="meal-item-content">
        <div>{props.name}</div>
        <div className="des">{props.description}</div>
        <img src={props.image} width={200} height={200} alt="food" />
        <div className="price">{price}</div>
      </div>
      <div className="meal-item-form">
        <Mealitemform onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
