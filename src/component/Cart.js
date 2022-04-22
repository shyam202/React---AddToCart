import React, { createContext, useEffect, useReducer } from "react";
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

  // CLEAR THE CART
  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };

  // INCREMENT QUANTITY
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // DECREMENT QUANTITY
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  useEffect(() => {
    dispatch({
      type: "GET_TOTAL",
    });
  }, [state.item]);

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, increment, decrement }}
    >
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
