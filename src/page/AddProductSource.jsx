import AddProductSourceForm from "../components/AddProductSourceForm";
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {useFormik} from "formik"
import { getAllProviders } from "../Redux/Actions/providerActions";
import { useLocation } from "react-router-dom";
import ProductSoursList from "../components/ProductSoursList";
import { addProductSource, getProductsSource, removeProductNow } from "../Redux/Actions/productSourceAction";
import { START_LOAD, STOP_LOAD } from "../Redux/constants/loaderConstant.js";

function AddProductSource() {
    const dispatch = useDispatch();
    const providers = useSelector((state) => state.providers);
    const admin = useSelector((state) => state.admin);
    const productSource = useSelector((state) => state.productSource);
    const Loader = useSelector((state) => state.Loader);

    let location = useLocation();
   




    useEffect(()=>{
      dispatch({type:STOP_LOAD})
      dispatch(getProductsSource(location.state.id))
        dispatch(getAllProviders())
        
          },[])

        


          
  const addProduct = useFormik({
    initialValues:{
      name: "",
      productimg:'',
      providersid:location.state.id || "",
      price: 0,
      permissions:admin.admin.permissions,
      providername:location.state.name,
      producttype:"material"
  },onSubmit:async values  => {
    try{
      dispatch({type:START_LOAD})
       dispatch(addProductSource(values))
 
    }catch(e){
      console.log(e)
    }
  }});

  function removeProduct(e){
    e.permissions = admin.admin.permissions;

    dispatch(removeProductNow(e))

  }



    return (
      <div className="App">
    <h1>הוסף מוצר {location.state.name  }</h1>
{Loader.Loader?
<h4>טוען...</h4>
:
<div>
{providers.providers.length > 0?
     <AddProductSourceForm addProduct={addProduct} options={providers.providers} />
  :"אתה צריך להוסיף ספקים לפני שאתה מוסיף מוצרים של ספקים"}
</div>}
      <br />
      <h1>המוצרים של ספק : {location.state.name}</h1> 
   
    
      
      <ProductSoursList removeProduct={removeProduct} permissions={admin.admin.permissions} list={productSource.products}/>

      
      </div>
    );
  } 
  
  export default AddProductSource;
  