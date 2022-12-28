import {
    ERROR,
    PRODUCT_FAIL,
    GOOD_MESSAGE,
    MSG
  } from '../constants/errConstant'
  import {
    SET_MINIMUM_MATERIAL,SET_ADMIN_MATERIALS,
     SET_SINGLE_MATERIAL,
     REMOVE_PRODUCT_MY, 
     REMOVE_MATERIAL_MY,
     SET_QUANTITY,
 
  } from '../constants/adminMaterialContent'
  
  import axiosConfig from "../../config/AxiosConfig";
  

  
  
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
           data.material.minimum  = data.newmin 
          
            dispatch({
              type: SET_MINIMUM_MATERIAL,
              data:data.material
             
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




  export const getAllMaterialsStore = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/adminmaterials")
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

  


  
    
  export const addMaterialMenualy = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/adminmaterials/addmaterial",data)
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
            })
            // dispatch({
            //   type: SET_MINIMUM_MATERIAL,
            //   data:data
             
            // });
          
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


  
  export const setSingleMaterialNow = (data) => async (dispatch) => {
    try {
dispatch({type:SET_SINGLE_MATERIAL,data:data})
    } catch (e) {
      dispatch({
        type: PRODUCT_FAIL,
        payload: e.response && e.response.data.message ? e.response.data.message : e.message,
      })
    }
  }
  export const searchAllMaterialsStore = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .get("/adminmaterials/search",{params:{text:data}})
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


  
    
  export const setMinimumMaterial = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/adminmaterials/setminmat",data)
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
        
          
            dispatch({
              type: SET_MINIMUM_MATERIAL,
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


 
  export const setQuantityMaterial = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/adminmaterials/setquantity",data)
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
        
          
            dispatch({
              type: SET_QUANTITY,
              data:data.quantity
             
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
    
  export const deleteMaterialNow = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/adminmaterials/removematerial",{id:data})
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
        
          
            dispatch({
              type: REMOVE_MATERIAL_MY,
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
