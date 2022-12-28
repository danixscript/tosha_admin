import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import MaterialCard from "../components/materials/MaterialCard";
import { setMinimumMaterial, setQuantityMaterial, setSingleMaterialNow } from "../Redux/Actions/MaterialsAction";

function SingleMaterialPage(props) {
  const dispatch = useDispatch();
  const adminmaterials = useSelector((state) => state.materials);
  let location = useLocation();
  const [minState,setMinState] = useState(0)
  const [quantityState,setquantityState] = useState(0)

  function getQuantity(e){
    let intnum = parseInt(e.target.value)
    setquantityState(intnum)

  }
  function getMinMin(e){
    let intnum = parseInt(e.target.value)
    setMinState(intnum)

  }
  useEffect(()=>{
    setSingler()
  },[])

  function setSingler(){
    
    dispatch(setSingleMaterialNow( location.state.product))
  }

  function updateQuantity(){
    let obj = {
      product: location.state.product,
      quantity:quantityState
    }
  dispatch(setQuantityMaterial(obj))
}


  function setMin(){
    let obj = {
      product: location.state.product,
      newmin:minState
    }
  dispatch(setMinimumMaterial(obj))
}
  return (
    <div className="App">
      <h1>חומר גלם {location.state.product.itemname}</h1>
      <MaterialCard setMin={setMin} getMinMin={getMinMin} getQuantity={getQuantity} updateQuantity={updateQuantity}  product={adminmaterials.singleMaterial} />
   
    </div>
  );
} 

export default SingleMaterialPage;
