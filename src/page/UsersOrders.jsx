import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { notActiveOrders, notActiveProducts,gelAllUsersOrder } from "../Redux/Actions/UserFilterOrders";
import OrdersAcordeon from "../components/admincart/OrdersAcordeon";
import { NavLink } from "react-router-dom";
import OrdersAppBar from "../components/startappbars/OrdersAppBar";
import UsersOrdersTable from "../components/usersorders/UsersOrdersTable";

function UsersOrders() {
  const admin = useSelector((state) => state.admin);
  const usersorders = useSelector((state) => state.usersorders);
  const [filterState,setFilterState] = useState('')


  const dispatch = useDispatch();



  useEffect(()=>{
getget()
  },[])

  function getget(){

    // לעשות קליר להזמנות 


    dispatch(gelAllUsersOrder())
  }


  function filterCase(e){
    setFilterState(e.target.value)
    switch(e.target.value) {
      case 'expensive':
        break;
      case 'cheep':
        break;
        case 'new':
          break;
          case 'notactive':
            dispatch(notActiveOrders())
            break;

        
        
      default:
        // code block
    }
  



  }



    return (
      <div className="flexcol center">
        <h1>    כל ההזמנות שנעשו מהאתר שלי</h1>
  <div className="w100">
   <UsersOrdersTable list={usersorders.userOrders}/>
       

  </div>
  
      
      </div>
    );
  }
  
  export default UsersOrders;
  