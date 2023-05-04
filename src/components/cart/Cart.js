import { Modal } from "antd";
import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import { CartItem } from "./CartItem";
export const Cart = ({ isCartVisible, setIsCartVisible }) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHanlder = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul style={{ listStyle: "none" }}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHanlder.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <div>
      <Modal
        visible={isCartVisible}
        onCancel={() => setIsCartVisible(false)}
        footer={[
          <button
            className="closebutton"
            key="cancel"
            onClick={() => setIsCartVisible(false)}
          >
            Close
          </button>,
          <button className="orderbutton" key="order">
            Order
          </button>,
        ]}
      >
        <div className="wholecart">
          {cartItems}
          <div>
            <span className="amount">Total Amount</span>
            <span className="totalprice">{totalAmount}</span>
          </div>
        </div>
      </Modal>
    </div>
  );
};
