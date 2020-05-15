import { SetUserInfo } from "../action";

export default (state, action) => {
  switch (action.type) {
    case SetUserInfo:
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
