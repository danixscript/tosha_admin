import {
    ERROR,
    PRODUCT_FAIL,
    GOOD_MESSAGE,
    MSG
  } from '../constants/errConstant'
  import {
    SET_USER_ORDERS,SET_USER_NOT_ACTIVE_ORDERS
 
  } from '../constants/usersOrderContent'
  
  import axiosConfig from "../../config/AxiosConfig";
  



  export const gelAllUsersOrder = (data) => async (dispatch) => {
      try {
        await axiosConfig
          .get("/adminstats/getallusersorders")
          .then((res) => {
            if (res.data.err) {
              return dispatch({
                type: MSG,
                data: res.data.err
              })
    
            } else {
          
            
              dispatch({
                type: SET_USER_ORDERS,
                data:res.data.allUsersOrders
               
              });
            
            }
          })
          .catch((err) => {
               dispatch({
                  type: MSG,
                  data: {type:'bad',msg:err.message}
                })
          });
      } catch (e) {
        dispatch({
          type: PRODUCT_FAIL,
          payload: e.response && e.response.data.message ? e.response.data.message : e.message,
        })
      }
        
   
  }


  
  
  export const notActiveOrders = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/userorders/notactiveorders")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
        
          
            dispatch({
              type: SET_USER_NOT_ACTIVE_ORDERS,
              data:res.data.allProducts
             
            });
          
          }
        })
        .catch((err) => {
             dispatch({
                type: MSG,
                data: {type:'bad',msg:err.message}
              })
        });
    } catch (e) {
      dispatch({
        type: PRODUCT_FAIL,
        payload: e.response && e.response.data.message ? e.response.data.message : e.message,
      })
    }
  }
 