



import React from 'react'
import "./Oneview.css"
// import Navbers from "./Navbars"
import { useParams } from 'react-router-dom'
import axios from "../Constant/Axios"
import { useState,useEffect } from 'react'



function Oneview() {

  const {proid}=useParams();
  const [data,setdata]=useState({});
  const [bestdata,setbestdata]=useState([]);

  console.log(proid)

  useEffect(()=>{

    axios("/user/oneview?proid="+proid).then((respo)=>{

      

      setdata(respo.data.oneview);
      setbestdata(respo.data.subdata);
  
  
    });


  
   

  },[]);

  
        console.log(bestdata)
  
 
    return (
    <div>

      {/* <Navbers/> */}

      <div className='mainbox-oneview'>

        <div className='items-disply-box-oneview'>

        <div class="main-oneview">
        <div class="img-oneview"> 
            <img  className='item-img-oneview' src={`data:${data.contentType};base64,${data.imageBase64}`} alt=""/>
          
          </div>
       
        <div class="text-oneview">

          <h4>{data.name}</h4>

        <p>
          Auther : {data.author}<br/>
          languge : {data.language}<br/>
          catagoury : {data.cotegory}<br/>
          Publisher : {data.publisher}<br/>
          price :{data.price}



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

      bestdata.map((obj)=>
      
      (

           <div className='subitems-oneview' >

    <div className='sub-img-oneview'>
      <img className='simg-oneview' src={`data:${obj.contentType};base64,${obj.imageBase64}`}           alt='' />

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
