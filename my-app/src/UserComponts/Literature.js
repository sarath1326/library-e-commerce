



import React from 'react'
import "./Literature.css"
// import Navbars from './Navbars'
import { BiFilterAlt } from "react-icons/bi"
import { useState,useEffect } from 'react';
import axios from "../Constant/Axios"

function Literature() {
  

 const [state,setstate]=useState(false)
 const [fetchdata,setfetchdata]=useState([])

    function btn(){
  
      setstate(!state)
    
    }


      useEffect(()=>{

        
        axios("/user/view/lit").then((respo)=>{

          setfetchdata(respo.data)

         

        })


        
      },[])











  
    return (
    
    
    <div>


        
         {/* <Navbars/> */}

<div className='title'>


    <h3> Literature</h3>
   </div>

   <div className='icons'>


   <BiFilterAlt  onClick={btn}    className='filter'/>
    <p  className='p'  >filter</p>

    </div>

   {
    state ?  <div className='filtermenu'> 

      <ul>
        <li onClick={btn}> Novel</li>
        <li> poem</li>
        <li> stroy</li>
        <li> other</li>
       

      </ul>


    </div> : null
   }



    

  
  
   

   
   
   
   <div className='serchbarmain'>

   

      <input type='text' placeholder='Search your books...'  />

  </div>


  
  <div className='items-disply-box-lit'>

    

   
 {         



              


           fetchdata.map((obj)=>
           
           
               (


                <div class="main-lit">
<div class="img-lit"> 
    <img  className='item-img-lit' src={`data:${obj.contentType};base64,${obj.imageBase64}`} alt=""/>
  
  </div>

<div class="text">

    {/* <h5> {obj.name}</h5>
    <p> 
    Language : {obj.language}    
    </p> */}


<h6 className='booktitle'> {obj.name}</h6>
<span>Language:</span><span> {obj.language}</span>
  
   </div>

   </div>


           )
           
           )


           
           
           
           }


  



  

  


   




   



  




  
 
 
   </div>





      



    </div>
  )
}

export default Literature
