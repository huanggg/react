import { createStore } from "redux";
// import reducer from "../reducer";

const initValue = {
  userInfo: {
    name: "张三"
  }
};
const ADD_TO_CART = "ADD_TO_CART";
const reducer = function(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      state.userInfo = action.userInfo;
      return state;
    default:
      return state;
  }
};

export default createStore(reducer, initValue);
