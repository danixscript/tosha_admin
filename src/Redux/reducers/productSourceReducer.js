import * as actionTypes from "../constants/productSourceContent";

const initialState = {
  products: [],
  providername:''

};

const reducer = (state = initialState, action) => {
  switch (action.type) {



    case actionTypes.ADD_PRODUCT:
      const product = {
        ...state,
      };
      if (action.data) {
        product.products = [...product.products, action.data];
      }
      return product;

      case actionTypes.CLEAR_STORE_PRODUCTS:
        const clear_product = {
          ...state,
        };
        clear_product.products = []
        clear_product.providername =""
        return clear_product;

      
    case actionTypes.REMOVE_PRODUCT:
      const removeproduct = {
        ...state,
      };
      if (action.data) {

        let arr = removeproduct.products.filter((ele) => {
          return ele.productid != action.data.productid;
        });
        removeproduct.products = arr;

      }

      return removeproduct;




      case actionTypes.UPDATE_PRODUCT:
        const update = {
          ...state,
        };
        update.items.map((e,i)=>{
          if(e.id == action.data.id){
            update.items[i] = action.data
          }
        })
  
        return update;
  


    case actionTypes.SET_STORE_PRODUCTS:
      const SetProductsSource = {
        ...state,
      };
      if(action.data.length > 0){
        SetProductsSource.products = action.data
      SetProductsSource.providername = action.data[0].name
      }
      return SetProductsSource;



    default:
      break;
  }
  return state;
};

export default reducer;