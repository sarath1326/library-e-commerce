



import React from 'react'
import Signup from '../UserComponts/signup/Signup'
import Navbars from '../UserComponts/navbar/Navbars'
import Failed from '../UserComponts/Failed/Failed'
import { useState } from 'react'
function Signuppage() {

  const [failed,setfailed]=useState(false)
 
 
    return (
    <div>

      {

        failed ? <Failed />

        :

        <>
        
        <Signup failed={setfailed}  />

        </>



      }
       
        
      







    </div>
  )
}

export default Signuppage
