import { SET_USER_INFO,SetAge } from "../action";

export default (state, action) => {
  switch (action.type) {
    case SET_USER_INFO :
      console.log(555)
      return {
        userInfo: {
          name: action.userInfo
        }
      };
     case SetAge:     
      return {        
        conut: action.Age
      };
    default:
      return state;
  }
};
// const initState = {};
//  dispatch({ type: "QUERY",{ name: "张三" }});
// const home = (state = initState, { type, payload }) => {
//   switch (type) {
//     case QUERY:
//       return { ...state, loading: false, ...payload };
//     case SUBMIT:
//       return { ...state, loading: false, ...payload };
//     default:
//       return { ...state, loading: true };
//   }
// };
// export default home;
