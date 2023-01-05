import * as actionTypes from "../constants/usersOrderContent";


const initialState = {
  userOrders: [],
  active_Users_orders:false,
  notactive_users_orders_array:[],
  user_order_info:[],
  user_order_ifo_page:[]

};

const reducer = (state = initialState, action) => {
  switch (action.type) {




    case actionTypes.SET_USER_ORDERS:
      const SetProductsSource = {
        ...state,
      };
      SetProductsSource.userOrders = action.data
      return SetProductsSource;



      case actionTypes.SET_USER_ORDER_INFO_PAGE:
      const setOrderInfo = {
        ...state,
      };
      setOrderInfo.user_order_ifo_page = action.data
      return setOrderInfo;

      case actionTypes.CLEARUSERORDERINFO:
        const fagaga = {
          ...state,
        };
        fagaga.user_order_info =[]
        fagaga.user_order_ifo_page=[]
        return fagaga;




      case actionTypes.SET_USER_NOT_ACTIVE_ORDERS:
        const notActive = {
          ...state,
        };
        if(action.data.length > 0){
          notActive.notactive_users_orders_array = action.data
          notActive.active_Users_orders = true

        }else{
          notActive.active_Users_orders = false

        }
        return notActive;

        
     
        case actionTypes.REMOVE_USERS_ORDER:
          const removeOrder = {
            ...state,
          };
         
          let arr = removeOrder.notactive_users_orders_array.filter((ele) => {
             return ele.id != action.data;
           });
           removeOrder.notactive_users_orders_array = arr
          return removeOrder;
        

    default:
      break;
  }
  return state;
};

export default reducer;