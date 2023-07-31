


import React from 'react'
import "./Proadd_admin.css"
import Admin_navbar from './Admin_navbar'
import { useState } from 'react'
import axios from  "../Constant/Axios"
import { useNavigate } from 'react-router-dom'




function Proadd_admin() {

 const [image,setimage]=useState("")
 const [name,setname]=useState("")
 const [author,setauthor]=useState("")
 const [language,setlanguage]=useState("")
 const [price,setprice]=useState("")
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

                alert(responce.data)

                navigate("/admin")

            })


           
           
        }






 
    return (
    <div>

        <Admin_navbar />

        <div className='main-proadd'>

            <div className='formbox-proadd'>

                <h6 className='title-proadd'> Add Product</h6>

                
               <form className='form-proadd' >

                    <input type='text' placeholder='name' name='name' onChange={(e)=>{setname(e.target.value)}} /><br/><br/>

                    <input type='text' placeholder='author' name='author' onChange={(e)=>{setauthor(e.target.value)}}    /><br/><br/>

                    <input list='languagedata' placeholder='language' name='language' onChange={(e)=>{setlanguage(e.target.value)}} /><br/><br/>
                       
                       <datalist id='languagedata'>

                        <option value={"malayalam"}  />
                        <option value={"english"}  />
                        <option value={"hindi"}  />



                       </datalist>
                    
                    
                    
                    <input type='text' placeholder='price' name='price' onChange={(e)=>{setprice(e.target.value)}} /><br/><br/>

                    <input type='text' placeholder='publisher' name='publisher' onChange={(e)=>{setpublisher(e.target.value)}} /><br/><br/>

                    <input list='cotegorydata' placeholder='cotegory' name='category'  onChange={(e)=>{setcotegory(e.target.value)}} /><br/><br/>

                          <datalist id='cotegorydata'>

                            <option  value={"literacher"} />

                            <option  value={"education"} />

                            <option  value={"genarl"} />




                          </datalist>
                   
                   
                    <input list='typedata' placeholder='type' name='type' onChange={(e)=>{settype(e.target.value)}} /><br/><br/>

                    <datalist id='typedata'>

                        <option value={"noval"} />

                        <option value={"poem"} />
                        
                        <option value={"story"} />

                        <option value={"other"} />

                        <option value={"sslc"} />

                        <option value={"plus one"} />

                        <option value={"pluse two"} />

                        <option value={"compation exam"} />

                        <option value={"genaral"} />

                        <option value={"coocking"} />

                        <option value={"kids"} />




                    </datalist>
                    
                    
                    
                    <div className='img-box-proadd'>
                        
                        <img src={ image? URL.createObjectURL(image) :"" } />


                    </div>


                    <input type='file' name='image' onChange={(e)=>{setimage(e.target.files[0])}}  /><br/><br/>

                   
                    {/* <button className='btn-proadd' onClick={addproduct}  > submit </button> */}

                   
                   </form>

                   <button className='btn-proadd' onClick={addproduct}  > submit </button>

                   


                   




            </div>








        </div>








      
    </div>
  )
}

export default Proadd_admin
