



import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from "../../Constant/Axios"
import { useNavigate } from 'react-router-dom'
import { BsFillHouseDoorFill } from "react-icons/bs";
import { PiWarningCircleBold } from "react-icons/pi"
import { message } from 'antd'

axios.defaults.withCredentials=true



function Login(props) {


   const [email,setemail]=useState('')
   const [password,setpassword]=useState('')
   const [logintest,setlogintest]=useState(false)
  const [err,seterr]=useState(false)




   const navigate=useNavigate()
   
        const data={
            email,
            password
        };


        function logindb(){

            if(email && password ===""){
                seterr(true)
                return
            }

            axios.post("/user/login",data).then((result)=>{

                if(result.data.flag){

                const token= result.data.jwtToken

                localStorage.setItem("library_token",token)
                    
                    navigate("/home")

                }else{

                  
                  setemail("")
                   
                   setpassword("")
                  
                   seterr(true)
                  
                   message.error("email and password not match")

                }



        }).catch(err=>{

            console.log(err)

             props.failed(true)

        })

        }




          
         

  
  
    return (
    <div>

        <div className='main-login'>
            
            <div className='form-main-login'>

                <h6> LOGIN</h6>

              { logintest ?  <span> login err</span>  : null  }

                <form>

                    <input type='text' name='name' placeholder='email id' value={email} onChange={(e)=>{setemail(e.target.value)}} />
                    
                { err ?    <PiWarningCircleBold className='err-login'  /> : null  }    <br/><br/>

                    <input type='password' name='name' autoComplete="off"  placeholder='password' value={password}  onChange={(e)=>{setpassword(e.target.value)}} />
                    
                {  err ?     <PiWarningCircleBold className='err-login'  />  : null }

                     </form>

                     <button className='btn-login' onClick={logindb} > Login </button><br/> <br/>

                     <Link className='link-login' to={"/sig"} > create new account ?</Link> <br/> <br/>

                     <BsFillHouseDoorFill onClick={()=>{navigate("/home")}} className='home-icon-login' />




            </div>





        </div>


        









      
    </div>
  )
}

export default Login
