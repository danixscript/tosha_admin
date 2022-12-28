import {
    PRODUCT_FAIL,
    MSG,
  } from '../constants/errConstant'
  import {
   
  SET_USERS,REMOVE_USER,BAND_USER,UN_BAND_USER
    
   
  } from '../constants/usersContent'
  
  import axiosConfig from "../../config/AxiosConfig";
  


  export const getAllUsers = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .get("/admin/getallusers")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
           
            dispatch({
              type: SET_USERS,
              data: res.data.allUsers
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
  

  export const bandUserNow = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/admin/banduser",data)
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
           
            dispatch({
              type: BAND_USER,
              data: data.userid
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

  
  export const unbandUserNow = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/admin/unband",data)
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
           
            dispatch({
              type: UN_BAND_USER,
              data: data.userid
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

  export const removeUserNow = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/admin/removeuser")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
           
            dispatch({
              type: REMOVE_USER,
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