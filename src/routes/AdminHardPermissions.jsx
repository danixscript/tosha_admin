import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {useSelector} from "react-redux";

const AdminHardPermissions = () => {
    
const admin =  useSelector((state)=>state.admin);

    const auth = null; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return admin.isLog && admin.admin.permissions == 1 ? <Outlet /> : <Navigate to="/home" />;
}




export default AdminHardPermissions 



