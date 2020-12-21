import { createStore } from "redux";
import reducer from "../reducer/index.js";

const state = {
  userInfo: {
    name: "张三"
  },
  conut:1
};

// function reducer (state, action) => {
//   switch (action.type) {
//     case SET_USER_INFO :
//       return {
//         userInfo: {
//           name: action.userInfo
//         }
//       };
//      case SetAge:     
//       return {        
//         conut: action.Age
//       };
//     default:
//       return state;
//   }
// };
// reducer，reducer行为函数
// preloadedState，初始化state数据
// const store = createStore(reducer, [preloadedState], enhancer);
export default createStore(reducer, state);
