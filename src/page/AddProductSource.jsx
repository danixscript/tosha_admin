import AddProductSourceForm from "../components/AddProductSourceForm";
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {useFormik} from "formik"
import { getAllProviders } from "../Redux/Actions/providerActions";
import { useLocation } from "react-router-dom";
import ProductSoursList from "../components/ProductSoursList";
import { addProductSource, getProductsSource, removeProductNow } from "../Redux/Actions/productSourceAction";

function AddProductSource() {
    const dispatch = useDispatch();
    const providers = useSelector((state) => state.providers);
    const admin = useSelector((state) => state.admin);
    const productSource = useSelector((state) => state.productSource);
    let location = useLocation();
   




    useEffect(()=>{
      dispatch(getProductsSource())
        dispatch(getAllProviders())
        
          },[])


          
  const addProduct = useFormik({
    initialValues:{
      name: "",
      productimg:'',
      providersid:location.state.id || "",
      price: 0,
      permissions:admin.admin.permissions,
      producttype:"material"
  },onSubmit:async values  => {
    try{
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
    <h1>הוסף מוצר {location.state.name}</h1>
    {providers.providers.length > 0?
       <AddProductSourceForm addProduct={addProduct} options={providers.providers} />
    :"אתה צריך להוסיף ספקים לפני שאתה מוסיף מוצרים של ספקים"}
      <br />
      <ProductSoursList removeProduct={removeProduct} permissions={admin.admin.permissions} list={productSource.products}/>
      </div>
    );
  }
  
  export default AddProductSource;
  