import AddProductSourceForm from "../components/AddProductSourceForm";
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {useFormik} from "formik"
import { useLocation } from "react-router-dom";
import { addProductToTableMenual } from "../Redux/Actions/adminProductActions";
import AddToMyTableForm from "../components/adminproduct/AddToMyTableForm";


function AddProductToMyProduct() {
    const dispatch = useDispatch();
    const admin = useSelector((state) => state.admin);
    const productSource = useSelector((state) => state.productSource);
    let location = useLocation();
   
                
        const addProductToMyTableOnFormik = useFormik({
            initialValues:{
            idproduct: undefined,
            itemname:'',
            idprovider:'my self',
            price: 0,
            minimum:0,
            quantity:0,
            place:'לא עודכן',
            active:0,
            productimg:'',
            producttype:'מתוקים'
        },onSubmit:async values  => {
            try{
          dispatch(addProductToTableMenual(values))
                
            }catch(e){
            console.log(e)
            }
        }});

   

 

    return (
      <div className="App">
    <h1>הוסף מוצר </h1>
   
       <AddToMyTableForm addProductToMyTableOnFormik={addProductToMyTableOnFormik}  />
   
      <br />
  
      </div>
    );
  }
  
  export default AddProductToMyProduct;
  