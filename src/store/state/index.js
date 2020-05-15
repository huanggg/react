import { createStore } from "redux";
import reducer from "../reducer/index.js";

const initValue = {
  userInfo: {
    name: "张三"
  },
  conut:1
};
export default createStore(reducer, initValue);
