const initialState = 4;


const changeMyNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return "Hello";
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};


export default changeMyNumber;