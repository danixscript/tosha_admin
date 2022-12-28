import "./App.css";
import NavRoute from "./navbar/NavRoute";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { adminLogin, stillConnected } from "./Redux/Actions/adminAction";
import BadAlert from "./components/BadAlert";
import GoodAlert from "./components/GoodAlert";
import { closePopUpNow, checkOrders } from "./Redux/Actions/adminOrderActions";
import { NavLink } from "react-router-dom";
import { clearErrState } from "./Redux/Actions/errAction";

function App() {
  const dispatch = useDispatch();
  const err = useSelector((state) => state.err);
  const orders = useSelector((state) => state.adminorder);
  const admin = useSelector((state) => state.admin);
  const popupTime = useSelector((state) => state.err);
  const usersorder = useSelector((state) => state.usersorders);
  const alertstable =useSelector((state) => state.alertstable);


  useEffect(() => {
    dispatch(stillConnected());
  }, []);

  useEffect(() => {
    const intervalCall = setInterval(() => {
      newOrders();
    }, 15000);
    return () => { 
      // clean up
      clearInterval(intervalCall);
    };
  }, [admin.isLog]);



  function newOrders() {
    let a = admin.isLog;
    if (a) {
      dispatch(checkOrders());
    }
  }
  function closePopUp() {
    dispatch(closePopUpNow());
  }
  function closeErrStates() {
    dispatch(clearErrState());
  }
  return (
    <div className="">
      <div className="">
        <NavRoute />
      </div>

      <div className="positionerr flexcol">
        {usersorder.active_Users_orders && admin.isLog ? (
          <div className="usernotactiveorder">  
            <h1>  הזמנות חדשות מלקוחות</h1>
            {usersorder.notactive_users_orders_array.map((e)=>{
              return(
                <NavLink to={'/userorderinfo'} state={{id:e.id}}>הזמנה מספר {e.id}</NavLink>
              )
            })}
          </div>
        ) : (
          "" 
        )}

        {orders.active_orders && admin.isLog ? (
          <div className="popupfix">
            <div className="squerpopup flexrow center ">
              <div className="h100 w100  flexrow center">

                <div className="h100 w100  paddmsg">
                  <h1>
                    {" "}
                    <NavLink to="/notactiveorders">
                      ישנם {orders.activeorders.length} הזמנות לא מאושרות מספק
                    </NavLink>
                  </h1>
                </div>
                <button onClick={closePopUp}>סגור</button>

              </div> 
            </div>
          </div>
        ) : (
          ""
        )}

{alertstable.finished_product_orMaterial && admin.isLog ? (
          <div className="popupfix2">
           ישנם חוסרים במלאי
          </div>
        ) : (
          ""
        )}


    
      </div>
      <div className="errposition">
      {err.active_message ? (
          <div className="w">
            <button onClick={closeErrStates}>X</button>
            {err.type == "bad" ? (
              <BadAlert text={err.msg} />
            ) : (
              <GoodAlert text={err.msg} />
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
