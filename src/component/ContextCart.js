import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { CartContext } from "./Cart";
import Items from "./Items";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img src="./Images/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>continue shopping</h3>
          </div>
          <div className="cart-icon">
            <img src="./Images/cart.png" alt="cart" className="cart-icon" />
            <p>{totalItem}</p>
          </div>
        </header>
        <section className="main-cart-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            You have <span className="total-items-count">{totalItem}</span>
            items in your cart
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
              Cart Total : <span>{totalAmount}</span>
            </h3>
            <button>Checkout</button>
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./Images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./Images/cart.png" alt="cart" className="cart-icon" />
          <p>{totalItem}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">{totalItem}</span> items
          in your cart
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
            Cart Total : <span>{totalAmount}</span>
          </h3>
          <button>Checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
