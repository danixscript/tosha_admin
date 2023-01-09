import React, { useEffect, useState } from "react";
import '../css/App.css';
import axiosConfig from "../config/AxiosConfig"
import {useFormik} from "formik"
import { Navigate,NavLink } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import AddEmployee from "../components/AddEmployee";
import { getAllEmployees, registerEmployee, removeEmployeeNow, updateEmployeePermissieonsNow, updateEmployeephoneNow } from "../Redux/Actions/adminAction";
import EmployeesTable from "../components/EmployeesTable";

function RegisterEmployee() {
  const workers = useSelector((state) => state.adminregister);
  const admin = useSelector((state) => state.admin);
  const [PhoneState,setPhoneState] = useState(0)

  const dispatch = useDispatch();
  const [errState, setErrState] = useState("");
  const createEmployee = useFormik({
    initialValues:{
      name: "",
      password:'',
      phone: "",
      date: '',
      permissions:false
  },onSubmit:async values  => {
    try{
       dispatch(registerEmployee({data:values}))
          
    }catch(e){
      console.log(e)
      setErrState("error while sending requast"+e);
    }
  }});

  useEffect(()=>{
getAllWorkers()
  },[])


  function getphone(e){  
    setPhoneState(e.target.value)

  }

  function updateEmployeePhone(e){
    dispatch(updateEmployeephoneNow({phone:PhoneState,id:e.id,permissions:admin.admin.permissions}))
  }


  function updateEmployeePermissieons(e,id){
    dispatch(updateEmployeePermissieonsNow({permissionsSElect:e,id:id,permissions:admin.admin.permissions}))
  }

  function getAllWorkers(){
   
  dispatch(getAllEmployees({data:admin.admin}));
  }


  function removeEmployee(e){
    dispatch(removeEmployeeNow({id:e.target.id,permissions:admin.admin.permissions}))
  }



  return (
    <div className="flexcol center">

<div className="maxwidtable w100">
  <div className="heading">
    <h1>ניהול עובדים</h1>
  <h1>הכנסת עובד חדש למערכת</h1>
<p>כאן תוכלו להכניס ולמחוק עובדים מהמערכת </p>
<p>רק מנהל רשאי להכניס ולמחוק עובדים מהמערכת</p>
  </div>
  <br /><br /><br /><br />
      <AddEmployee createEmployee={createEmployee}/>
<br /><br />
      <div>
        </div>
</div>
  
       <EmployeesTable updateEmployeePermissieons={updateEmployeePermissieons} updateEmployeePhone={updateEmployeePhone} getphone={getphone} permissions={admin.admin.permissions} removeEmployee={removeEmployee} workers={workers.adminworkers}/>

      
    </div>
  );
}

export default RegisterEmployee;
