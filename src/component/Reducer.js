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

  if (action.type === "DECREMENT") {
    let updatedCart = state.item
      .map((currItem) => {
        if (currItem.id === action.payload) {
          return { ...currItem, quantity: currItem.quantity - 1 };
        }
        return currItem;
      })
      .filter((currItem) => currItem.quantity !== 0);
    return { ...state, item: updatedCart };
  }

  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.item.reduce(
      (acc, currVal) => {
        let { quantity, price } = currVal;
        let updatedTotalAmount = price * quantity;
        acc.totalAmount += updatedTotalAmount;
        acc.totalItem += quantity;

        return acc;
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );

    return { ...state, totalItem, totalAmount };
  }

  return state;
};
