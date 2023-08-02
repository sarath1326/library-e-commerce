







import React from 'react'
import "./General.css"
// import Navbars from './Navbars'

import { useState,useEffect} from 'react';
import { BiFilterAlt } from "react-icons/bi"
import axios from "../Constant/Axios"
import { useContext } from 'react';
import { viewcontext } from '../Userpage/Context/Viewcontext'
import { useNavigate } from 'react-router-dom';





function Genaral() {


    const [state,setstate]=useState(false)
    const [fetchdata,setfetchdata]=useState([])


    const navigate=useNavigate()

    const {setdata}=useContext(viewcontext)



    function btn(){
  
      setstate(!state)


    }



        useEffect(()=>{

          axios("/user/view/gen").then((respo)=>{

               setfetchdata(respo.data)

          })




        },[])







        function oneview(proid){

          axios("/user/oneview?proid="+proid).then((result)=>{
      
      
            setdata(result.data)
      
            navigate("/oneview")
      
            
      
      
                   })
      
               }
      






  
  
  
    return (
    <div>


    
{/* <Navbars/> */}

<div className='title'>


    <h3> General</h3>
   </div>

   <div className='icons'>


   <BiFilterAlt  onClick={btn}    className='filter'/>
    <p  className='p'  >filter</p>

    </div>

   {
    state ?  <div className='filtermenu'> 

      <ul>
        
        <li> kids</li>
        <li> cooking</li>
        <li> other</li>
       

      </ul>


    </div> : null
   }



    

  
  
   

   
   
   
   <div className='serchbarmain'>

   

      <input type='text' placeholder='Search your books...'  />

  </div>


  
  <div className='items-disply-box'>

    
{

  fetchdata.map((obj)=>


    (

      <div class="main-gen" onClick={()=>{oneview(obj._id)}}   >
      <div class="img-gen"> 
          <img  className='item-img-gen' src={`data:${obj.contentType};base64,${obj.imageBase64}`} alt=""/>
        
        </div>
      
      <div class="text">
      
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

export default Genaral
