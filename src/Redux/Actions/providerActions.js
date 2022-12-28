import {LOGIN,LOGOUT,SET_ALL_EMPLOYEES,STILL_CONNECT,ADD_EMPLOYEE,REMOVE_EMPLOYEE,ADD_PROVIDER} from '../constants/adminContants'
import {CLEAR, MSG, PRODUCT_FAIL} from '../constants/errConstant'
import {ERROR} from '../constants/errConstant'
import axiosConfig from "../../config/AxiosConfig";
import { REMOVE_PROVIDE, SET_ALL_PROVIDERS,SET_SINGLE_PROVIDER ,EDIT_PROVIDER} from '../constants/providerContent';


export const setSingleProviderNow = (data) => async (dispatch)=>{
  try{
     dispatch({type:SET_SINGLE_PROVIDER,data:data})
  }catch(e){
      dispatch({
          type:ERROR,
          payload:e.response && e.response.data.message ?e.response.data.message 
          : e.message,
      })
  }
}

export const addProvidersNow = (data) => async (dispatch)=>{
    try{
        await
        axiosConfig
        .post("/providers/addprovider", 
       data.data
        )
        .then((res) => {
          if(res.data.err){
            dispatch({type:MSG,data:res.data.err})
      
          }else{
           if(res.data){
            dispatch({type:ADD_PROVIDER,data:res.data})

            
           }

      
          }
        })
        .catch((err) => {
          dispatch({type:MSG,data:"somthing wrong"})
        });

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}


export const editProvider = (data) => async (dispatch)=>{
  try{
      await
      axiosConfig
      .post("/providers/editProvider", 
     data
      )
      .then((res) => {
        if(res.data.err){
          dispatch({type:MSG,data:res.data.err})
    
        }else{
         if(res.data){
          dispatch({type:EDIT_PROVIDER,data:data})
          dispatch({type:MSG,data:res.data.msg})


          
         }

    
        }
      })
      .catch((err) => {
        dispatch({type:MSG,data:"somthing wrong"})
      });

  }catch(e){
      dispatch({
          type:ERROR,
          payload:e.response && e.response.data.message ?e.response.data.message 
          : e.message,
      })
  }
}



export const getAllProviders = () => async (dispatch)=>{
    try{
        await
        axiosConfig
        .get("/providers", 
       
        ) 
        .then((res) => {
          if(res.data.err){
            dispatch({type:MSG,data:res.data.err})
      
          }else{
           if(res.data){
            dispatch({type:SET_ALL_PROVIDERS,data:res.data.providers})

            
           }

      
          }
        })
        .catch((err) => {
          dispatch({type:MSG,data:{msg:"somthing wrong",type:"bad"}})
        });

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}


// export const getAllProvidersOrders = () => async (dispatch)=>{
//   try{
//       await
//       axiosConfig
//       .get("/providers/ordersbyprovider", 
     
//       ) 
//       .then((res) => {
//         if(res.data.err){
//           dispatch({type:MSG,data:res.data.err})
    
//         }else{
//          if(res.data){
//           dispatch({type:SET_ALL_PROVIDERS_ORDERS,data:res.data.providers})

          
//          }

    
//         }
//       })
//       .catch((err) => {
//         dispatch({type:MSG,data:{msg:"somthing wrong",type:"bad"}})
//       });

//   }catch(e){
//       dispatch({
//           type:ERROR,
//           payload:e.response && e.response.data.message ?e.response.data.message 
//           : e.message,
//       })
//   }
// }


export const removeProviderNow = (data) => async (dispatch)=>{
  try{
      await
      axiosConfig
      .post("/providers/removeprovider", 
     data
      )
      .then((res) => {
        if(res.data.err){
          dispatch({type:MSG,data:res.data.err})
    
        }else{
         if(res.data){
          dispatch({type:REMOVE_PROVIDE,data:res.data})

          
         }

    
        }
      })
      .catch((err) => {
        dispatch({type:MSG,data:"somthing wrong"})
      });

  }catch(e){
      dispatch({
          type:ERROR,
          payload:e.response && e.response.data.message ?e.response.data.message 
          : e.message,
      })
  }
}