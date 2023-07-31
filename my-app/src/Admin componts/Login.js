

import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div>

<div className='main-adminlog'>

    <div className='loginbox-adminlog' >

        <h2 className='title-adminlog'> Login</h2>

        <form className='form-adminlog' >

            <input type='text' name='emailid' placeholder='email id' /><br/><br/>

            <input type='text' name='password' placeholder='password' /><br/><br/>

            <button className='btn-adminlog'> Login </button>

           </form>

           <p className='p-adminlog'> change your password ? </p>



    </div>





</div>

      






    </div>
  )
}

export default Login
