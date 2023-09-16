


import React from 'react'
import Cart from '../UserComponts/cart/Cart'
import Navbars from '../UserComponts/navbar/Navbars'
import Failed from '../UserComponts/Failed/Failed'
import { useState } from 'react'

function Cartpage() {

  const [failed,setfailed]=useState(false)
  
  
    return (
    <div>

      { 

      failed ? <Failed />


      :


      <>

      <Navbars failed={setfailed}   />
     
      <Cart failed={setfailed}  />

      
      
      </>

}

      



        
      
    </div>
  )
}

export default Cartpage
