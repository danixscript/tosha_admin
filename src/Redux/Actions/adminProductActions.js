import {
    ERROR,
    PRODUCT_FAIL,
    GOOD_MESSAGE,
    MSG
  } from '../constants/errConstant'
  import {
    SET_ADMIN_PRODUCTS,SET_PRICE,
     SET_SINGLE_PRODUCT,SET_MIN, 
     REMOVE_PRODUCT_MY,DE_ACTIVE_SINGLE_PRODUCT, ACTIVE_SINGLE_PRODUCT,SET_QUANTITY
 
  } from '../constants/adminProductContent'
  
  import axiosConfig from "../../config/AxiosConfig";
  



  export const getAllProductStore = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/adminproducts")
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

  
  export const setSingleProductNow = (data) => async (dispatch) => {
    try {
dispatch({type:SET_SINGLE_PRODUCT,data:data})
    } catch (e) {
      dispatch({
        type: PRODUCT_FAIL,
        payload: e.response && e.response.data.message ? e.response.data.message : e.message,
      })
    }
  }
  export const searchAllProductStore = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .get("/adminproducts/search",{params:{text:data}})
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


  
  export const setPriceNow = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/adminproducts/setprice",data)
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
           data.product.price  = data.newprice 
          
            dispatch({
              type: SET_PRICE,
              data:data.product
             
            });
            dispatch({
              type: MSG,
              data: {msg:'עדכנת מחיר מוצר ', type:'good'}
            })
          
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

  export const setProdQuantityNow = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/adminproducts/setquantity",data)
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
           data.product.quantity  = data.quantity 
          
            dispatch({
              type: SET_QUANTITY,
              data:data.product
             
            });
            dispatch({
              type: MSG,
              data: {msg:'עדכנת מלאי מוצר ', type:'good'}
            })
          
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

  
  export const setMinNow = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/adminproducts/setmin",data)
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
           data.product.minimum  = data.newmin 
          
            dispatch({
              type: SET_MIN,
              data:data.product
             
            });
            dispatch({
              type: MSG,
              data: {msg:'עדכנת נקודת איזון מוצר ', type:'good'}
            })
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




    
  export const deleteProductnow = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/adminproducts/deleteproduct",{id:data})
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
        
          
            dispatch({
              type: REMOVE_PRODUCT_MY,
              data:data
             
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




  
  export const addProductToTableMenual = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/adminproducts/additem",data)
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
        
        return dispatch({
          type: MSG,
          data: {type:'good',msg:"הכנסת מוצר משלך לאתר כל הכבוד"}
        })
          
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



   
  export const activeProductNow = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/adminproducts/activeproduct",{id:data.id})
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
         
          
            dispatch({
              type: ACTIVE_SINGLE_PRODUCT,
              data:data
             
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





   
  export const DeactiveProductNow = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/adminproducts/deactiveproduct",{id:data.id})
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
         
          
            dispatch({
              type: DE_ACTIVE_SINGLE_PRODUCT,
              data:data
             
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






  