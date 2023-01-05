import AddProviderForm from "../components/AddProviderForm";
import {useFormik} from "formik"
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { addProvidersNow, getAllProviders, removeProviderNow } from "../Redux/Actions/providerActions";
import ProvidersTable from "../components/ProvidersTable";
import DeleteAlert from "../components/DeleteAlert";
import { NavLink } from "react-router-dom";


function ProviderOrder() {
  const admin = useSelector((state) => state.admin);
  const providers = useSelector((state) => state.providers);
const [popUpState,setPopUpState] = useState(false)
const [providerState,setProviderState] = useState({})

  const dispatch = useDispatch();




  useEffect(()=>{
dispatch(getAllProviders())
  })




let arr = [
  'א-ד 8:00-13:00',
  'ב-ג-ו 8:00-18:00',      
  'ג-ד 8:00-17:00',
  'א-ב-ה 8:00-13:00',
  'א-ד 6:00-15:00', '-ד 10:00-22:00'
]




    return (
      <div className="flexcol center">
        <h1>בחירת הזמנה לפי ספק</h1>
        {providers.providers.length > 0 ?
      <div className="grid-1">
        {providers.providers.map((e,i)=>{
          return(
              <NavLink className={'providerbuton flexcol '} to={'/productlist'} state={{providerid:e.id,stillOrder:true}} >
               <div className="providerBlock">
        
<p className="headersmallbtn"> {e.name}</p>
             
              {e.cat}
              <p className="p">
                 {arr[i]}
              </p>
             
              </div>
              </NavLink>
            
          )
        })}
      </div>
      :
      <div className="err">
        <h1 className="errheader">
          זו היא הודעת שגיאה 
        </h1>
        <p>לא נמצאו ספקים ברשימה</p>
      </div>
      }

       </div>
    );
  }
   
  export default ProviderOrder;
  