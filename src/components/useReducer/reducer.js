const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      let num = 0;
      state >= 1 ? (num = state - 1) : (num = 0);
      return num;
    default:
      return state;
  }
};

export default reducer