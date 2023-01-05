import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { notActiveOrders} from "../Redux/Actions/UserFilterOrders";
import { NavLink,useLocation } from "react-router-dom";
import { acceptUserorderNow, desableOrderNow, getOrderInfoById } from "../Redux/Actions/usersOrdersActions";
import UORItable from "../components/usersorders/UORItable";
import { CLEARUSERORDERINFO } from "../Redux/constants/usersOrderContent";

function UserOrderInfoPage() {
  const admin = useSelector((state) => state.admin);
  const usersorders = useSelector((state) => state.usersorders);
  const [filterState,setFilterState] = useState('')
  const [meteg,setMeterg] = useState(true)

  let location = useLocation();


  const dispatch = useDispatch();

  useEffect(()=>{
    setMeterg(true)

getget()
  },[location.state.id])

  function getget(){

    // לעשות קליר להזמנות 
    dispatch({type:CLEARUSERORDERINFO})

    
    dispatch(getOrderInfoById(location.state.id))
  }

  function acceptOrder(e){
    setMeterg(false)
    
    dispatch(acceptUserorderNow(location.state.id))

  }

  function desableOrders(){
    dispatch(desableOrderNow(location.state.id))
  }


  



  


    return (
      <div className="flexcol ">
        <h1>  {location.state.id}      פירוט הזמנה</h1>




<UORItable list={usersorders.user_order_ifo_page}/>

{usersorders.user_order_ifo_page.length > 0 ?
  <div className="f">

<div className=" גראך">
  <h4>הערות לקוח</h4>
{usersorders.user_order_ifo_page[0].text}
</div>
 
  <div>
    {usersorders.user_order_ifo_page[0].active == null ?
    <h2>ההזמנה בוטלה</h2>
    :
    <div>
    {meteg && usersorders.user_order_ifo_page[0].uptofiftin == 1? 

<div className="f">
'מעל 15 איש ' 
<button onClick={acceptOrder} >אישור הזמנה</button>
<button onClick={desableOrders} >ביטול הזמנה</button>

</div>
 
    
    : ""}

  </div>}
  </div>
  </div> 
 :"" }
   
 
  
      
      </div>
    );
  }
  
  export default UserOrderInfoPage;
  