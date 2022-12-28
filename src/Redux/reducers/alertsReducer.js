import * as actionTypes from "../constants/adminProductContent";

const initialState = {

 finished_product_orMaterial:false,
 finishedMaterial:[],
 finishedProducts:[]
  


};

const reducer = (state = initialState, action) => {
  switch (action.type) {


    case actionTypes.SET_PRODUCT_GOINGTOFINISH:
        const setCloseToFinishProduct = {
          ...state,
        };
        if(action.data.length > 0){
          setCloseToFinishProduct.finishedProducts = action.data;
        setCloseToFinishProduct.finished_product_orMaterial = true
        }
        
  
        return setCloseToFinishProduct;


        case actionTypes.SET_MATERIALGOINGTOFINISH:
            const set_materialGoingToFinish = {
              ...state,
            };
            if(action.data.length > 0){
                set_materialGoingToFinish.finishedMaterial = action.data;
                set_materialGoingToFinish.finished_product_orMaterial = true
            }
            
      
            return set_materialGoingToFinish;

            case actionTypes.CLEAR_ALERT_STATE:
            const ca = {
              ...state,
            };
         
              ca.finishedMaterial = [];
              ca.finished_product_orMaterial = false
            
            
      
            return ca;
      

    default:
      break;
  }
  return state;


};

export default reducer;