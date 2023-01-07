import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { getAllAdminOrders, getCheepOrderN, getExpensiveOrderN, getNotActiveOrdersNow, getOrderByDate } from "../Redux/Actions/adminOrderActions";
import OrdersAcordeon from "../components/admincart/OrdersAcordeon";
import { NavLink } from "react-router-dom";
import OrdersAppBar from "../components/startappbars/OrdersAppBar";

function AdminOrdersScreen() {
  const admin = useSelector((state) => state.admin);
  const adminorder = useSelector((state) => state.adminorder);
  const [filterState,setFilterState] = useState('')


  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(getAllAdminOrders())
  },[])


  function filterCase(e){
    setFilterState(e.target.value)
    switch(e.target.value) {
      case 'expensive':
       dispatch(getExpensiveOrderN())
        break;
      case 'cheep':
        dispatch(getCheepOrderN())
        break;
        case 'new':
          dispatch(getOrderByDate())
          break;
          case 'notactive':
            dispatch(getNotActiveOrdersNow())
            break;

        
        
      default:
        // code block
    }
  



  }




    return (
      <div className="App">
      <h1>הזמנות מספקים</h1>
        <OrdersAppBar filter={filterState} filterCase={filterCase} />
        <br />
        {/* <NavLink to='/notactiveorders' > להזמנות לא מאושרות</NavLink> */}
<br />
        {adminorder.orders.length > 0 ? 
        <div className="f">
          <OrdersAcordeon list={adminorder.orders}/>
          
          {/* <TableForAll list={adminorder.orders}/> */}
        </div>
      :      <h1 className="h1">   לא ביצעת הזמנות עדין העמוד הזה ריק    </h1>
    }
      
      </div>
    );
  }
  
  export default AdminOrdersScreen;
  