import * as actionTypes from "../constants/adminCartContent";

const initialState = {

  cartItems: [],
  total:0,


};

const reducer = (state = initialState, action) => {
  switch (action.type) {




    case actionTypes.CLEAR_CART:
      const clear_cart = {
        ...state,
      };
      clear_cart.cartItems = [];
      clear_cart.total = 0;

      localStorage.setItem("card", undefined);
      localStorage.setItem("total", undefined);
      return clear_cart;






    case actionTypes.ADD_PRODUCT_TO_CART:
      const product = {
        ...state,
      };
      let flag = false;
      if (action.data) {
        for (let i = 0; i < product.cartItems.length; i++) {
          if (product.cartItems[i].productid == action.data.productid) {
              product.cartItems[i].amount =
              product.cartItems[i].amount + action.data.amount;
              product.total = product.total + (action.data.price * action.data.amount);
              localStorage.setItem("total", product.total);
              flag = true;
          }
        }
        if (!flag) {
         
          product.total = product.total + (action.data.price * action.data.amount);
          product.cartItems = [...product.cartItems, action.data];
          localStorage.setItem("total", product.total);
        }
      }

      // storing data on local storage just for case the user reload the page 
      let safeReload = JSON.stringify(product.cartItems);
      localStorage.setItem("card", safeReload);

      return product;



    case actionTypes.REMOVE_PRODUCT_FROM_CART:
      const remove_product = {
        ...state,
      };
      if (action.data) {
        let flag = false;
        for (let i = 0; i < remove_product.cartItems.length; i++) {
          if (remove_product.cartItems[i].productid == action.data.productid) {
            if (remove_product.cartItems[i].amount > 1) {
              remove_product.cartItems[i].amount =
                remove_product.cartItems[i].amount - 1;
                remove_product.total = remove_product.total - remove_product.cartItems[i].price;
                localStorage.setItem("total", remove_product.total);
            } else {
              
              flag = true;
            }
          }
        }

        if (flag) {
          let arr = remove_product.cartItems.filter((ele) => {
            remove_product.total = remove_product.total - ele.price;
            localStorage.setItem("total", remove_product.total);
            return ele.productid != action.data.productid;
          });
          
          remove_product.cartItems = arr;
        }

        let safeDeploy = JSON.stringify(remove_product.cartItems);
        localStorage.setItem("card", safeDeploy);
      }

      return remove_product;









    case actionTypes.DELETE_ALL:
      const removeAllProduct = {
        ...state,
      };
      if (action.data) {
        let theTotalNow = 0;

        let arr = removeAllProduct.cartItems.filter((ele) => {
         if(ele.productid != action.data){
          theTotalNow +=   (ele.price * ele.amount);
         }


          return ele.productid != action.data;
        });
        removeAllProduct.cartItems = arr;
        removeAllProduct.total = theTotalNow
        
        let safeDeploy = JSON.stringify(removeAllProduct.cartItems);
        localStorage.setItem("card", safeDeploy);
        localStorage.setItem("total", removeAllProduct.total);

      }

      return removeAllProduct;



      case actionTypes.CHANGE_AMOUNT:
        const changeAmount = {
          ...state,
        };
        if (action.data) {
          let thetotal =0
  
        changeAmount.cartItems.map((e,i)=>{
          if(e.productid == action.data.productid){
           
              changeAmount.cartItems[i].amount= action.data.amount

          }
          thetotal += changeAmount.cartItems[i].amount * changeAmount.cartItems[i].price
        })
        changeAmount.total = thetotal
          let safeDeploy = JSON.stringify(changeAmount.cartItems);
          localStorage.setItem("card", safeDeploy);
          localStorage.setItem("total", changeAmount.total);
  
        }
  
        return changeAmount;



    case actionTypes.SET_PRODUCTS_CART:
      const setState = {
        ...state,
      };
      let data = localStorage.getItem('card');
      let total = localStorage.getItem('total');

  


      if (data == undefined || data == "undefined") {
        return setState
      } else {

        let jsondata = JSON.parse(data);
        let totalstate = JSON.parse(total);

        setState.total = totalstate
        setState.cartItems = jsondata;
      }



      return setState;


//  case actionTypes.SET_TOTAL:
//       const setTotal = {
//         ...state,
//       };
//       setTotal.total = Number(action.data)
//       return setTotal;




    default:
      break;
  }
  return state;


};

export default reducer;