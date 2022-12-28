import * as actionTypes from "../constants/adminContants";



const initialState = {
isLog:false,
admin:{},
token:"",
firsUserAdmin:false


    };


const reducer = (state = initialState, action) => {



  switch (action.type) {

    
    case actionTypes.LOGIN:
        const newState = {...state}; 
        
        let userinfostring = JSON.stringify(action.data.adminInfo);
        localStorage.setItem('admin',userinfostring)
        localStorage.setItem('token',action.data.token)
        newState.token = action.data.token
         newState.admin = action.data.adminInfo;
         newState.isLog = true
         newState.firsUserAdmin = false

         console.log(newState)
        return newState


        

        case actionTypes.FIRST_USER_ADMIN:
          const firstuserAdmin = {...state}; 
          firstuserAdmin.firsUserAdmin = true
          localStorage.setItem('token', undefined)
        localStorage.setItem('admin',undefined)
    
          return firstuserAdmin

    case actionTypes.LOGOUT:
        const loguot = {...state}; 
        loguot.isLog = false;
        localStorage.setItem('token', undefined)
        localStorage.setItem('admin',undefined)
        loguot.admin ={};
        loguot.firsUserAdmin = false
    return loguot


    case actionTypes.STILL_CONNECT:  
      const stateStill = {...state}; 
      let admin = localStorage.getItem('admin');
      let token = localStorage.getItem('token');
      stateStill.firsUserAdmin = false

      if(admin != 'undefined'){
        let par =JSON.parse(admin)
      if(par == undefined || par == 'undefined' ){
        return stateStill
      }else{
        stateStill.admin = par
        stateStill.isLog = true
        stateStill.token = token
      }}else{
        console.log('admin is undefined')
      }
    

      return stateStill
        

    default:
      break;
  }
  return state;
};

export default reducer;
