import {ADD_PRODUCT_TO_CART,CHANGE_AMOUNT,CLEAR_CART,DELETE_ALL,REMOVE_PRODUCT_FROM_CART,SET_PRODUCTS_CART} from '../constants/adminCartContent'
import {ERROR,PRODUCT_FAIL,MSG} from '../constants/errConstant'

import axiosConfig from "../../config/AxiosConfig";



export const addItemToAdminCart = (data) => async (dispatch)=>{
    try{
    

dispatch({type:ADD_PRODUCT_TO_CART,data:data})

    }catch(e){
        dispatch({
            type:PRODUCT_FAIL,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const clearCartNow = (data) => async (dispatch)=>{
    try{
        dispatch({type:CLEAR_CART});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const buyNowNow = (data) => async (dispatch)=>{
    try{
        await
        axiosConfig
        .post("/adminorder/order",{products:data.products,total:data.total,admin:data.admin,providerid:data.providerid,providername:data.providername}
        )
        .then((res) => {
          if(res.data.err){
            dispatch({type:MSG,data:res.data.err})
          }else{
           if(res.data){
            dispatch({type:CLEAR_CART});      
            dispatch({type:MSG,data:res.data.msg})

           }
  
      
          }
        })
        .catch((err) => {
          dispatch({type:MSG,data:{type:'bad',msg:err.message}})
        });
        

    }catch(e){
        dispatch({type:MSG,data:{type:'bad',msg:e.message}})

    }
}






export const removeProductFromCartNow = (data) => async (dispatch)=>{
    try{

        dispatch({type:DELETE_ALL,data:data.productid});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const setProductCart = () => async (dispatch)=>{
    try{

        dispatch({type:SET_PRODUCTS_CART});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const changeAmountNow = (data) => async (dispatch)=>{
    try{

        dispatch({type:CHANGE_AMOUNT,data:{productid:data.productid,amount:data.amount}});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}