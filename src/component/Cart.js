import React, { createContext, useReducer } from "react";
import "./cart.css";
import { reducer } from "./Reducer";
import { products } from "./product";
import ContextCart from "./ContextCart";

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // TO DELETE THE INDIVIDUAl ELEM. FROM CART
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  return (
    <CartContext.Provider value={{ ...state, removeItem }}>
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
