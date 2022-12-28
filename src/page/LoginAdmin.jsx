import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin, adminloguot, firsUserAdmin } from "../Redux/Actions/adminAction";
import { Navigate } from "react-router-dom";

function LoginAdmin() {
  const dispatch = useDispatch();
  const [nameState, setNameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [rememberState, setRememberState] = useState(false);
  const admin = useSelector((state) => state.admin);

  function getName(e) {
    setNameState(e.target.value);
  }
  function getPassword(e) {
    setPasswordState(e.target.value);
  }
  function getRemember(e) {
    setRememberState(e.target.value);
  }


  useEffect(()=>{
dispatch(firsUserAdmin())
  },)

  function adminLogIn(e) {
    e.preventDefault();

    if (nameState != "" || passwordState != "") {
      return dispatch(
       adminLogin({
          name: nameState,
          password: passwordState,
          remember: rememberState,
        })
      );
    } else {
      console.log("empty");
    }
  }

  if (admin.isLog) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flexcol center">
      <div className="form_Login flexcol center">
        <h3>התחבר</h3>
        <form action="" className="flexcol center">
          <input placeholder="שם" onChange={getName} type="text" className="lolog" />
          <input placeholder="סיסמה" onChange={getPassword} type="password" className="lolog" />
        <br />
          <div className="">
          זכור אותי מחובר
            <input type="checkbox" onChange={getRemember} />
          
          </div>
          <br />
          <button className="btnlog" onClick={adminLogIn}>התחבר</button>
        </form>

        {admin.firsUserAdmin?
        <div className="adminpassAndUse flexcol">
          <p>admin</p>
          <p>admin123</p>
        </div>
      :''}
      </div>
    </div>
  );
}

export default LoginAdmin;
