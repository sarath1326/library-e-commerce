


import React from 'react'
import "./Placeoder.css"
import { Oval } from 'react-loader-spinner'
import {useFormik} from "formik"
import axios from "../../Constant/Axios"
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react'
import {validationSchema} from "./Validation_schema"
import {message } from "antd"
import { useParams } from 'react-router-dom'
import {onlinePayment}from "../Razorpya/Payment"

function Signup() {

  const [loding,setloding]=useState(false)
   const [pyment,setpyment]=useState("") 
   const [payprice,setpayprice]=useState(0)
   
   const navigate=useNavigate();
    const {total}=useParams()

  
  
  
  
  
  useEffect(()=>{

    const price=parseInt(total)

    

    setpayprice(price+40)





  },[])

  



  


  const initialValues = {

    name:"",
    adress:"",
    pincode:"",
    landmark:"",
    mobile:""
   
}

           

     const { values,errors,handleBlur,handleChange,handleSubmit,touched}=useFormik({

      initialValues: initialValues,

      validationSchema:validationSchema ,

      onSubmit: (values,action) => {

       if(pyment.length===0){

        message.warning("plz choose pyment type")

       }else{


        const userid= localStorage.getItem("library_token")

        const data={

          addrss:values,
         pyment,
         payprice,
         userid

        }
        
        
        axios.post("/user/place_oder",data).then((result)=>{

          if(result.data.cod){

            message.success(" your oder placed sucssfully")


          }else{

            onlinePayment(result.data.razorpay_order,(pyment,order)=>{

              const data={
                pyment,
                order
              }


               axios.post("/user/verify_pyment",data).then(()=>{


                message.success("online pyment ok your order is placed sucssfuly...!!!")



                
               }).catch(err=>{

                message.error("online pyment failed")

                console.log(err)
              
              })




            })

          }

        }).catch(err=>{

          console.log(err)

        })

        
      
      
      
      }

       
      
      
        }

              

         })














  return (
    <div className='main-pl'>

      <div className='container mainbox-pl'>

        <div className='pyment-pl'>

        <h1 className='title-pl'>Choose Your Pyment</h1>

        <div className='pyment-box-pl'>

          <h2 className='amount-pl'> Amount :{total}</h2><br/>

          <h2 className='amount-pl'> Delevary Charge :40</h2>

          <div className='line-pl'></div>

          <h2 className='amount-pl'> Total Amount :{payprice}</h2><br/>
         
             <img className='cod-img' src='../cod.png' alt='loding....'   />
          <label className='cod-text' > Cash On Delevary</label><br/>

          {/* <input className='radio' type='radio' /> <br/><br/> */}

          <input className='radio-pl' type="radio" id="html" name="fav_language" value="HTML" 

          onChange={()=>{setpyment("cod")}}
          
          
          
          /><br/><br/>

          <label><img className='pyapal-pl' src='../razornew.png' alt='loding...' /></label> <br/>

          {/* <input className='radio' type='radio' /> */}

        
          <input className='radio-pl' type="radio" id="css" name="fav_language" value="CSS" 

          onChange={()=>{setpyment("online")}}
          
          
          
          />









        </div>


        

         

          
         {   loding? 
         
         <div className='loding-sig' >

          
          <Oval 


            height={50}
            width={50}
           

            color="black"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}

          />

          </div>

          :null

         }




        </div>


        <div className='form-pl'>

          <form onSubmit={handleSubmit}  className='formmain-pl'>

            <input className='input-pl' placeholder='Enter your full name'
            type='text'
            id='name'
            name='name'
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}

            
            
            
            /> <br />

            {

              errors.name&&touched.name ? 

             <span className='span-pl'> {errors.name}</span>

             : <br/>



            }


            <input className='input-pl' placeholder='Enter full adress' 
            type='text'
            id='adress'
            name='adress'
            value={values.adress}
            onBlur={handleBlur}
            onChange={handleChange}
            
            
            
            /> <br />

            {  errors.adress&&touched.adress ?

            <span className='span-pl'> { errors.adress}</span>

            : <br/>

            }

            <input className='input-pl' placeholder='Enter land mark'
            type='text'
            id='landmark'
            name='landmark'
            value={values.landmark}
            onBlur={handleBlur}
            onChange={handleChange}
            
            
            
            /> <br />

          { errors.landmark&&touched.landmark ?

          <span className='span-pl'> { errors.landmark}</span>
          
           : <br/>

          }

            <input className='input-pl'  placeholder=' Enter pincode'
            type='text'
            id='pincode'
            name='pincode'
            value={values.pincode}
            onBlur={handleBlur}
            onChange={handleChange}
            
            
            
            /> <br />

            {
              errors.pincode&&touched.pincode ?
             <> <span className='span-pl'> { errors.pincode}</span> <br/></>
              : <br/>
            }


           <input className='input-pl'  placeholder=' Enter mobile no'
            type='text'
            id='mobile'
            name='mobile'
            value={values.mobile}
            onBlur={handleBlur}
            onChange={handleChange}
            
            
            
            /> <br />

             {
              errors.mobile&&touched.mobile ?
             <> <span className='span-pl'> { errors.mobile}</span> <br/></>
              : <br/>
            }


             




            <button type='submit' className='btn-pl'>Cheack Out</button>



          </form>


        </div>





      </div>




    </div>
  )
}

export default Signup
