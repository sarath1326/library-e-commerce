

import React from 'react'
import "./Login_normal.css"
import { useState} from 'react'
import axios from "../../Constant/Axios"
import { useNavigate } from 'react-router-dom'
import {message} from "antd"

function Login_normal() {

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [err,seterr]=useState(false)
    const navigate =useNavigate()

      const login=(e)=>{

        e.preventDefault()

      const data={
        email,
        password
      }

      axios.post("/admin/login",data).then((respo)=>{

        const result=respo.data

        if(result.flag){

            const token= result.jwt

            console.log(token)

            localStorage.setItem("library_admin_token",token)

            navigate("/admin")
            
        }else if(result.err){

            message.err("server err")

         }else{

            message.error("email id password does not match")
         }

           

      }).catch(err=>{



      })




      }




  return (
    <div>
        <div className='login-nor-main'>

            <div className='box-login-admin-nor'>

                <h1 className='h1-login-admin-nor'> Login </h1>

                <form className='form-login-admin-nor' onSubmit={login}>

                    <input className='input-login-admin-nor' 
                    type='text' 
                    placeholder='enter email id '
                    required={true}
                    name='email'
                    onChange={(e)=>{setemail(e.target.value)}} 
                    />  <br/> <br/>

                    <input className='input-login-admin-nor' 
                    type='text' 
                    placeholder='enter password ' 
                    name='password'
                    onChange={(e)=>{setpassword(e.target.value)}}
                    />  <br/> <br/>


                    <button className='btn-login-admin-nor'> Login </button>





                </form>




            </div>

           


        </div>
      
    </div>
  )
}

export default Login_normal
