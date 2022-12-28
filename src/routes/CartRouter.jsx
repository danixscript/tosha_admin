import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {useSelector} from "react-redux";

const CartRouter = () => {
    
const cart =  useSelector((state)=>state.admincart);
    const auth = null; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return cart.cartItems.length > 0 ? <Outlet /> : <Navigate to="/orderbyprovider" />;
}




export default CartRouter 



