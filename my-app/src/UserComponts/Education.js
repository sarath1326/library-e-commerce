




import React from 'react'
import "./Education.css"
// import Navbar from "./Navbars"
import { VscFilter } from "react-icons/vsc";
import { useState } from 'react';
import { BiFilterAlt } from "react-icons/bi"

function Education() {

  const [state,setstate]=useState(false)

    function btn(){
  
      setstate(!state)


    }

 


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

            


          
          <div class="main-edu">
        <div class="img-edu"> 
            <img  className='item-img-edu' src="https://dcbookstore.com/uploads/product/images/bk_9761.jpg" alt=""/>
          
          </div>
       
        <div class="text">

            <h5> Vilapayathra</h5>
            <p> 
            Language : Malayalam     
            </p>
          
           </div>

           </div>


           <div class="main">
        <div class="img"> 
            <img  className='item-img' src="https://dcbookstore.com/uploads/product/images/bk_9761.jpg" alt=""/>
          
          </div>
       
        <div class="text">

            <h5> Vilapayathra</h5>
            <p> 
            Language : Malayalam     
            </p>
          
           </div>

           </div>



           <div class="main">
        <div class="img"> 
            <img  className='item-img' src="https://dcbookstore.com/uploads/product/images/bk_9761.jpg" alt=""/>
          
          </div>
       
        <div class="text">

            <h5> Vilapayathra</h5>
            <p> 
            Language : Malayalam     
            </p>
          
           </div>

           </div>


           <div class="main">
        <div class="img"> 
            <img  className='item-img' src="https://dcbookstore.com/uploads/product/images/bk_9761.jpg" alt=""/>
          
          </div>
       
        <div class="text">

            <h5> Vilapayathra</h5>
            <p> 
            Language : Malayalam     
            </p>
          
           </div>

           </div>


           <div class="main">
        <div class="img"> 
            <img  className='item-img' src="https://dcbookstore.com/uploads/product/images/bk_9761.jpg" alt=""/>
          
          </div>
       
        <div class="text">

            <h5> Vilapayathra</h5>
            <p> 
            Language : Malayalam     
            </p>
          
           </div>

           </div>




           <div class="main">
        <div class="img"> 
            <img  className='item-img' src="https://dcbookstore.com/uploads/product/images/bk_9761.jpg" alt=""/>
          
          </div>
       
        <div class="text">

            <h5> Vilapayathra</h5>
            <p> 
            Language : Malayalam     
            </p>
          
           </div>

           </div>




           <div class="main">
        <div class="img"> 
            <img  className='item-img' src="https://dcbookstore.com/uploads/product/images/bk_9761.jpg" alt=""/>
          
          </div>
       
        <div class="text">

            <h5> Vilapayathra</h5>
            <p> 
            Language : Malayalam     
            </p>
          
           </div>

           </div>




           <div class="main">
        <div class="img"> 
            <img  className='item-img' src="https://dcbookstore.com/uploads/product/images/bk_9761.jpg" alt=""/>
          
          </div>
       
        <div class="text">

            <h5> Vilapayathra</h5>
            <p> 
            Language : Malayalam     
            </p>
          
           </div>

           </div>
           </div>






      
    </div>
  )
}

export default Education
