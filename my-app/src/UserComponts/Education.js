




import React from 'react'
import "./Education.css"
// import Navbar from "./Navbars"
import { VscFilter } from "react-icons/vsc";
import { useState ,useEffect} from 'react';
import { BiFilterAlt } from "react-icons/bi"
import axios from "../Constant/Axios" 

function Education() {

  const [state,setstate]=useState(false)
  const [fetchdata,setfetchdata]=useState([])

    function btn(){
  
      setstate(!state)


    }

    useEffect(()=>{



      axios("/user/view/edu").then((respo)=>{

        setfetchdata(respo.data)
  

    })


    
  },[])
 


  return (
    
    <div>
        {/* <Navbar/> */}

        <div className='title'>


            <h3> Education</h3>
           </div>

           <div className='icons'>


           < BiFilterAlt onClick={btn}    className='filter'/>
            <p  className='p'  >filter</p>

            </div>

           {
            state ?  <div className='filtermenu-gen'> 

              <ul>
                <li>All</li>
               <li> SSLC</li>
                <li> plus one</li>
                <li> plus two</li>
                <li> compation exam</li>
                <li> Genaral </li>

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


                <div class="main-edu">
        <div class="img-edu"> 
            <img  className='item-img-edu' src={`data:${obj.contentType};base64,${obj.imageBase64}`} alt=""/>
          
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

export default Education
