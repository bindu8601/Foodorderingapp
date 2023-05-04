import React from "react";
import mealsimage from "../../assets/Screenshot (18).png";
import "./header.css";
import { CartButton } from "./CartButton";
const Header = (props) => {
  return (
    <div className="main">
      <header className="header">
        <h1>Happy Tummy</h1>

        <CartButton onClick={props.onShowCart} />
      </header>

      <div className="mealsimage">
        <img src={mealsimage} height={430} width={100} alt="food" />
      </div>
    </div>
  );
};
export default Header;
