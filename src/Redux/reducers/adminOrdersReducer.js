import * as actionTypes from "../constants/adminOrderAction";

const initialState = {
  orders: [],
  active_orders:false,
  activeorders:[],
  orderinfo:[]

};

const reducer = (state = initialState, action) => {
  switch (action.type) {




    case actionTypes.SET_ORDER_PLACE:
      const SetProductsSource = {
        ...state,
      };
      SetProductsSource.orders = action.data
      return SetProductsSource;



      case actionTypes.ACTIVE_ORDERS:
        const setActiveOrders = {
          ...state,
        };
        setActiveOrders.active_orders = true;
        setActiveOrders.activeorders = action.data

        return setActiveOrders;

        case actionTypes.SET_ORDERS_INFO:
          const setAc = {
            ...state,
          };
          setAc.active_orders = false;
          setAc.orderinfo = action.data    
  
          return setAc;


        case actionTypes.SET_NON_ACTIVE_ORDER_PLACE:
          const noneActive = {
            ...state,
          };
         
       if(action.data.length> 0){
        noneActive.activeorders = action.data
        noneActive.active_orders = true
       }
  
          return noneActive;

          

             
        case actionTypes.ACCETP_ORDER:
          const acceptorder = {
            ...state,
          };
         
          let arrAccept = acceptorder.activeorders.filter((ele) => {
          //  if(ele.adminorderid = action.data){
          //   ele.activeorder = 1
          //  }
             return ele.adminorderid != action.data;
           });
           acceptorder.activeorders = arrAccept

  
          return acceptorder;
          
        case actionTypes.REMOVE_ORDER_NOW:
          const removeOrder = {
            ...state,
          };
         
          let arr = removeOrder.activeorders.filter((ele) => {
           
             return ele.adminorderid != action.data;
           });
           removeOrder.activeorders = arr

  
          return removeOrder;
          
          case actionTypes.CLOSE_POP_UP:
            const clear = {
              ...state,
            };
          
              
              clear.active_orders = false;
             
          
      
            return clear;


    default:
      break;
  }
  return state;
};

export default reducer;