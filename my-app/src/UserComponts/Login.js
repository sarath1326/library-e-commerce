



import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'


function Login() {
  
  
    return (
    <div>

        <div className='main-login'>
            
            <div className='form-main-login'>

                <h6> LOGIN</h6>

                <form>

                    <input type='text' name='name' placeholder='email id' /> <br/><br/>

                    <input type='text' name='name' placeholder='password' />

                     </form>

                     <button className='btn-login'> Login </button><br/> <br/>

                     <Link className='link-login' to={"/sig"} > create new account ?</Link>




            </div>





        </div>


        









      
    </div>
  )
}

export default Login
