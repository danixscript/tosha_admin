import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import UserInfoOrder from "../components/usersorders/UserInfoOrder";
import { MSG } from "../Redux/constants/errConstant";
import axiosConfig from "../config/AxiosConfig";


function UserInfoScreen() {
  const admin = useSelector((state) => state.admin);
  const usersorders = useSelector((state) => state.usersorders);
  const [List ,setList] = useState([])

  const dispatch = useDispatch()

  let location = useLocation();

  useEffect(()=>{
    getUserorders()
  },[])


  async function getUserorders(){
try{

    await axiosConfig
    .get("/users/getorderbyid",{params:{id:location.state.data.id}})
    .then((res) => {
        if (res.data.err) {
            return dispatch({
                type: MSG,
                data: res.data.err
            })

        } else {
          setList(res.data.data);


        }
    })
    .catch((err) => {

        dispatch({
            type: MSG,
            data: {
                type: 'bad',
                msg: err.message
            }
        })

    });

}catch(e){

}
  }

  


    return (
      <div className="flexcol ">
        <h1 className="h1">הזמנה של לקוח</h1>
        <div className="userIndo">
         <h1 className="h1">לקוח :
         {location.state.data.name}</h1>
            {location.state.data.email}

        </div>
        <div className="orders">

<UserInfoOrder list={List} />
        </div>
      
  
      
      </div>
    );
  }
  
  export default UserInfoScreen;
  