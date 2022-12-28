import * as actionTypes from "../constants/providerContent";

const initialState = {
  providers: [],
  singleProvider:{}


};

const reducer = (state = initialState, action) => {
  switch (action.type) {



    case actionTypes.ADD_PROVIDER:
      const provider = {
        ...state,
      };

      if (action.data) {
        provider.providers = [...provider.providers, action.data];
      }

      return provider;


      case actionTypes.SET_SINGLE_PROVIDER:
        const singleProvider = {
          ...state,
        };
      singleProvider.singleProvider = action.data
        return singleProvider;
  
  

    case actionTypes.REMOVE_PROVIDE:
      const removeProvider = {
        ...state,
      };
      if (action.data) {

        let arr = removeProvider.providers.filter((ele) => {
          return ele.id != action.data.id;
        });
        removeProvider.providers = arr;

      }

      return removeProvider;




      
  


    case actionTypes.SET_ALL_PROVIDERS:
      const providersState = {
        ...state,
      };
       
      providersState.providers = action.data

      return providersState;



    default:
      break;
  }
  return state;
};

export default reducer;