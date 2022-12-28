import * as actionTypes from "../constants/adminContants";



const initialState = {

adminworkers:[],



    };


const reducer = (state = initialState, action) => {



  switch (action.type) {

    
    case actionTypes.ADD_EMPLOYEE:
        const newState = {...state}; 
         newState.adminworkers = [...newState.adminworkers,action.data];
         
      
        return newState

        case actionTypes.SET_ALL_EMPLOYEES:
            const setE = {...state}; 
            setE.adminworkers = action.data;
             
          
            return setE


    case actionTypes.REMOVE_EMPLOYEE:
        const loguot = {...state};  
        let arr = loguot.adminworkers.filter((ele) => {
            return ele.id != action.data;
          });
       loguot.adminworkers = arr

    return loguot


   
        

    default:
      break;
  }
  return state;
};

export default reducer;
