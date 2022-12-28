import {
  ERROR,
  PRODUCT_FAIL,
  GOOD_MESSAGE,
  MSG,
  CHANGE_POP_UP_TIME
} from '../constants/errConstant'

import {
  ACTIVE_ORDERS,
  CLOSE_POP_UP,
  ADD_PRODUCT,
  SET_ORDER_PLACE,
  SET_STORE_PRODUCTS,
  SET_NON_ACTIVE_ORDER_PLACE,
  SET_ORDERS_INFO,
  REMOVE_ORDER_NOW,
  ACCETP_ORDER,
  
  
} from '../constants/adminOrderAction'

import{  SET_PRODUCT_GOINGTOFINISH,SET_MATERIALGOINGTOFINISH, CLEAR_ALERT_STATE
 } from '../constants/adminProductContent'

import {SET_USER_NOT_ACTIVE_ORDERS} from '../constants/usersOrderContent'

import axiosConfig from "../../config/AxiosConfig";


export const getAllAdminOrders = () => async (dispatch) => {
  try {
    await axiosConfig
      .get("/adminorder/order")
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: MSG,
            data: res.data.err
          })

        } else {
          dispatch({
            type: SET_ORDER_PLACE,
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

export const deleteOrderNow = (data) => async (dispatch) => {
  try {
    await axiosConfig
      .post("/adminorder/delorder", {
        orderid: data 
      })
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: MSG,
            data: res.data.err
          })

        } else {

          dispatch({
            type: REMOVE_ORDER_NOW,
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

export const acceptOrderNow = (data) => async (dispatch) => {
  try {
    await axiosConfig
      .post("/adminorder/acorder", {
        orderid: data
      })
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: MSG,
            data: res.data.err
          })

        } else {

          dispatch({
            type: ACCETP_ORDER,
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

export const checkOrders = () => async (dispatch) => {
  try {
    dispatch({type:CLEAR_ALERT_STATE})
    await axiosConfig
      .get("/adminorder/getcheck") 
      .then((res) => {
        console.log('sending request now')
        if (res.data.err) {
          return dispatch({
            type: MSG,
            data: res.data.err
          })

        } else {
          if (res.data) {
            dispatch({
              type: SET_NON_ACTIVE_ORDER_PLACE,
              data: res.data.activeOrders
            });
            dispatch({
              type: SET_USER_NOT_ACTIVE_ORDERS,
              data: res.data.usersOrder
            });
            dispatch({
              type: SET_PRODUCT_GOINGTOFINISH,
              data: res.data.productfinished
            });

            dispatch({
              type: SET_MATERIALGOINGTOFINISH,
              data: res.data.materialfinished
            });
            
          } else {
            return
          }
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



export const getAllNotActiveOrder = () => async (dispatch) => {
  try {
    await axiosConfig
      .get("/adminorder/notactive") 
      .then((res) => {
        console.log('sending request now')
        if (res.data.err) {
          return dispatch({
            type: MSG,
            data: res.data.err
          })

        } else {
          if (res.data.activeOrders.length > 0) {
            dispatch({
              type: SET_NON_ACTIVE_ORDER_PLACE,
              data: res.data.activeOrders
            });
         
            
          } else {
            return
          }
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



export const setAllNonActiveOrders = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SET_NON_ACTIVE_ORDER_PLACE,
      data: data
    })





  } catch (e) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message,
    })
  }
}


export const closePopUpNow = () => async (dispatch) => {
  try {

    dispatch({
      type: CLOSE_POP_UP
    })
    dispatch({
      type: CHANGE_POP_UP_TIME
    })

  } catch (e) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message,
    })
  }
}




export const getOrderInfo = (data) => async (dispatch) => {
  try {
    await axiosConfig
      .get("/adminorder/test", {
        params: {
          orderid: data
        }
      })
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: MSG,
            data: res.data.err
          })

        } else {
          dispatch({
            type: SET_ORDERS_INFO,
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



export const getOrderByDate = () => async (dispatch) => {
  try {
    await axiosConfig
      .get("/adminorder/getorderbydate")
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: MSG,
            data: res.data.err
          })

        } else {
          dispatch({
            type: SET_ORDER_PLACE,
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



export const getExpensiveOrderN = () => async (dispatch) => {
  try {
    await axiosConfig
      .get("/adminorder/getexpensiveorder")
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: MSG,
            data: res.data.err
          })

        } else {
          dispatch({
            type: SET_ORDER_PLACE,
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




export const getCheepOrderN = () => async (dispatch) => {
  try {
    await axiosConfig
      .get("/adminorder/getcheeporder")
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: MSG,
            data: res.data.err
          })

        } else {
          dispatch({
            type: SET_ORDER_PLACE,
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







export const getNotActiveOrdersNow = () => async (dispatch) => {
  try {
    await axiosConfig
      .get("/adminorder/getnotactive")
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: MSG,
            data: res.data.err
          })

        } else {
          dispatch({
            type: SET_ORDER_PLACE,
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