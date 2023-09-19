



import React from 'react'
import Navbars from '../UserComponts/navbar/Navbars'
import Oneview from '../UserComponts/oneView/Oneview'
import Failed from '../UserComponts/Failed/Failed'
import { useState } from 'react'


function Oneviewpage() {
  
  const [failed,setfailed]=useState(false)
  
  
    return (
    <div>

      {

        failed ? <Failed />

          
        :



        <>

       
         <Navbars failed={setfailed}   />
         
        <Oneview failed={setfailed}  />
        
        
        </>

       


      }
      




    </div>
  )
}

export default Oneviewpage
