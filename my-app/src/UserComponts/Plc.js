


import React from 'react'
import "./Plc.css"
import { Oval } from 'react-loader-spinner'
import {useFormik} from "formik"
// import {Signupschema} from "./Signup_schema"
// import axios from "../../Constant/Axios"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import {validationSchema} from "../UserComponts/placeOder/Validation_schema"

function Signup() {

  const navigate=useNavigate();

  const [loding,setloding]=useState(false)


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

        setloding(true)

          console.log(values)
          const data=values


      
      
        }

              

         })














  return (
    <div className='main-pl'>

      <div className='container mainbox-pl'>

        <div className='pyment-pl'>

        <h1 className='title-pl'>Choose Your Pyment</h1>

        <div className='pyment-box-pl'>

          <h2 className='amount-pl'> Amount :1070</h2><br/>

          <h2 className='amount-pl'> Delevary Charge :40</h2>

          <div className='line-pl'></div>

          <h2 className='amount-pl'> Total Amount :2100</h2><br/>
         

          <label > Cash On Delevary</label><br/>

          {/* <input className='radio' type='radio' /> <br/><br/> */}

          <input className='radio-pl' type="radio" id="html" name="fav_language" value="HTML" /><br/><br/>

          <label><img className='pyapal-pl' src='./pyapal.png ' alt='loding...' /></label> <br/>

          {/* <input className='radio' type='radio' /> */}

        
          <input className='radio-pl' type="radio" id="css" name="fav_language" value="CSS" />









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
