import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { getAllAdminOrders, getOrderInfo } from "../Redux/Actions/adminOrderActions";
import { NavLink, useLocation } from "react-router-dom";
import OrderInfo from "../components/admincart/OrderInfo";

function AdminOrderInfo() {
  const admin = useSelector((state) => state.admin);
  const adminorder = useSelector((state) => state.adminorder);
  const dispatch = useDispatch();
  let location = useLocation();

 
  useEffect(()=>{
    dispatch(getOrderInfo(location.state.orderid))
  },[])
    return (
      <div className="App">
        <NavLink to='/adminorders'>חזרה להזמנות</NavLink>
        <br />
        <NavLink to='/notactiveorders'>חזרה להזמנות לא מאושרות</NavLink>

        <h1>פירוט הזמנה נוכחית</h1>
        {adminorder.orderinfo.length > 0 ? 
        <div className="f">
          {/* <OrdersAcordeon list={adminorder.orders}/> */}
          <OrderInfo list={adminorder.orderinfo} />
          {/* <TableForAll list={adminorder.orders}/> */}
        {location.state.totalprice?
        <h1>  
        סך כל ההזמנה {location.state.totalprice}     שח    
      </h1>
      :""}
        </div>
      :'no orders yet'}
      
      </div>
    );
  }
  
  export default AdminOrderInfo;
  