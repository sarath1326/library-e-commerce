

import React from 'react'
import Login from '../UserComponts/login/Login'
import Failed from '../UserComponts/Failed/Failed'
import { useState } from 'react'




function Loginpage() {

  const [failed,setfailed]=useState(false)

  
  
    return (
    <div>

      {
        failed ? <Failed />

        :

        <>
        
        <Login failed={setfailed} />
        
        </>

      

}




      
    </div>
  )
}

export default Loginpage
