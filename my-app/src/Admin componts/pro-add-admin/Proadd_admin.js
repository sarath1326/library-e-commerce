


import React from 'react'
import "./Proadd_admin.css"

import { useState } from 'react'
import axios from  "../../Constant/Axios"
import { useNavigate } from 'react-router-dom'
import {message } from "antd"




function Proadd_admin() {

 const [image,setimage]=useState("")
 const [name,setname]=useState("")
 const [author,setauthor]=useState("")
 const [language,setlanguage]=useState("")
 const [price,setprice]=useState(0)
 const [publisher,setpublisher]=useState("")
 const [cotegory,setcotegory]=useState("")
 const [type,settype]=useState("")


 const navigate=useNavigate()


   const formdata=new FormData();

   formdata.append("name",name);
   formdata.append("author",author);
   formdata.append("language",language);
   formdata.append("price",price);
   formdata.append("publisher", publisher);
   formdata.append("cotegory",cotegory);
   formdata.append("type",type);
   formdata.append("image",image);

   



 
 

         function addproduct(){


            axios.post( "/admin/addproducts" ,formdata ).then((responce)=>{

               message.success("product add sucssfully")

              }).catch(err=>{

                message.error("server err")

              })


           
           
        }






 
    return (
        <div className='main-add'>

        <div className='container mainbox-add'>
  
          <div className='logo-add'>
  
             
  
           <img className='img-add' src={image ? URL.createObjectURL(image) : null} alt='loding...' />
  
          
  
       <input className='img_input-add' type='file' onChange={(e)=>{setimage(e.target.files[0])}}  />
  
         
           </div>
  
  
          <div className='form-add'>
  
            <form  className='formmain-add' onSubmit={addproduct}>
  
             
  
              <input className='input-add' placeholder='enter product name'
              type='text'
               name="name"
              onChange={(event)=>{setname(event.target.value)}}
              
              /> <br /><br/>
  
             <input className='input-add' placeholder='enter  auther name' 
              type='text'
               name='author'
               onChange={(event)=>{setauthor(event.target.value)}}
               
               /> <br /><br/>
  
             <input className='input-edit' placeholder='Enter language' 
              type='text'
              name=' language'
              onChange={(event)=>{setlanguage(event.target.value)}}
              
              /> <br /><br/>
              
              <input className='input-add' placeholder='Enter price' 
              type='text'
               name='price'
               onChange={(event)=>{setprice(event.target.value)}}
              
                /> <br /><br/>
  
             <input className='input-add' placeholder='Enter publisher name' 
              type='text'
               name='publisher'
               onChange={(event)=>{setpublisher(event.target.value)}}
               
               /> <br /><br/>
  
         
            <input className='input-add' placeholder='Enter category'
              type='text'
               name='cotegory'
               onChange={(event)=>{setcotegory(event.target.value)}}
              
              /> <br /><br/>
              
              <input className='input-add'  placeholder=' Enter type'
             
              // type='text'
              name='type'
              
              onChange={(event)=>{settype(event.target.value)}}
              
              /> <br /><br/>
  
              
  
           
              
  
  
  
              <button type='submit' className='btn-add'> submit</button>
  
  
  
            </form>
  
  
          </div>
  
  
  
  
  
        </div>
  
  
  
  
      </div>
      
  )
}

export default Proadd_admin
