import * as actionTypes from "../constants/adminProductContent";

const initialState = {

  myproducts: [],
  singleProduct:{},
  myActiveProducts:[],
  prosudtGoingToFinish:[],
  is_product_close_toFinish:false
  


};

const reducer = (state = initialState, action) => {
  switch (action.type) {




    case actionTypes.SET_ADMIN_PRODUCTS:
      const set_products = {
        ...state,
      };
      set_products.myproducts = action.data;
      

      return set_products;
      

      
     

      
      case actionTypes.DE_ACTIVE_SINGLE_PRODUCT:
        const remove_active_Singleproducts = {
          ...state,
        };
          if(remove_active_Singleproducts.singleProduct.id == action.data.id){
            remove_active_Singleproducts.singleProduct.active = 0
          }
        return remove_active_Singleproducts;


        



      case actionTypes.ACTIVE_SINGLE_PRODUCT:
        const set_active_Singleproducts = {
          ...state,
        };
     
          if(set_active_Singleproducts.singleProduct.id == action.data.id){
          set_active_Singleproducts.singleProduct.active = 1
          }

    
  
        return set_active_Singleproducts;



      case actionTypes.SET_ACTIVE_PRODUCTS:
        const set_active_products = {
          ...state,
        };
        set_active_products.myproducts.map((e)=>{
          if(e.id == action.data.id){
          return  e.active = 1
          }

        })

        set_active_products.myActiveProducts = [...set_active_products.myActiveProducts,action.data];
        
  
        return set_active_products;

      case actionTypes.SET_SINGLE_PRODUCT:
        const set_single = {
          ...state,
        };
        set_single.singleProduct = action.data;
        
  
        return set_single;

        case actionTypes.SET_PRICE:
          const set_single_price = {
            ...state,
          };
          set_single_price.singleProduct.price = action.data.price;
          
    
          return set_single_price;

          case actionTypes.SET_QUANTITY:
            const set_single_quantity = {
              ...state,
            };
            set_single_quantity.singleProduct.quantity = action.data.quantity;
            
      
            return set_single_quantity;
 


          case actionTypes.SET_MIN:
            const set_min_price = {
              ...state,
            };
            set_min_price.singleProduct.minimum = action.data.minimum;
            
      
            return set_min_price;



            case actionTypes.REMOVE_PRODUCT_MY:
              const remove = {
                ...state,
              };
              let arr4 = remove.myproducts.filter((ele) => {
                 return ele.id != action.data;
               });      
               
               remove.myproducts = arr4
        
              return remove;








   



    


//  case actionTypes.SET_TOTAL:
//       const setTotal = {
//         ...state,
//       };
//       setTotal.total = Number(action.data)
//       return setTotal;

    default:
      break;
  }
  return state;


};

export default reducer;