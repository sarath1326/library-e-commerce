



import React from 'react'
import Home from '../UserComponts/home/Home'
import Navbars from '../UserComponts/navbar/Navbars'
import Rowhome from '../UserComponts/row_home/Rowhome'





function Homepage() {

  

 
  


   

  return (
    <div>


      

        

        

      

      
      
       <Navbars/>
        
        <Home/>

       <Rowhome title="Literature" url="/user/view/lit?limit=1" id="lit" />

        <Rowhome title="Education" url="/user/view/edu?limit=1"  id='edu' />

        <Rowhome   title="Genaral" url="/user/view/gen?limit=1"  id="gen"   /> 

    
      
        
    
      
    
    
    
    </div>
  )
}

export default Homepage
