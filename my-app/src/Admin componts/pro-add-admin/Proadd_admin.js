


import React from 'react'
import "./Proadd_admin.css"

import { useState } from 'react'
import axios from  "../../Constant/Axios"
import { useNavigate } from 'react-router-dom'
import {message } from "antd"




function Proadd_admin(props) {

 const [image,setimage]=useState("")
 const [name,setname]=useState("")
 const [author,setauthor]=useState("")
 const [language,setlanguage]=useState("")
 const [price,setprice]=useState(0)
 const [publisher,setpublisher]=useState("")
 const [category,setcategory]=useState("")
 const [type,settype]=useState("")
 const [rating,setrating]=useState("")
 


 const navigate=useNavigate()


   const formdata=new FormData();

   formdata.append("name",name);
   formdata.append("author",author);
   formdata.append("language",language);
   formdata.append("price",price);
   formdata.append("publisher", publisher);
   formdata.append("cotegory",category);
   formdata.append("type",type);
   formdata.append("rating",rating)
   formdata.append("image",image);

   



 
 

         function addproduct(){

          const jwt= localStorage.getItem("library_admin_token")


            axios.post( "/admin/addproducts" ,formdata,{
              headers:{
                "token":jwt
      
              }

            } ).then((responce)=>{

              if(responce.data.login_failed){
                navigate("/admin/login")
                return
              }

               message.success("product add sucssfully")

              }).catch(err=>{

               props.failed(true)

              })


           
           
        }






 
    return (

      <div>
        




        
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

           <select className='input-add' type='select' placeholder='enter category' name='brand' 
                
                required 
                autoComplete={"off"}
               
                onChange={(e)=>{setcategory(e.target.value)}}
                > 
                  <option > Select category</option>
                <option value={"Literacher"} > Literacher</option>
                <option value={"Education"}>Education</option>
                <option value={"Genarl"}>Genarl</option>
                

              </select>
  
         
           
              
              
              <br /><br/>


              <select className='input-add' type='select' placeholder='enter type' name='brand' 
                
                required 
                autoComplete={"off"}
               
                onChange={(e)=>{settype(e.target.value)}}
                > 
                  <option > Select type</option>
                <option value={"novel"} > novel</option>
                <option value={"poem"}>poem</option>
                <option value={"story"}>story</option>
                <option value={"sslc"} > sslc</option>
                <option value={"plus one"}>plus one</option>
                <option value={"plus two"}>plus two</option>
                <option value={"compation exam"} >compation exam</option>
                <option value={"kids"}>kids</option>
                <option value={"coocking"}>coocking</option>
                
                

                
                
                
                </select>
              
              
              
              
              <br /><br/>

              <input className='input-add' type='text' placeholder='add Rating ' onChange={(e)=>{setrating(e.target.value)}} />
  
              
  
           
              
  
  
  
              <button type='submit' className='btn-add'> submit</button>
  
  
  
            </form>
  
  
          </div>
  
  
  
  
  
        </div>
  
  
  
  
      </div>

        

      </div>
      
  )
}

export default Proadd_admin
