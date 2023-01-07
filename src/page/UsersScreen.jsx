import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { notActiveOrders, notActiveProducts,gelAllUsersOrder } from "../Redux/Actions/UserFilterOrders";
import OrdersAcordeon from "../components/admincart/OrdersAcordeon";
import { NavLink } from "react-router-dom";
import axiosConfig from "../config/AxiosConfig";
import UsersTable from "../components/admingetsallusers/UsersTable";
import { bandUserNow, getAllUsers, removeUserNow, unbandUserNow } from "../Redux/Actions/usersAction";

function UsersScreen() {
  const admin = useSelector((state) => state.admin);
  const usersRed = useSelector((state) => state.users);

  const dispatch = useDispatch()

  useEffect(()=>{
getAll()
  },[])

function getAll(){
    dispatch(getAllUsers())
}

function bandUser(e){
    dispatch(bandUserNow({userid:e,permissions:admin.admin.permissions}))
}
function unBandUser(e){
  console.log('fsdahjkjhjggd')
  dispatch(unbandUserNow({userid:e,permissions:admin.admin.permissions}))
}

function removeUser(e){
    dispatch(removeUserNow(e))
}



    return (
      <div className="flexcol center">
        <h1>ניהול לקוחות</h1>
      <UsersTable unBandUser={unBandUser}  removeUser={removeUser} bandUser={bandUser} permissions={admin.admin.permissions} list={usersRed.users}/>

  
      
      </div>
    );
  }
  
  export default UsersScreen;
  