import React, { useState } from "react";
import "./cart.css";
import { Scrollbars } from "react-custom-scrollbars";
import Items from "./Items";
import { products } from "./product";

const Cart = () => {
  const [item, setItem] = useState(products);

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./Images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./Images/cart.png" alt="cart" className="cart-icon" />
          <p>7</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">7</span> items in your
          cart
        </p>
        <div className="cart-items-container">
          <Scrollbars>
            {item.map((curr) => {
              return <Items key={curr.id} {...curr} />;
            })}
          </Scrollbars>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span>1000$</span>
          </h3>
          <button>Checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
