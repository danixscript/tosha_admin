import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import ProductCard from "../components/adminproduct/ProductCard";
import { activeProductNow, DeactiveProductNow, setMinNow, setPriceNow, setProdQuantityNow, setSingleProductNow } from "../Redux/Actions/adminProductActions";

function ProductPage(props) {
  const dispatch = useDispatch();
  const adminProduct = useSelector((state) => state.adminproducts);
  let location = useLocation();
  const [priceState,setPriceState] = useState(0)
  const [minState,setMinState] = useState(0)
  const [amountState,setAmountState] = useState(0)

  function getPrice(e){
    let intnum = parseInt(e.target.value)
    setPriceState(intnum)

  }

  function getAmountin(e){
    let intnum = parseInt(e.target.value)
    setAmountState(intnum)

  }



  function setProductQuantity(){
dispatch(setProdQuantityNow({quantity:amountState,product:location.state.product}))
  }
  function getMinMin(e){
    let intnum = parseInt(e.target.value)
    setMinState(intnum)

  }
  useEffect(()=>{
    setAmountState(0)
    setMinState(0)
    setPriceState(0)
    setSingler()
  },[])

  function setSingler(){
    
    dispatch(setSingleProductNow( location.state.product))


  }


  function removeItemFromDisplay(e){
    dispatch(DeactiveProductNow(e))
        }

        

  function activeProductHere(e){

    dispatch(activeProductNow(e))

  }

  function setPrice(){
      let obj = {
        product: location.state.product,
        newprice:priceState
      }
    dispatch(setPriceNow(obj))
  }
  function setMin(){
    let obj = {
      product: location.state.product,
      newmin:minState
    }
  dispatch(setMinNow(obj))
}
  return (
    <div className="App">
      <h1>מוצר {location.state.product.itemname}</h1>
      <ProductCard setProductQuantity={setProductQuantity} getAmountin={getAmountin} removeItemFromDisplay={removeItemFromDisplay} activeProductHere={activeProductHere} setMin={setMin} getMinMin={getMinMin} getPrice={getPrice} setPrice={setPrice} product={adminProduct.singleProduct} />
   
    </div>
  );
} 

export default ProductPage;
