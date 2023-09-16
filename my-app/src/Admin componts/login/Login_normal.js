

import React from 'react'
import "./Login_normal.css";
import { useState } from 'react';
import axios from "../../Constant/Axios";
import { useNavigate } from 'react-router-dom';
import { message } from "antd";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { PiWarningCircleBold } from "react-icons/pi";
import Failed from '../../UserComponts/Failed/Failed';

function Login_normal() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [err, seterr] = useState(false);
  const navigate = useNavigate();
  const [failed,setfailed]=useState(false);

  const login = (e) => {

    e.preventDefault();

    const data = {
      email,
      password
    }

    axios.post("/admin/login", data).then((respo) => {

      const result = respo.data;

      if (result.flag) {

        const token = result.jwt;

        localStorage.setItem("library_admin_token", token);

        navigate("/admin");

      } else if (result.err) {

        message.err("something worng");

      } else {

        message.error("email id password does not match");
        seterr(true);
      }

    }).catch(err => {

      setfailed(true);

     

    });

  }




  return (
    <div>

   {
         failed ? <Failed />

         :


   

      <div className='login-nor-main'>

        <div className='box-login-admin-nor'>

          <h1 className='h1-login-admin-nor'> Login </h1>

          <form className='form-login-admin-nor' onSubmit={login}>

            <input className='input-login-admin-nor'
              type='text'
              placeholder='enter email id '
              required={true}
              name='email'
              onChange={(e) => { setemail(e.target.value) }}
            />

            {err ? <PiWarningCircleBold className='err-login' /> : null}

            <br /> <br />

            <input className='input-login-admin-nor'
              type='text'
              placeholder='enter password '
              name='password'
              required={true}
              onChange={(e) => { setpassword(e.target.value) }}
            />

            {err ? <PiWarningCircleBold className='err-login' /> : null}


            <br /> <br />


            <button className='btn-login-admin-nor'> Login </button>





          </form>



          <BsFillHouseDoorFill className='icon-login-admin-nor' onClick={() => { navigate("/admin") }} />



        </div>




      </div>

   }

    </div>
  )
}

export default Login_normal
