import AddProductSourceForm from "../components/AddProductSourceForm";
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {useFormik} from "formik"
import { useLocation } from "react-router-dom";
import { addMaterialMenualy } from "../Redux/Actions/MaterialsAction";

import AddMaterialForm from "../components/materials/AddMaterialForm";


function AddMaterialPage() {
    const dispatch = useDispatch();
    const admin = useSelector((state) => state.admin);
    const productSource = useSelector((state) => state.productSource);
    let location = useLocation();
   
                
        const addProductToMyTableOnFormik = useFormik({
            initialValues:{
            materialsourceid: undefined,
            materialname:'',
            materialproviderid:0,
            providername: 'my self',
            minimum:0,
            quantity:0,
            materialcoast:'לא עודכן',
            place:0,
            materialimg:'',
        },onSubmit:async values  => {
            try{
          dispatch(addMaterialMenualy(values))
                
            }catch(e){
            console.log(e)
            }
        }});

   

 

    return (
      <div className="App">
    <h1>הוסף חומר גלם </h1>
   
       <AddMaterialForm addProductToMyTableOnFormik={addProductToMyTableOnFormik}  />
   
      <br />
  
      </div>
    );
  }
  
  export default AddMaterialPage;
  