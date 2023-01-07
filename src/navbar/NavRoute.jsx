import { Routes, NavLink, Route, Router } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../page/Home";
import LoginAdmin from "../page/LoginAdmin";
import PrivateRoute from "../routes/PrivateRout";
import AdminHardPermissions from "../routes/AdminHardPermissions";
import { useDispatch, useSelector } from "react-redux";

import AddProvider from "../page/AddProvider";
import RegisterEmployee from "../page/RegisterEmployee";
import AddProvidersProducts from "../page/AddProvidersProducts";
import {  adminloguot } from "../Redux/Actions/adminAction";
import AddProductSource from "../page/AddProductSource";
import ProductStore from "../page/ProductStore";
import CartScreen from "../page/CartScreen";
import CartRouter from "../routes/CartRouter";
import AdminOrdersScreen from "../page/AdminOrdersScreen";
import AdminOrderInfo from "../page/AdminOrderInfo";
import AdminNonActiveOrders from "../page/AdminNonActiveOrders";
import AdminProducts from "../page/AdminProducts";
import ProductPage from "../page/ProductPage";
import ProfileScreen from "../page/ProfileScreen";
import ProviderOrder from "../page/ProviderOrder";
import ProductsSoursByProvider from "../page/ProductsSoursByProvider";
import AdminMaterialScreen from "../page/AdminMaterialScreen";
import SingleMaterialPage from "../page/SingleMaterialPage";
import AddProductToMyProduct from "../page/AddProductToMyProduct";
import UsersOrders from "../page/UsersOrders";
import UserOrderInfoPage from "../page/UserOrderInfoPage";
import AddMaterialPage from "../page/AddMaterialPage";
import UsersScreen from "../page/UsersScreen";
import ProvidersInfoPage from "../page/ProvidersInfoPage";
import UserInfoScreen from "../page/UserInfoScreen";



function NavRoute() {
  const dispatch = useDispatch();

  function logout(){
dispatch(adminloguot())
  }
  return (
    <div className="flexrow theAllDiv">
      
      <div className="navAllBar navRoutDiv">
        <Navbar logout={logout}/>

      </div>

<div className="allpagesdiv">
<Routes>
<Route path="/login" element={<LoginAdmin/>} exact/>

<Route path="/" element={ <PrivateRoute />} exact> 
<Route path="/" element={<Home/>} exact/>
</Route>
<Route path="/cart" element={ <CartRouter />} exact> 
<Route path="/cart" element={<CartScreen/>} exact/>
</Route>
<Route path="/productlist" element={ <PrivateRoute />} exact> 
<Route path="/productlist" element={<ProductStore/>} exact/>
</Route>

<Route path="/adminorders" element={ <PrivateRoute />} exact> 
<Route path="/adminorders" element={<AdminOrdersScreen/>} exact/>
</Route>


<Route path="/notactiveorders" element={ <PrivateRoute />} exact> 
<Route path="/notactiveorders" element={<AdminNonActiveOrders/>} exact/>
</Route>
<Route path="/adminproduct" element={ <PrivateRoute />} exact> 
<Route path="/adminproduct" element={<AdminProducts/>} exact/>
</Route>

<Route path="/adminmaterials" element={ <PrivateRoute />} exact> 
<Route path="/adminmaterials" element={<AdminMaterialScreen />} exact/>
</Route>
<Route path="/productpage" element={ <PrivateRoute />} exact> 
<Route path="/productpage" element={<ProductPage/>} exact/>
</Route>



<Route path="/userinfi" element={ <PrivateRoute />} exact> 
<Route path="/userinfi" element={<UserInfoScreen/>} exact/>
</Route>

<Route path="/providerinfo" element={ <PrivateRoute />} exact> 
<Route path="/providerinfo" element={<ProvidersInfoPage/>} exact/>
</Route>
<Route path="/orderinfo" element={ <PrivateRoute />} exact> 
<Route path="/orderinfo" element={<AdminOrderInfo/>} exact/>
</Route>
<Route path="/materialpage" element={ <PrivateRoute />} exact> 
<Route path="/materialpage" element={<SingleMaterialPage/>} exact/>
</Route>

<Route path="/orderbyprovider" element={ <PrivateRoute />} exact> 
<Route path="/orderbyprovider" element={<ProviderOrder/>} exact/>
</Route>
<Route path="/userorderinfo" element={ <PrivateRoute />} exact> 
<Route path="/userorderinfo" element={<UserOrderInfoPage/>} exact/>
</Route>
<Route path="/usersorders" element={ <PrivateRoute />} exact> 
<Route path="/usersorders" element={<UsersOrders/>} exact/>
</Route>


<Route path="/usersscreen" element={ <AdminHardPermissions />} exact> 
<Route path="/usersscreen" element={<UsersScreen/>} exact/>
</Route>
<Route path="/profile" element={ <AdminHardPermissions />} exact> 
<Route path="/profile" element={<ProfileScreen/>} exact/>
</Route>

<Route path="/addprovider" element={ <AdminHardPermissions />} exact> 
<Route path="/addprovider" element={<AddProvider/>} exact/>
</Route>
<Route path="/addproductsource" element={ <AdminHardPermissions />} exact> 
<Route path="/addproductsource" element={<AddProductSource/>} exact/>
</Route>
<Route path="/registeremployee" element={ <AdminHardPermissions />} exact> 
<Route path="/registeremployee" element={<RegisterEmployee/>} exact/>
</Route>
<Route path="/addprovidersproduct" element={ <AdminHardPermissions />} exact> 
<Route path="/addprovidersproduct" element={<AddProvidersProducts/>} exact/>
</Route>
<Route path="/addproducttomytable" element={ <AdminHardPermissions />} exact> 
<Route path="/addproducttomytable" element={<AddProductToMyProduct/>} exact/>
</Route>
<Route path="/addmaterial" element={ <AdminHardPermissions />} exact> 
<Route path="/addmaterial" element={<AddMaterialPage/>} exact/>
</Route>
<Route path="/*" element={<LoginAdmin/>} exact/>




{/* 
<Route path="/users" element={ <PrivateRoute />} exact> 

<Route path="/users" element={<Users/>} exact/>
</Route>



<Route path="/updateproduct/:id" element={ <PrivateRoute />} exact> 
<Route path="/updateproduct/:id" element={<UpdateProduct/>} exact/>

</Route>


<Route path="/products" element={ <PrivateRoute />} exact> 
<Route path="/products" element={<ProductPage/>} exact/>

</Route>




<Route path="/ordernumber/:id" element={ <PrivateRoute />} exact> 
<Route path="/ordernumber/:id" element={<OneOrderPage/>} exact/>
</Route>

<Route path="/addproduct" element={ <PrivateRoute />} exact> 
<Route path="/addproduct" element={<AddProduct/>} exact/> 
 </Route> */}




{/* <Route path="/404" element={<Nofuondpage/>} exact/> */}


</Routes>
</div>
   
    </div>
  
  );
}

export default NavRoute;
