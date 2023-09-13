
import React from 'react'
import Navbars from '../UserComponts/navbar/Navbars'
import Category from '../UserComponts/category/Category'
import Failed from '../UserComponts/Failed/Failed'
import { useState } from 'react'

function Categorypage() {

  const [filed,setfailed]=useState(false)
  
    return (
    <div>

      { 

        filed ?  <Failed />

        :
      
      
      <>

       <Navbars  failed={setfailed}  />
        
        <Category   failed={setfailed}     />

      
      
      </>

        

      }








      
    </div>
  )
}

export default Categorypage
