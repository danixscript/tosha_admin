import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import AdminProductTable from "../components/adminproduct/AdminProductTable";
import Appbar from "../components/adminproduct/Appbar";

import { deleteMaterialNow, getAllMaterialsStore, searchAllMaterialsStore } from "../Redux/Actions/MaterialsAction";
import { CLEAR_MATERIALS_STATE } from "../Redux/constants/adminMaterialContent";
import AdminMaterialTable from "../components/materials/AdminMaterialTable";
import { almostFinished, expensiveMaterial, itFinished } from "../Redux/Actions/filterActions";

function AdminMaterialScreen() {
  const admin = useSelector((state) => state.admin);
  const adminmaterials = useSelector((state) => state.materials);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type:CLEAR_MATERIALS_STATE})
    dispatch(getAllMaterialsStore());
  }, []);

  function searchFor(e) {
    dispatch(searchAllMaterialsStore(e.target.value));
  }

  function deleteProduct(e) {
    dispatch(deleteMaterialNow(e.materialid));
  }

  function filterCase(e) {
    switch (e.target.value) {
      case "expensive":
        dispatch(expensiveMaterial());
        break;
      case "cheep":
        
        break;
      case "finished":
       dispatch(itFinished())
        break;
      case "almostfinished":
      dispatch(almostFinished())
        break;
   

      default:
      // code block
    }
  }

  return (
    <div className="App">
      <h1> כל חומרי הגלם שלי</h1>
<NavLink to={'/addmaterial'}>הוסף חומר גלם</NavLink>
      <Appbar filterCase={filterCase}  search={searchFor} />
      <AdminMaterialTable
        permissions={admin.admin.permissions}
        deleteProduct={deleteProduct}
        list={adminmaterials.myMaterial}
      />
      <br />

      {/* <h1>    מוצרים שאישרתי לחנות</h1>

<ActiveProductTable permissions={admin.admin.permissions} deleteProduct={deleteProduct}  list={myproducts.myproducts}/> */}
    </div>
  );
}

export default AdminMaterialScreen;
