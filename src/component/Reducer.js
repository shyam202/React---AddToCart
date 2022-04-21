export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((currElem) => {
        return currElem.id !== action.payload;
      }),
    };
  }
  return state;
};
