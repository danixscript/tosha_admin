import {
    ERROR,
    PRODUCT_FAIL,
    GOOD_MESSAGE,
    MSG
  } from '../constants/errConstant'
  import {
    SET_PRICE
   
 
  } from '../constants/adminProductContent'
  
  import axiosConfig from "../../config/AxiosConfig";
  



  
//   export const getWorkersState = () => async (dispatch) => {
//     try {
//       await axiosConfig
//         .get("/adminproducts/getallstate")
//         .then((res) => {
//           if (res.data.err) {
//             return dispatch({
//               type: MSG,
//               data: res.data.err
//             })
  
//           } else {
         
          
//             dispatch({
//               type: SET_PRICE,
//               data:data.product
             
//             });
          
//           }
//         })
//         .catch((err) => {
//              dispatch({
//                 type: MSG,
//                 data: {type:'bad',msg:err.message}
//               })
//         });
//     } catch (e) {
//       dispatch({
//         type: PRODUCT_FAIL,
//         payload: e.response && e.response.data.message ? e.response.data.message : e.message,
//       })
//     }
//   }


  




    
 