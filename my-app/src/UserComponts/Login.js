



import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from "../Constant/Axios"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { namecontext } from '../Userpage/Context/Usernamecontext'


function Login() {


   const [email,setemail]=useState('')
   const [password,setpassword]=useState('')
   const [logintest,setlogintest]=useState(false)

   const {setnameuser}=useContext(namecontext)


   const navigate=useNavigate()
   
        const data={
            email,
            password
        }

          
         

  
  
    return (
    <div>

        <div className='main-login'>
            
            <div className='form-main-login'>

                <h6> LOGIN</h6>

              { logintest ?  <span> login err</span>  : null  }

                <form>

                    <input type='text' name='name' placeholder='email id' onChange={(e)=>{setemail(e.target.value)}} /> <br/><br/>

                    <input type='text' name='name' placeholder='password' onChange={(e)=>{setpassword(e.target.value)}} />

                     </form>

                     <button className='btn-login' > Login </button><br/> <br/>

                     <Link className='link-login' to={"/sig"} > create new account ?</Link>




            </div>





        </div>


        









      
    </div>
  )
}

export default Login
