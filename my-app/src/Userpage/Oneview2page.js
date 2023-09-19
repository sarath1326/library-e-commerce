import React from 'react'
import Oneview2 from '../UserComponts/oneview2/Oneview2'
import Failed from '../UserComponts/Failed/Failed'
import { useState } from 'react'

function Oneview2page() {
    const [failed,setfailed]=useState(false)
  return (
    <div>

        {

            failed ? <Failed />
            :
            
            <Oneview2 failed={setfailed} />


        }

        
      
    </div>
  )
}

export default Oneview2page
