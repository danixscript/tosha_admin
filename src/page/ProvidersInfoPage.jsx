import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, useLocation } from "react-router-dom";
import EditProviderForm from "../components/providers/EditProviderForm";
import { editProvider, setSingleProviderNow } from "../Redux/Actions/providerActions";
import {useFormik} from "formik"
import ProvidersOrderTable from "../components/providers/ProvidersOrderTable";
import { MSG } from "../Redux/constants/errConstant";
import axiosConfig from "../config/AxiosConfig";

function ProvidersInfoPage(props) {
  const dispatch = useDispatch();
  const providers = useSelector((state) => state.providers); 
  const admin = useSelector((state) => state.admin); 
  let location = useLocation();
  const [GoState,setGoState] = useState(false)
  const [ProviderOrderArray,setProviderOrderArray] = useState([])

  const [MAGSTATE,setmAG] = useState('')


  useEffect(()=>{
   setSingleProvider()
  },[])

  function setSingleProvider(){
    dispatch(setSingleProviderNow(location.state.provider))
  }




  
  async function getProviderOrrers(data){
    try{
        await
        axiosConfig
        .get("/providers/doh", {params:{id:location.state.provider.id}}
       
        ) 
        .then((res) => {
          if(res.data.err){
            dispatch({type:MSG,data:res.data.err})
      
          }else{
           if(res.data){
            setProviderOrderArray(res.data.providers)
            dispatch({type:MSG,data:res.data.msg})


            setmAG(res.data.msg.msg)
            
           }
  
      
          }
        })
        .catch((err) => {
          dispatch({type:MSG,data:{msg:"somthing wrong",type:"bad"}})
        });
  
    }catch(e){
        dispatch({
            type:MSG,
            data:{msg:'errrrrrrr',type:'bad'},
        })
    }
  }
  const EditProvider = useFormik({
    initialValues:{
      id:location.state.provider.id,
      name: location.state.provider.name,
      agentname:location.state.provider.agentname,
      address: location.state.provider.address,
      phone: location.state.provider.phone,
      email:location.state.provider.email,
      zipcode:location.state.provider.zipcode,
      cat:location.state.provider.cat,
      day:location.state.provider.day,
      permissions:admin.admin.permissions
  },onSubmit:async values  => {
    try{
       dispatch(editProvider(values))
       setGoState(true)
          
    }catch(e){
      console.log(e)
    }
  }});

  // if(GoState){
  //    <Navigate to="/addprovider" />;
  // }

  return (
    <div className="App">
<div className="flexcol center">
<div className="w70">
<h1>   דוח מצב הספק שלך </h1>
<h1>ספק בשם : {providers.singleProvider.name}  </h1> 

<EditProviderForm EditProvider={EditProvider} />


</div>

</div>


<h1>כפתור דוח ספקים   </h1>
<p className="p"> הדוח ישלח למאפית תושה ישירות למייל </p>
<p className="p">היה מוכן לקבל קובץ XL</p>
<br />

<button className="buttonAll btnlog" onClick={getProviderOrrers} >דוח ספקים מלא</button>
{MAGSTATE}
{/* 
<ProvidersOrderTable /> */}



    </div>
  );
} 

export default ProvidersInfoPage;
