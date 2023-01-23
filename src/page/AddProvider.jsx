import AddProviderForm from "../components/AddProviderForm";
import {useFormik} from "formik"
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { addProvidersNow, getAllProviders, removeProviderNow } from "../Redux/Actions/providerActions";
import ProvidersTable from "../components/ProvidersTable";
import DeleteAlert from "../components/DeleteAlert";
import { START_LOAD, STOP_LOAD } from "../Redux/constants/loaderConstant.js";


function AddProvider() {
  const admin = useSelector((state) => state.admin);
  const providers = useSelector((state) => state.providers);
  const Loader = useSelector((state) => state.Loader);

const [popUpState,setPopUpState] = useState(false)
const [providerState,setProviderState] = useState({})

  const dispatch = useDispatch();




  useEffect(()=>{
dispatch(getAllProviders())
  })

  const addProvider = useFormik({ 
    initialValues:{
      name: "",
      agentname:'',
      address: "",
      phone: '',
      email:"",
      zipcode:'',
      cat:"",
      day:"",
      permissions:admin.admin.permissions
  },onSubmit:async values  => {
    try{
      dispatch({type:START_LOAD})
       dispatch(addProvidersNow({data:values}))
          
    }catch(e){
      console.log(e)
      dispatch({type:STOP_LOAD})
    }
  }});


  function popup(e){
   
    setProviderState(e)
    setPopUpState(true)
  }
  function closePopUp(){
    setPopUpState(false)
    setProviderState({})
  }

function removeProvider(id){
  closePopUp()
  let obj ={
    id:id,
    permissions:admin.admin.permissions
  }

  dispatch(removeProviderNow(obj))

}


    return (
      <div className="flexcol center">
        <div className="maxwidtable w100">
        <div className="heading">
        <h1>הוסף ספקים</h1>
       
        </div>
        {Loader.Loader?
        <h4>כבר נעדכן אותך מה קרה</h4>
        :    
           <AddProviderForm addProvider={addProvider} />

        }
       <br />
       {popUpState ?
       <div className="positionfix">
               <DeleteAlert removeProvider={removeProvider} closePopUp={closePopUp} provider={providerState}/>

       </div>
      :""}
      </div>
      <ProvidersTable permissions={admin.admin.permissions} popup={popup} list={providers.providers} />

      </div>
    );
  }
   
  export default AddProvider;
  