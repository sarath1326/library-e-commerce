


import React from 'react'
import "./Otp.css"
import { useState, useRef } from 'react';
import axios from "../../Constant/Axios";
import { message } from "antd";
import { useNavigate } from 'react-router-dom';


function Otp(props) {
  const navigate = useNavigate();
  const inputRef = useRef({});
  const [input, setinput] = useState({

    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: ""
  })



  const handilChange = (event, index) => {

    const { name, value } = event.target;

    setinput((data) => ({
      ...data,
      [name]: value

    }))

    if (value && index < 5) {

      inputRef.current[index + 1].focus();

    }

  }

  const handilBackSpaca = (event, index) => {

    if (event.key === "Backspace") {

      if (index > 0) {
        inputRef.current[index - 1].focus();
      }


    }

  }








  const inputRender = () => {

    return Object.keys(input).map((key, index) => (

      <input className='input-otp' type='text' required={true}

        maxLength={1}
        name={key}
        value={input[key]}
        onChange={(event) => { handilChange(event, index) }}

        ref={(element) => (inputRef.current[index] = element)}

        onKeyUp={(event) => { handilBackSpaca(event, index) }}



      />


    )

    )

  }



  const submit = (e) => {

    e.preventDefault()

    const data = "" + input.input1 + "" + input.input2 + "" + input.input3 + "" + input.input4 + "" + input.input5 + "" + input.input6

    axios.post("/user/otp", { otp: data }).then((result) => {

      if(result.data.err){
        message.error("somthing worng");
        return
      }

      if (result.data.flag) {

        navigate("/login");

      } else {

        message.error("invalid otp");


      }

    }).catch(err => {

      props.failed(true);

    })

  }









  return (
    <div className='main-box-otp'>

      <section>
        <div className='title1-otp'>OTP </div>

        <div className='title2-otp'>Enter Verification code </div>
        <p className='p-otp'> We have sent a Verification code to your email id</p>

        <div className='inputs-otp'>

          <form onSubmit={submit} >

            {
              inputRender()
            }



            <button className='btn-otp' type='submit'  >Submit </button>

          </form>

        </div>


      </section>














    </div>
  )
}

export default Otp
