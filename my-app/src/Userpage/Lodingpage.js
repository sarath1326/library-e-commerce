

import React from 'react'
import Loding from '../UserComponts/loding/Loding'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Lodingpage() {

    const [loding,setloding]=useState(true)

    const navigate=useNavigate()

    useEffect(()=>{

        setTimeout(()=>{

            setloding(false)
            navigate("/home")

        },3000)

    },[])
  
  
  
    return (
    <div>


        {  

        loding ? 

        <Loding />

        : null


          } 
      






    </div>
  )
}

export default Lodingpage
