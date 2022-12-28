import {

    PRODUCT_FAIL,

    MSG,

} from '../constants/errConstant'
import {

    SET_ORDER_PLACE,

} from '../constants/adminOrderAction'

import axiosConfig from "../../config/AxiosConfig";


export const getMostBuyingProduct = (data) => async (dispatch) => {
    try {
        await axiosConfig
            .get("/adminstats/topproduct",{params:{id:data}})
            .then((res) => {
                if (res.data.err) {
                    return dispatch({
                        type: MSG,
                        data: res.data.err
                    })

                } else {
                  return res.data


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



// export const getTotalOrdersPricesGroupByProvides = () => async (dispatch) => {
//     try {
//       await axiosConfig
//         .get("/adminorder/totalpricesorders")
//         .then((res) => {
//           if (res.data.err) {
//             return dispatch({
//               type: MSG,
//               data: res.data.err
//             })
  
//           } else {
//             dispatch({
//               type: SET_ORDER_PLACE,
//               data: res.data.allorders
//             });
  
  
//           }
//         })
//         .catch((err) => {
  
//           dispatch({
//             type: MSG,
//             data: {
//               type: 'bad',
//               msg: err.message
//             }
//           })
  
//         });
  
  
  
//     } catch (e) {
//       dispatch({
//         type: PRODUCT_FAIL,
//         payload: e.response && e.response.data.message ? e.response.data.message : e.message,
//       })
//     }
//   }





export const getStoreStatsNow = (data) => async (dispatch) => {
    try {
        await axiosConfig
            .get("/adminstats/topproduct")
            .then((res) => {
                if (res.data.err) {
                    return dispatch({
                        type: MSG,
                        data: res.data.err
                    })

                } else {
                  return res.data


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
