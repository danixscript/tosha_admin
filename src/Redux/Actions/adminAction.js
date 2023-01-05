import {LOGIN,LOGOUT,SET_ALL_EMPLOYEES,STILL_CONNECT,ADD_EMPLOYEE,REMOVE_EMPLOYEE,FIRST_USER_ADMIN} from '../constants/adminContants'
import {CLEAR, MSG, PRODUCT_FAIL} from '../constants/errConstant'
import {ERROR} from '../constants/errConstant'
import axiosConfig from "../../config/AxiosConfig";


export const adminLogin = (data) => async (dispatch)=>{

    try{
        await
        axiosConfig
        .post("/admin/login", 
       data
        )
        .then((res) => { 
          if(res.data.err){
           
            dispatch({type:MSG,data:{msg:res.data.err,type:'bad'}})
          
            return res.data.err
      
          }else{
           if(res.data){
            dispatch({type:LOGIN,data:res.data})

            
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

export const firsUserAdmin = (data) => async (dispatch)=>{

  try{
      await
      axiosConfig
      .get("/admin/checkforfirstUser"  )
      .then((res) => { 
        if(res.data.err){
         
          dispatch({type:MSG,data:{msg:res.data.err,type:'bad'}})
        
          return res.data.err
    
        }else{
         if(res.data.isFirsUser){
          dispatch({type:FIRST_USER_ADMIN,data:res.data})

          
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








export const adminloguot = (data) => async (dispatch)=>{
    try{
        dispatch({type:LOGOUT});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const stillConnected = (data) => async (dispatch)=>{
    try{
        dispatch({type:STILL_CONNECT});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}


export const registerEmployee = (data) => async (dispatch)=>{
    try{
        await
        axiosConfig
        .post("/admin/register", 
       data
        )
        .then((res) => {
          if(res.data.err){
            dispatch({type:MSG,data:res.data.err})
      
          }else{
           if(res.data){
            dispatch({type:ADD_EMPLOYEE,data:res.data.adminInfo})
            dispatch({type:MSG,data:res.data.msg});
            
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




export const updateEmployeephoneNow = (data) => async (dispatch)=>{
  try{
      await
      axiosConfig
      .post("/admin/updatephone", 
   {phone:data.phone,id:data.id,permissions:data.permissions}
      )
      .then((res) => {
        if(res.data.err){
          dispatch({type:MSG,data:res.data.err})
    
        }else{
         if(res.data){
          dispatch({type:MSG,data:{type:'good',msg:'עדכנת טלפון של עובד '}});
          
         }

    
        }
      })
      .catch((err) => {
        dispatch({type:MSG,data:{msg:"somthing wrong",type:'bad'}})
      });

  }catch(e){
      dispatch({
          type:ERROR,
          payload:e.response && e.response.data.message ?e.response.data.message 
          : e.message,
      })
  }
}







export const updateEmployeePermissieonsNow = (data) => async (dispatch)=>{
  try{
      await
      axiosConfig
      .post("/admin/updateper", 
     {id:data.id,permissions:data.permissions,permissionsSElect:data.permissionsSElect}
      )
      .then((res) => {
        if(res.data.err){
          dispatch({type:MSG,data:res.data.err})
    
        }else{
         if(res.data){
          dispatch({type:MSG,data:{type:'good',msg:'עדכנת הרשאות של עובד '}});
          
         }

    
        }
      })
      .catch((err) => {
        dispatch({type:MSG,data:{msg:"somthing wrong",type:'bad'}})
      });

  }catch(e){
      dispatch({
          type:ERROR,
          payload:e.response && e.response.data.message ?e.response.data.message 
          : e.message,
      })
  }
}







export const getAllEmployees = (data) => async (dispatch)=>{
    try{
        await
        axiosConfig
        .post("/admin/getallemployees", data.data
        )
        .then((res) => {
          if(res.data.err){
            dispatch({type:MSG,data:res.data.err})
          }else{
           if(res.data){
            dispatch({type:SET_ALL_EMPLOYEES,data:res.data.employees});
            
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




export const removeEmployeeNow = (data) => async (dispatch)=>{
  try{
      await
      axiosConfig
      .post("/admin/removeemployee",data
      )
      .then((res) => {
        if(res.data.err){
          dispatch({type:MSG,data:res.data.err})
        }else{
         if(res.data){
          dispatch({type:REMOVE_EMPLOYEE,data:data.id});
          
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






