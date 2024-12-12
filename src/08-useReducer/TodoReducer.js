export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "Add todo":
      return [...initialState, action.payload];

    case "Delete todo item":
      return initialState.filter((item) => item.id !== action.payload);

    case "Toogle":
      return initialState.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      });

    default:
      return initialState;
  }
};
