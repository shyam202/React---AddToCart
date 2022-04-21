export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((currElem) => {
        return currElem.id !== action.payload;
      }),
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      item: [],
    };
  }

  if (action.type === "INCREMENT") {
    let updatedCart = state.item.map((currItem) => {
      if (currItem.id === action.payload) {
        return { ...currItem, quantity: currItem.quantity + 1 };
      }
      return currItem;
    });
    return { ...state, item: updatedCart };
  }

  return state;
};
