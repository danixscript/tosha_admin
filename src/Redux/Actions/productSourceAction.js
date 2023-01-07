import {
    ERROR,
    PRODUCT_FAIL,
    GOOD_MESSAGE,
    MSG
  } from '../constants/errConstant'
  import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    SET_UPDATE_PRODUCT,
    CLEARUPDATE,SET_STORE_PRODUCTS
  } from '../constants/productSourceContent'
  
  import axiosConfig from "../../config/AxiosConfig";
import { STOP_LOAD } from '../constants/loaderConstant.js';
  
  
  export const getProductsSource = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .get("/productsource")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
  let arr
  console.log('hggfhgjfj',data)

         if(data == 'כללי' || data == undefined){
          console.log('hggfhgjfj')
          arr = res.data.allproducts
         }else{
          arr = res.data.allproducts.filter((e)=>{
            return e.providersid == data
          })
         }



            dispatch({
              type: SET_STORE_PRODUCTS,
              data: arr
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
  

  export const getProductSourceByProvider = (data) => async (dispatch) => {
    try {
  
      await axiosConfig
        .get("/productsource/getproviderproducts",{params:{id:data}})
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
  
          } else {
            dispatch({
              type: SET_STORE_PRODUCTS,
              data: res.data.allproducts
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
  
  
  
  
  
  
  
  
  export const addProductSource = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/productsource/addproduct",data)
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data:{type:'bad',msg:res.data.err.msg}
            })
  
          } else {
            dispatch({
              type: ADD_PRODUCT,
              data: res.data.data
            });
            dispatch({
              type: MSG,
              data: res.data.msg
            });
            dispatch({type:STOP_LOAD})
  
  
          }
        })
        .catch((err) => {
  
          dispatch({
            type: MSG,
            data: {type:'bad',msg:err+" somthig went wrong"}
          })
  
        });
  
  
  
    } catch (e) {
      dispatch({
        type: PRODUCT_FAIL,
        payload: e.response && e.response.data.message ? e.response.data.message : e.message,
      })
    }
  }
  
  export const cleareUpdateStae = (data) => async (dispatch)=>{
    try{  dispatch({
      type: CLEARUPDATE,
      data: data
    });
  
    }catch(e){
  
    }
  }
  
  
  export const removeProductNow = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/productsource/removeproduct",data)
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data:{type:'bad',msg:res.data.err.msg}
            })
  
          } else {
            dispatch({
              type: REMOVE_PRODUCT,
              data: data
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
  
  
//   export const updateProduct = (data) => async (dispatch) => {
//     try {
//       await
//         axiosConfig
//         .post("productsource/updateproduct", 
//         data
//         )
//         .then((res) => {
//           if(res.data.err){
//           return   dispatch({
//             type: MSG,
//             data: {type:'bad',msg:"somthig went wrong update"}
//           })
  
//           }else{
//          console.log(res.data)
//          dispatch({type:SET_UPDATE_PRODUCT,data:res.data.data});
          
  
//           }
//         })
//         .catch((err) => {
//           dispatch({
//             type: MSG,
//             data: {type:'bad',msg:"somthig went wron g update"}
//           })
//         });
  
  
  
//     } catch (e) {
//       dispatch({
//         type: PRODUCT_FAIL,
//         payload: e.response && e.response.data.message ? e.response.data.message : e.message,
//       })
//     }
//   }
  
  
  
  
  
  export const setProductToUpdate = (data) => async (dispatch) => {
    try {
  
      console.log(data)
      dispatch({type:SET_UPDATE_PRODUCT,data:data});
  
  
  
    } catch (e) {
      dispatch({
        type: PRODUCT_FAIL,
        payload: e.response && e.response.data.message ? e.response.data.message : e.message,
      })
    }
  }



    
  export const searchProductsSource = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .get("/productsource/search",{params:{text:data.text,id:data.id}})
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data:{type:'bad',msg:res.data.err.msg}
            })
  
          } else {
            dispatch({
              type: SET_STORE_PRODUCTS,
              data: res.data.allproducts
            });
          
  
  
          }
        })
        .catch((err) => {
  
          dispatch({
            type: MSG,
            data: {type:'bad',msg:err+" somthig went wrong"}
          })
  
        });
  
  
  
    } catch (e) {
      dispatch({
        type: PRODUCT_FAIL,
        payload: e.response && e.response.data.message ? e.response.data.message : e.message,
      })
    }
  }