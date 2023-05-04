import React, { useState } from "react";
import Header from "./components/layout/Header";
import { Meals } from "./components/meals/Meals";
import "./App.css";
import { Cart } from "./components/cart/Cart";
import { CartProvider } from "./store/CartProvider";
function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const showCartHandler = () => {
    setIsCartVisible(true);
  };

  return (
    <div>
      <CartProvider>
        {isCartVisible && (
          <Cart
            isCartVisible={isCartVisible}
            setIsCartVisible={setIsCartVisible}
          />
        )}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
