import * as actionTypes from "../constants/usersContent";

const initialState = {
  users: [],
usersInfo:{}


};

const reducer = (state = initialState, action) => {
  switch (action.type) {



    case actionTypes.SET_USERS:
      const user = {
        ...state,
      };

      if (action.data) {
        user.users = action.data
      }

      return user;


      case actionTypes.BAND_USER:
        const band_user = {
          ...state,
        };
        if (action.data) {

            band_user.users.map((ele) => {
             if(ele.id == action.data){
                 ele.band = 1;
             }
            });

           
    
          }
     
  
        return band_user;

        case actionTypes.UN_BAND_USER:
          const un_band_user = {
            ...state,
          };
          if (action.data) {
  
             un_band_user.users.map((ele) => {
               if(ele.id == action.data){
                   ele.band = 0;
               }
              });
  
             
      
            }
       
    
          return un_band_user;
        

    case actionTypes.REMOVE_USER:
      const remove_user = {
        ...state,
      };
      if (action.data) {

        let arr = remove_user.users.filter((ele) => {
          return ele.id != action.data.id;
        });
        remove_user.users = arr;

      }

      return remove_user;






    default:
      break;
  }
  return state;
};

export default reducer;