import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsSource,
  searchProductsSource,
} from "../Redux/Actions/productSourceAction";
import ProductList from "../components/products/ProductList";
import NavChick from "../components/products/AppBar";
import {
  addItemToAdminCart,
  buyNowNow,
  changeAmountNow,
  clearCartNow,
  removeProductFromCartNow,
  setProductCart,
} from "../Redux/Actions/adminCartAction";
import AdminCartTable from "../components/admincart/AdminCartTable";
import { NavLink } from "react-router-dom";
import ButtonEr from "../components/buttons/ButtonEr";
import PayButton from "../components/buttons/PayButton";
function CartScreen() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);
  const cart = useSelector((state) => state.admincart);
  const productSource = useSelector((state) => state.productSource);


  


  function removeProductFromCart(e) {
 
    dispatch(removeProductFromCartNow(e));
  }
function changeAmount(e,ele){
  e.amount = ele.target.value
  dispatch(changeAmountNow(e))
}

  function cleanCart() {
    dispatch(clearCartNow());
  }

  function buyNow(e){
    let obj = {
      admin:admin.admin,
      products:cart.cartItems,
      total:cart.total,
      providerid:cart.cartItems[0].providersid,
      providername:productSource.providername,

    }
    dispatch(buyNowNow(obj))
  }
 
  function searchFromCart(e) {
    dispatch(searchProductsSource(e.target.value));
  }

  return (
    <div className="App">
           <NavLink className={'providerbuton flexcol '} to={'/productlist'} state={{providerid:cart.cartItems[0].providersid,stillOrder:false}} >חזרה לתפריט קניה</NavLink>

      <br /> 
      <h1>עגלת הקניות שלך מוכנה צא לדרך</h1>
      <br /> <br /> <br />
<ButtonEr text='רוקן את כל העגלה' func={cleanCart} />
<div className="maxh200">
<AdminCartTable changeAmount={changeAmount} removeProductFromCart={removeProductFromCart} permissions={admin.admin.permissions} list={cart.cartItems}/>
</div>     <br />
     <PayButton func={buyNow} text={cart.total +" שלם וקנה עכשיו"} />
     
      {/* <ProductList
        getSum={getSum}
        addProduct={addProduct}
        list={cart.cartItems}
      /> */}
    </div>
  );
}

export default CartScreen;
