



import React from 'react'
import Home from '../UserComponts/home/Home'
import Navbars from '../UserComponts/navbar/Navbars'
import Rowhome from '../UserComponts/row_home/Rowhome'
import { useState } from 'react'
import Failed from '../UserComponts/Failed/Failed'





function Homepage() {

  const [failed,setfailed]=useState(false)

  

 
  


   

  return (
    <div>


      

        
       {  failed ? <Failed />


          :
        

      
     <>
      
      
       <Navbars failed={setfailed}  />
        
        <Home/>

       <Rowhome title="Literature" url="/user/view/lit" id="lit" failed={setfailed} />

        <Rowhome title="Education" url="/user/view/edu"  id='edu' failed={setfailed} />

        <Rowhome   title="Genaral" url="/user/view/gen"  id="gen" failed={setfailed}   /> 


        </>


       }

    
      
        
    
      
    
    
    
    </div>
  )
}

export default Homepage
