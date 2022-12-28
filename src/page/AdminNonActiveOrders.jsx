import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { acceptOrderNow, deleteOrderNow, getAllNotActiveOrder } from "../Redux/Actions/adminOrderActions";
import { NavLink, useLocation } from "react-router-dom";
import NonActiveTable from "../components/admincart/NonActiveTable";

function AdminNonActiveOrders() {
  const admin = useSelector((state) => state.admin);
  const adminorder = useSelector((state) => state.adminorder);
  const dispatch = useDispatch();
  let location = useLocation();


 
  useEffect(()=>{
    dispatch(getAllNotActiveOrder())
  },[])


  function deleteOrder(e){
    dispatch(deleteOrderNow(e.adminorderid))

  }
  function acceptOrder(e){
    dispatch(acceptOrderNow(e.adminorderid))
  }


    return (
      <div className="App">
        <h1>הזמנות לא מאושרות</h1>
        <br />
        <NavLink to='/adminorders'>חזרה להזמנות</NavLink>
<br />
        {adminorder.activeorders.length > 0 ? 
        <div className="f">
          <NonActiveTable acceptOrder={acceptOrder} deleteOrder={deleteOrder} list={adminorder.activeorders}/>
         
        </div>
      :
      <h1 className="h1">אין כרגע הזמנות שלא אישרת העמוד הזה ריק</h1>
      }
      
      </div>
    );
  }
  
  export default AdminNonActiveOrders;
  