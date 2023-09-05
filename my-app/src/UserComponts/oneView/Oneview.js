



import React from 'react'
import "./Oneview.css"
// import Navbers from "./Navbars"
import { useParams } from 'react-router-dom'
import axios from "../../Constant/Axios"
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { AddCart } from '../../redux/cart/Cart'
import {message } from "antd"



function Oneview() {

  const navigate=useNavigate()

  const dispatch=useDispatch()

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


    
  const addCart=(proid)=>{

  
    axios("/user/add_cart?proid="+proid,{
   
      headers:{
      
      "jwt-token" :localStorage.getItem("library_token")

    }

  }).then((result)=>{

         if(result.data.proexit){

         
          message.warning("this prodect alredi added your cart. plz chack your cart")


          return

         }else if(result.data.update){

          const count= result.data.count

          dispatch(AddCart(count))

          message.success("cart updated")



         }





    if(result.data.flag){

      const count = result.data.count

      console.log("new add ")

     
      dispatch(AddCart(count))

      console.log(count)

         

    }

    
     }).catch(err=>{

      message.error("somthing worng")

     })

      

    





  }

  

  
 
  
 
    return (
    <div>

      {  
      
      
      data ?

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
            Type : {data.type}<br/>
          Publisher : {data.publisher}<br/>
          price :{data.price}



        </p>



           
          
           </div>

           <div className='buttons-oneview'>

           <button className='btn1-oneview'> buy</button>

           <button className='btn2-oneview' onClick={()=>{addCart(data._id)}}  > Add cart</button>

           </div>
           
           
           </div>


        </div>

     <br/> 
        
<h4 className='h4-oneview'> best choice</h4>


      </div>

      : null

}
      
 

   <div className='subitem-main-oneview'>
   

  
  
     {
      bestdata ?

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

      : null
  
  
 }

  










   





   </div> 


  
   
   
   
   
   
   
    </div>
  )
}

export default Oneview
