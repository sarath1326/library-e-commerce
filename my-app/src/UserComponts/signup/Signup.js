


import React from 'react'
import "./Signup.css"
import { Oval } from 'react-loader-spinner';
import { useFormik } from "formik";
import { Signupschema } from "./Signup_schema";
import axios from "../../Constant/Axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {message} from "antd";

function Signup(props) {

  const navigate = useNavigate();
  const [loding, setloding] = useState(false);


  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    password: ""
  }

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({

    initialValues: initialValues,

    validationSchema: Signupschema,

    onSubmit: (values, action) => {

      setloding(true);

      const data = values;

      axios.post("/user/signup", data).then((result) => {


        if(result.data.exit){

          action.resetForm();
          message.error("this email is already exit")
          return
          
        }



        if (result.data.flag) {

          navigate("/otp");

        } else {

          navigate("/sig");

          action.resetForm();
          message.error("somthing worng");
          

        }

      }).catch(err => {

        props.failed(true);

      })

    }

  })


  return (
    <div className='main-sig'>

      <div className='container mainbox-sig'>

        <div className='logo-sig'>

          <img className='img-sig' src=' ../logo li.png ' alt='loding' />


          <h1 className='title-sig'>Signup</h1>

          {loding ?

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

            : null

          }




        </div>


        <div className='form-sig'>

          <form onSubmit={handleSubmit} className='formmain-sig'>

            <input className='input-sig' placeholder='Enter your full name'
              type='text'
              id='name'
              name='name'
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}




            /> <br />

            {

              errors.name && touched.name ?

                <span className='span-sig'> {errors.name}</span>

                : <br />



            }


            <input className='input-sig' placeholder='Enter mobile number'
              type='text'
              id='mobile'
              name='mobile'
              value={values.mobile}
              onBlur={handleBlur}
              onChange={handleChange}



            /> <br />

            {errors.mobile && touched.mobile ?

              <span className='span-sig'> {errors.mobile}</span>

              : <br />

            }

            <input className='input-sig' placeholder='Enter Email id'
              type='email'
              id='email'
              name='email'
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}



            /> <br />

            {errors.email && touched.email ?

              <span className='span-sig'> {errors.email}</span>

              : <br />

            }

            <input className='input-sig' placeholder=' Enter password'
              type='password'
              id='password'
              name='password'
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}



            /> <br />

            {
              errors.password && touched.password ?
                <> <span className='span-sig'> {errors.password}</span> <br /></>
                : <br />
            }



            <button type='submit' className='btn-sig'> Signup</button>



          </form>


        </div>





      </div>




    </div>
  )
}

export default Signup
