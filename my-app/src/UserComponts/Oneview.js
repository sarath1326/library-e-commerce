



import React from 'react'
import "./Oneview.css"
// import Navbers from "./Navbars"
import { useContext } from 'react'
import {viewcontext}from ".././Userpage/Context/Viewcontext"



function Oneview() {

  const {data}=useContext(viewcontext)


  



  
 
    return (
    <div>

    

      <div className='mainbox-oneview'>

        <div className='items-disply-box-oneview'>

          

        <div class="main-oneview">
        <div class="img-oneview"> 
            <img  className='item-img-oneview' src={`data:${data.oneview.contentType};base64,${data.oneview.imageBase64}`} alt=""/>
          
          </div>
       
        <div class="text-oneview">

          <h4>{data.oneview.name}</h4>

        <p>
          Auther : {data.oneview.author}<br/>
          languge : {data.oneview.language}<br/>
          {/* catagoury : {data.cotegory}<br/> */}
          Publisher : {data.oneview.publisher}<br/>
          price :{data.oneview.price}



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

    {

      data.subdata.map((obj)=>


      (


        <div className='subitems-oneview' >

    <div className='sub-img-oneview'>
      <img className='simg-oneview' src={`data:${obj.contentType};base64,${obj.imageBase64}`} alt='' />

    </div>

    <h6 className='booktitle'> {obj.name}</h6>
    <span>Language:</span><span> {obj.language}</span>

  </div>








      )
      
      
      
      
      )
   

  

   
   }

 

</div> 


 </div>
  )
}

export default Oneview
