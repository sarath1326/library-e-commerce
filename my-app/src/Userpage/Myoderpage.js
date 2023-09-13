





import React from 'react'
import Navbars from '../UserComponts/navbar/Navbars'
import Myoder from '../UserComponts/myOder/Myoder'
import Failed from '../UserComponts/Failed/Failed'
import { useState } from 'react'


function Myoderpage() {
  const [failed,setfailed]=useState(false)
  
  return (
    <div>

         {

          failed ? <Failed />

          :



          <>

         <Navbars failed={setfailed}   />
       
         <Myoder failed={setfailed} />
          
          
          </>



         }

       



      
    </div>
  )
}

export default Myoderpage
