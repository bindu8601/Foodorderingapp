import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./cartbutton.css";
import { CartContext } from "../../store/cart-context";
export const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberofcartitems = cartCtx.items.reduce((curnumber, item) => {
    return curnumber + item.amount;
  }, 0);
  const { items } = cartCtx;
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const btnclasses = `${btnIsHighlighted ? "bump" : ""}`;
  return (
    <div className="button">
      <button
        className={btnclasses}
        style={{
          borderRadius: "1rem",
          backgroundColor: "rgb(91, 26, 26)",
          color: "white",
          fontWeight: "bold",
          width: "150px",
          height: "40px",
          cursor: "pointer",
        }}
        onClick={props.onClick}
      >
        <span className="icon">
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>
        <span>Your Cart</span>
        <span className="count">{numberofcartitems}</span>
      </button>
    </div>
  );
};
