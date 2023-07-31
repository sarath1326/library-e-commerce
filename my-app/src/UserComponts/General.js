







import React from 'react'
import "./General.css"
// import Navbars from './Navbars'

import { useState } from 'react';
import { BiFilterAlt } from "react-icons/bi"




function Genaral() {


    const [state,setstate]=useState(false)

    function btn(){
  
      setstate(!state)


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

    


  
  <div class="main-gen">
<div class="img-gen"> 
    <img  className='item-img-gen' src="https://dcbookstore.com/uploads/product/images/bk_9761.jpg" alt=""/>
  
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

export default Genaral
