import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { notActiveOrders} from "../Redux/Actions/UserFilterOrders";
import { NavLink,useLocation } from "react-router-dom";
import { acceptUserorderNow, desableOrderNow, getOrderInfoById } from "../Redux/Actions/usersOrdersActions";

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
      <div className="flexcol center">
        <h1>  {location.state.id}      פירוט הזמנה</h1>

<div className="orderInfo ">
    {usersorders.user_order_ifo_page.map((e)=>{
      
        return(
            <div className="flexrow ber orderadminuser w100">
             <div>
              מספר:
             {e.orderinfoid} 
             </div>
                <div>
                  מחיר
                {e.userproductprice}
                </div>
                <div>
                  כמות:
                {e.userproductquantity}
                </div>

                <div>
                  סוג הזמנה:
                {e.ordertype}
                </div>
                <div className="minmaxc"> 
                  <img src={e.userproductimg} alt="" className="img imgor" />
                </div>

               
            </div>
        )
    })}
  {usersorders.user_order_ifo_page.length > 0 ?
  <div className="f">
 
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
   
 
  
      
      </div>
    );
  }
  
  export default UserOrderInfoPage;
  