import * as actionTypes from "../constants/errConstant";

const initialState = {
  msg: "",
  active_message: false,
  type: '',
  popupTime:15000

};

const products = (state = initialState, action) => {
  switch (action.type) {


    case actionTypes.MSG:
      const msg = {
        ...state,
      };
     if(action.data){
      msg.msg = action.data.msg || "ישנה בעיה"
      msg.active_message = true
      msg.type = action.data.type
     }else{
      msg.msg = ''
      msg.active_message = false
      msg.type = ''
     }

      return msg;

    case actionTypes.ERROR:
      const err = {
        ...state,
      };
      console.log(action.data)

      err.msg = action.data
      err.active_message = true
      err.type = 'bad'

      return err;


    case actionTypes.GOOD_MESSAGE:
      const good = {
        ...state,
      };
      console.log(action.data)
      good.err = action.data
      good.active_message = true;
      good.type = 'good'

      return good;

      case actionTypes.CHANGE_POP_UP_TIME:
        const popUpSate = {
          ...state,
        };
        popUpSate.popupTime = 30000
  
        return popUpSate;


    case actionTypes.CLEAR:
      const clear = {
        ...state,
      };
    
        clear.msg = ""
        clear.active_message = false;
        clear.type = ''
    

      return clear;








    default:
      return state

  }
}

export default products