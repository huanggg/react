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
