import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { deleteProductnow, getAllProductStore, searchAllProductStore } from "../Redux/Actions/adminProductActions";
import AdminProductTable from "../components/adminproduct/AdminProductTable";
import Appbar from "../components/adminproduct/Appbar";
import { cheepProduct, expensiveProduct, getFinishedProducts, notActiveProducts } from "../Redux/Actions/filterActions";
import ActiveProductTable from "../components/adminproduct/ActiveProductTable";

function AdminProducts() {
  const admin = useSelector((state) => state.admin);
  const myproducts = useSelector((state) => state.adminproducts);


  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllProductStore())
  },[])

  function searchFor(e){
    dispatch(searchAllProductStore(e.target.value))

  }

  function deleteProduct(e){

    dispatch(deleteProductnow(e.id))

  }



  function filterCase(e){

    switch(e.target.value) {
      case 'expensive':
       dispatch(expensiveProduct())
        break;
      case 'cheep':
        dispatch(cheepProduct())
        break;
        case 'finished':
          dispatch(getFinishedProducts())
          break;
          case 'almost':
            // code block
            break;
            case 'nonactive':
              dispatch(notActiveProducts())
              break;
          
          
      default:
        // code block
    }
  



  }
  
    return (
      <div className="App">
        <h1>  כל המוצרים שלי</h1>
        {admin.admin.permissions == 1 ? 
        <div className="colorwhite">
          <NavLink to={'/addproducttomytable'} >הוסף</NavLink> +
        </div>
        :''}
        <br />
        <Appbar filterCase={filterCase} search={searchFor} />
<AdminProductTable  permissions={admin.admin.permissions} deleteProduct={deleteProduct}  list={myproducts.myproducts}/>
<br />  
{/* <h1>    מוצרים שאישרתי לחנות</h1> 

<ActiveProductTable permissions={admin.admin.permissions} deleteProduct={deleteProduct}  list={myproducts.myActiveProducts}/> */}


      </div>
    );
  }
  
  export default AdminProducts;
  