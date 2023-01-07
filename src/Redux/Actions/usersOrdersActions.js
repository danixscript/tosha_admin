import {
    PRODUCT_FAIL,
    MSG,
  } from '../constants/errConstant'
  import {
   
    SET_USER_ORDERS,
    REMOVE_ORDER_NOW,
    SET_USER_NOT_ACTIVE_ORDERS,
    SET_USER_ORDER_INFO_PAGE,
    REMOVE_USERS_ORDER
    
   
  } from '../constants/usersOrderContent'
  
  import axiosConfig from "../../config/AxiosConfig";
  

  



  
  export const getOrderInfoById = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .get("/users/getorderinfo",{params:{id:data}})
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
            dispatch({
              type: SET_USER_ORDER_INFO_PAGE,
              data: res.data.orderinfo
            });
  
          }
        })
        .catch((err) => {
          dispatch({
            type: MSG,
            data: {
              type: 'bad',
              msg: err.message
            }
          })
  
        });
  
    } catch (e) {
      dispatch({
        type: PRODUCT_FAIL,
        payload: e.response && e.response.data.message ? e.response.data.message : e.message,
      })
    }
  }

  
  export const desableOrderNow = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/usersorders/desableuserorder",{id:data})
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
           
            dispatch({
              type: MSG,
              data: res.data.msg
            });
  
          }
        })
        .catch((err) => {
          dispatch({
            type: MSG,
            data: {
              type: 'bad',
              msg: err.message
            }
          })
  
        });
  
    } catch (e) {
      dispatch({
        type: PRODUCT_FAIL,
        payload: e.response && e.response.data.message ? e.response.data.message : e.message,
      })
    }
  }
  
  export const getAllUsersOrders = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/usersorders/order")
        .then((res) => {
          if (res.data.err) { 
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
            dispatch({
              type: SET_USER_ORDERS,
              data: res.data.allorders
            });
  
          }
        })
        .catch((err) => {
          dispatch({
            type: MSG,
            data: {
              type: 'bad',
              msg: err.message
            }
          })
  
        });
  
    } catch (e) {
      dispatch({
        type: PRODUCT_FAIL,
        payload: e.response && e.response.data.message ? e.response.data.message : e.message,
      })
    }
  }
  
  // export const deleteOrderNow = (data) => async (dispatch) => {
  //   try {
  //     await axiosConfig
  //       .post("/usersorder/delorder", {
  //         orderid: data
  //       })
  //       .then((res) => {
  //         if (res.data.err) {
  //           return dispatch({
  //             type: MSG,  
  //             data: res.data.err
  //           })
  
  //         } else {
  
  //           dispatch({
  //             type: REMOVE_USERS_ORDER,
  //             data: data
  //           });
  
  //         }
  //       })
  //       .catch((err) => {
  //         dispatch({
  //           type: MSG,
  //           data: {
  //             type: 'bad',
  //             msg: err.message
  //           }
  //         })
  //       });
  //   } catch (e) {
  //     dispatch({
  //       type: PRODUCT_FAIL,
  //       payload: e.response && e.response.data.message ? e.response.data.message : e.message,
  //     })
  //   }
  // }
  
 


  export const getAllNotActiveOrders = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/usersorders/waitingorders")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
            dispatch({
              type: SET_USER_NOT_ACTIVE_ORDERS,
              data: res.data.allorders
            });
  
          }
        })
        .catch((err) => {
          dispatch({
            type: MSG,
            data: {
              type: 'bad',
              msg: err.message
            }
          })
  
        });
  
    } catch (e) {
      dispatch({
        type: PRODUCT_FAIL,
        payload: e.response && e.response.data.message ? e.response.data.message : e.message,
      })
    }
  }



  
  export const acceptUserorderNow = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/usersorders/acceptorder",{id:data})
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
            dispatch({
              type: REMOVE_USERS_ORDER,
              data: data
            });
  
          }
        })
        .catch((err) => {
          dispatch({
            type: MSG,
            data: {
              type: 'bad',
              msg: err.message
            }
          })
  
        });
  
    } catch (e) {
      dispatch({
        type: PRODUCT_FAIL,
        payload: e.response && e.response.data.message ? e.response.data.message : e.message,
      })
    }
  }