



import React from 'react'
import "./Oneview.css"
// import Navbers from "./Navbars"
import { useContext } from 'react'
import {viewcontext}from ".././Userpage/Context/Viewcontext"



function Oneview() {

  const {data}=useContext(viewcontext)



  
 
    return (
    <div>

      {/* <Navbers/> */}

      <div className='mainbox-oneview'>

        <div className='items-disply-box-oneview'>

        <div class="main-oneview">
        <div class="img-oneview"> 
            <img  className='item-img-oneview' src="https://dcbookstore.com/uploads/product/images/bk_9761.jpg" alt=""/>
          
          </div>
       
        <div class="text-oneview">

          <h4> Vilapayathra</h4>

        <p>
          Auther : mt vasudeven nair<br/>
          languge : malayalam<br/>
          catagoury : novel<br/>
          Publisher : dc books<br/>
          price :{data}



        </p>



           
          
           </div>

           <div className='buttons-oneview'>

           <button className='btn1-oneview'> buy</button>

           <button className='btn2-oneview'> Add cart</button>

           </div>
           
           
           </div>


        </div>

     <br/> 
        
<h4 className='h4-oneview'> best choice</h4>


      </div>
      
 

   <div className='subitem-main-oneview'>
   

  <div className='subitems-oneview' >

    <div className='sub-img-oneview'>
      <img className='simg-oneview' src='https://dcbookstore.com/uploads/product/images/bk_9761.jpg' alt='' />

    </div>

    <h5 > vilapayathra</h5>
    <p> 
      Languge : malayalam
    </p>



  </div>

  <div className='subitems-oneview' >

<div className='sub-img-oneview'>
  <img className='simg-oneview' src='https://dcbookstore.com/uploads/product/images/bk_9761.jpg' alt='' />

</div>

<h5> vilapayathra</h5>
<p> 
  Languge : malayalam
</p>



</div>

<div className='subitems-oneview' >

<div className='sub-img-oneview'>
  <img className='simg-oneview' src='https://dcbookstore.com/uploads/product/images/bk_9761.jpg' alt='' />

</div>

<h5> vilapayathra</h5>
<p> 
  Languge : malayalam
</p>



</div>

<div className='subitems-oneview' >

<div className='sub-img-oneview'>
  <img className='simg-oneview' src='https://dcbookstore.com/uploads/product/images/bk_9761.jpg' alt='' />

</div>

<h5> vilapayathra</h5>
<p> 
  Languge : malayalam
</p>



</div>

<div className='subitems-oneview' >

<div className='sub-img-oneview'>
  <img className='simg-oneview' src='https://dcbookstore.com/uploads/product/images/bk_9761.jpg' alt='' />

</div>

<h5> vilapayathra</h5>
<p> 
  Languge : malayalam
</p>



</div>

<div className='subitems-oneview' >

<div className='sub-img-oneview'>
  <img className='simg-oneview' src='https://dcbookstore.com/uploads/product/images/bk_9761.jpg' alt='' />

</div>

<h5> vilapayathra</h5>
<p> 
  Languge : malayalam
</p>



</div>

<div className='subitems-oneview' >

<div className='sub-img-oneview'>
  <img className='simg-oneview' src='https://dcbookstore.com/uploads/product/images/bk_9761.jpg' alt='' />

</div>

<h5> vilapayathra</h5>
<p> 
  Languge : malayalam
</p>



</div>


   





   </div> 


  
   
   
   
   
   
   
    </div>
  )
}

export default Oneview
