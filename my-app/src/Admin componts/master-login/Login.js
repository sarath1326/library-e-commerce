

import React, { useState } from 'react'
import "./Login.css"
import  axios from "../../Constant/Axios"
import { PiWarningCircleBold } from "react-icons/pi"
import {message } from "antd"

function Login() {

  const [email,setemail]=useState("")
  
  const [password,setpassword]=useState("")
  
  const [err,seterr]=useState(false)

  const login=(e)=>{

    e.preventDefault()

    if(email&&password){

      seterr(false)

       const data= {

      email,
      password
    }

    
    axios.post("/admin/master/login",data).then((respo)=>{

       
    const  result= respo.data   

    if(result.flag){

         message.success("ready for add new person")

    }else if(result.nomaster){

      message.error("can't add new person. you are not master ")
      seterr(true)
    
    }else if(result.err){

      message.error("server err")

    }else{

      message.error("email and password does  not match")
      seterr(true)
    }





    }).catch(err=>{

      console.log("err")
   
    })

    }else{

      seterr(true)
    }




   



  }

 

  return (
    <div>

<div className='main-adminlog'>

    <div className='loginbox-adminlog' >

        <h2 className='title-adminlog'> Master Login</h2>

        <form className='form-adminlog' onSubmit={login} >

            <input type='text' name='emailid' placeholder='email id' onChange={(e)=>{setemail(e.target.value)}} />  
            
           {err?  <PiWarningCircleBold className='err-login'  /> :null }  <br/>     <br/>

            <input type='text' name='password' placeholder='password' onChange={(e)=>{setpassword(e.target.value)} }/>
            
         { err ?   <PiWarningCircleBold className='err-login'  /> :null  }   <br/><br/>

            <button className='btn-adminlog'> Login </button>

           </form>

           <p className='p-adminlog'> are you master..?  master can only add new person !  </p>



    </div>





</div>

      






    </div>
  )
}

export default Login
