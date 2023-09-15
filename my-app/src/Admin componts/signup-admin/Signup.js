


import React from 'react'
import "./Signup.css"
import { useState } from 'react'
import axios from "../../Constant/Axios"
import {message} from "antd"
import { useNavigate } from 'react-router-dom'



function Signup() {

    const [name,setname]=useState("")
   const [email,setemail]=useState("")
   const [password,setpassword]=useState("")
   const [err,seterr]=useState(false)

   const navigate=useNavigate()



    const signup=(e)=>{

        e.preventDefault()

        const data={
            name,
            email,
            password
        }

        axios.post("/admin/signup",data).then((respo)=>{

            const result= respo.data

            if(result.flag){

               navigate("/admin/login")

            }else if(result.exist){

                message.error("this email is already exist")

            }

         }).catch(err=>{

            message.error("server err")

        })



    }





  return (
    <div>

        <div className='main-signup-admin'>

            <div className='box-signup-admin'>

                <h1 className='h1-signup-admin'> signup </h1>

                <form className='form-signup-admin' onSubmit={signup}>

                    <input className='input-signup-admin' 
                    type='text' 
                    name='name'
                    required={true}
                    placeholder='enter full name' 
                    onChange={(e)=>{setname(e.target.value)}}
                    
                    /> <br/><br/>

                    <input className='input-signup-admin' 
                    type='text' 
                    placeholder='email id' 
                    name='email'
                    required={true}
                   onChange={(e)=>{setemail(e.target.value)}}
                    /> <br/><br/>

                    <input className='input-signup-admin' 
                    type='text' 
                    placeholder='password'
                    required={true} 
                    onChange={(e)=>{setpassword(e.target.value)}}
                    /> <br/><br/>


                    <button className='btn-signup-admin'> signup </button>





                </form>






            </div>

            


        </div>



      
    </div>
  )
}

export default Signup
