import {
    ERROR,
    PRODUCT_FAIL,
    GOOD_MESSAGE,
    MSG
  } from '../constants/errConstant'
  import {
    SET_ADMIN_PRODUCTS,SET_PRICE,
     SET_SINGLE_PRODUCT,SET_MIN, 
     REMOVE_PRODUCT_MY
 
  } from '../constants/adminProductContent'
  
  import axiosConfig from "../../config/AxiosConfig";
import { SET_ADMIN_MATERIALS } from '../constants/adminMaterialContent';
  



  export const notActiveProducts = (data) => async (dispatch) => {
    try {
      try {
        await axiosConfig
          .get("/adminproducts/notactiveproduct")
          .then((res) => {
            if (res.data.err) {
              return dispatch({
                type: MSG,
                data: res.data.err
              })
    
            } else {
          
            
              dispatch({
                type: SET_ADMIN_PRODUCTS,
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
        
    } catch (e) {
      dispatch({
        type: PRODUCT_FAIL,
        payload: e.response && e.response.data.message ? e.response.data.message : e.message,
      })
    }
  }


  
  
  export const expensiveProduct = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/adminproducts/topexpensive")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
        
          
            dispatch({
              type: SET_ADMIN_PRODUCTS,
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
  
  export const getFinishedProducts = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/adminproducts/finishedproducts")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
        
          
            dispatch({
              type: SET_ADMIN_PRODUCTS,
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

  export const expensiveMaterial = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/adminmaterials/topexpensive")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
        
          
            dispatch({
              type: SET_ADMIN_MATERIALS,
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

  export const almostFinished = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/adminmaterials/almostdone")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
        
          
            dispatch({
              type: SET_ADMIN_MATERIALS,
              data:res.data.allMaterials
             
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

  export const itFinished = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/adminmaterials/underminimum")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
        
          
            dispatch({
              type: SET_ADMIN_MATERIALS,
              data:res.data.allMaterials
             
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


  export const cheepProduct = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .get("/adminproducts/cheep",{id:data})
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
        
          
            dispatch({
              type: SET_ADMIN_PRODUCTS,
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