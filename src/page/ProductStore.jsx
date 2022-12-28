import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductSourceByProvider,
  getProductsSource,
  searchProductsSource,
} from "../Redux/Actions/productSourceAction";
import ProductList from "../components/products/ProductList";
import NavChick from "../components/products/AppBar";
import {
  addItemToAdminCart,
  setProductCart,
} from "../Redux/Actions/adminCartAction";
import { NavLink, useLocation } from "react-router-dom";
import { CLEAR_CART } from "../Redux/constants/adminCartContent";
import { CLEAR_STORE_PRODUCTS } from "../Redux/constants/productSourceContent";

function ProductStore() {
  const dispatch = useDispatch();
  const productSource = useSelector((state) => state.productSource);
  const cart = useSelector((state) => state.admincart);
  let location = useLocation();

  useEffect(() => {
    if(location.state.stillOrder){
        dispatch({type:CLEAR_CART})
    }
  
    dispatch({type:CLEAR_STORE_PRODUCTS})
   if(location.state){
    dispatch(getProductSourceByProvider(location.state.providerid));
   }
    dispatch(setProductCart());
  }, []);

  function addProduct(e,b) {
    e.amount = b;
    dispatch(addItemToAdminCart(e));
  }


  function search(e) {
    dispatch(searchProductsSource({text:e.target.value,id:location.state.providerid}));
  }

  return (
    <div className="App">
      <NavChick cart={cart} search={search} />
      <br />
      <h1>כאן תוכל לקנות מוצרים מ <span className="compenyname">{productSource.providername}</span></h1>
      <br /> <br /> <br />
      <ProductList
       
        addProduct={addProduct}
        list={productSource.products}
      />
    </div> 
  );
}

export default ProductStore;
