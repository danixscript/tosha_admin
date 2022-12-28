import * as actionTypes from "../constants/adminMaterialContent";

const initialState = {

  myMaterial: [],
  singleMaterial:{}
  


};

const reducer = (state = initialState, action) => {
  switch (action.type) {




    case actionTypes.SET_ADMIN_MATERIALS:
      const set_product = {
        ...state,
      };
      set_product.myMaterial = action.data;
      

      return set_product;



      case actionTypes.SET_SINGLE_MATERIAL:
        const set_single = {
          ...state,
        };
        set_single.singleMaterial = action.data;
        
  
        return set_single;

      
 
        case actionTypes.CLEAR_MATERIALS_STATE:
          const clear_state = {
            ...state,
          };
          clear_state.singleMaterial = {};
          clear_state.myMaterial = []
          
    
          return clear_state;

          case actionTypes.SET_MINIMUM_MATERIAL:
            const set_minimum = {
              ...state,
            };
            set_minimum.singleMaterial.minimum = action.data.newmin;
            
      
            return set_minimum;
            case actionTypes.SET_QUANTITY:
            const set_quantity = {
              ...state,
            };
            set_quantity.singleMaterial.quantity = action.data;
            
      
            return set_quantity;



            case actionTypes.REMOVE_MATERIAL_MY:
              const remove = {
                ...state,
              };
              let arr4 = remove.myMaterial.filter((ele) => {
                 return ele.materialid != action.data;
               });      
               
               remove.myMaterial = arr4
        
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