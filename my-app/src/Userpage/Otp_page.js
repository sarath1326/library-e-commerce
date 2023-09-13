

import React from 'react'
import Otp from '../UserComponts/otp/Otp'
import Failed from '../UserComponts/Failed/Failed'
import { useState } from 'react'

function Otp_page() {
  const [failed,setfailed]=useState(false)
  return (
    <div>


      {

        failed ? <Failed />

         : 

        <>
        
        <Otp failed={setfailed} />
        
        </>

      


      }



      
    </div>
  )
}

export default Otp_page




