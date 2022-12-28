import { Routes, NavLink, Route, Router } from "react-router-dom";
import { useState } from "react";
import './nav.css'
import '../App.css'
import {useSelector,useDispatch} from "react-redux";


function Navbar(props) {
  const admin =  useSelector((state)=>state.admin);

  return (
    <div className="navPosition navInsideNav h100  bc">
     <div className="h100 flexcol center">
      {admin.isLog ? 

    <div className="activelinks flexcol  h100 ">
   <div className="flexcol adminInfo ">
    <h4>אתה כרגע מחובר</h4>
        <div>
       שלום לך :  {admin.admin.name }
        </div>
          <div className={admin.admin.permissions == 1 ? 'permisiions' : 'notper'}>
          {admin.admin.permissions == 1 ? 'מנהל מורשה ': 'עובד כללי'}
          </div>

          <button className="logout" onClick={props.logout}>התנתק</button>

   </div>

    
      <div className="flexcol w100">
      <NavLink className={'linkInNav'} to={{pathname:'/'}} >דף הבית</NavLink>
      <NavLink className={'linkInNav'} to={{pathname:'/usersorders'}} > הזמנות של לקוחות</NavLink>

      

      <NavLink className={'linkInNav'} to={{pathname:'/profile'}} >פרופיל</NavLink>
       {/* <NavLink className={'linkInNav'} to={{pathname:'/productlist'}} >  הזמנה חדשה</NavLink> */}
       <NavLink className={'linkInNav'} to={{pathname:'/orderbyprovider'}} >  הזמנה חדשה</NavLink>
       <NavLink className={'linkInNav'} to={{pathname:'/adminorders'}} > הזמנות </NavLink>
       <NavLink className={'linkInNav'} to={{pathname:'/adminproduct'}} >  המוצרים שלי </NavLink>
       <NavLink className={'linkInNav'} to={{pathname:'/adminmaterials'}} >  חומרי הגלם שלי </NavLink>


      </div>
    
   
        {admin.admin.permissions ? 
      <div className="flexcol   ">
        
            <NavLink className={'linkInNavManeger'} to={{pathname:'/addprovider'}} >ניהול ספקים</NavLink>
            <NavLink className={'linkInNavManeger'} to={{pathname:'/registeremployee'}} >ניהול עובדים </NavLink>
            <NavLink className={'linkInNavManeger'} to={{pathname:'/addproductsource'}}state={{name:'כללי',id:undefined}} >הוסף מוצרים כללי </NavLink>
            <NavLink className={'linkInNavManeger'} to={{pathname:'/usersscreen'}} >ניהול לקוחות </NavLink>

            

      </div>
    :""}
   
    </div>  
   :    
<div className="">
<h4>  התחבר כדי לגשת למידע</h4>

<NavLink to={{pathname:'/login'}} >התחבר</NavLink>
</div>
  }
     
     </div>

    </div>
  );
}

export default Navbar;
