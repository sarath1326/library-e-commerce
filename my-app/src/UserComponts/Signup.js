


import React from 'react'
import "./Signup.css"
import { useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "../Constant/Axios"


function Signup() {

    const navigate=useNavigate()

    const [state,setstate]=useState(true)

    const [name,setname]=useState('')
    const [mobile,setmobile]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')


      const data={
        name,
        mobile,
        email,
        password
      }
  
  
  
  
  
          function signup(){

                

               axios.post("/user/signup",data).then((respo)=>{


                if(respo.data.flag){
                  
                  alert("signup sucss")

                  setstate(false)
                
                }else{

                  alert("signup err")


                  
                }



                      

                   })





                    }




  function skip_btn(){

    navigate("/")

      

  }

  function addadress_btn(){

    navigate("/adress")



  }
    
 
 
    return (
    <div>



        <div className='main-sig'>


        <div className='form-box-sig'>

            <h4> Signup </h4>

            <diV className="form-div-sig">
                {

                    state ? 

                    <div> 

            <form>

                <input type='text' placeholder='name'  name='name' onChange={(e)=>{setname(e.target.value)}}  /> <br/><br/>

                <input type='text' placeholder='mobile no'  name='mobile' onChange={(e)=>{setmobile(e.target.value)}}  /> <br/><br/>

                

                <input type='text' placeholder='Email id' name='email' onChange={(e)=>{setemail(e.target.value)}} /> <br/><br/>

                {/* <input type='number' placeholder='mobile no' name='mobile' /> <br/><br/> */}

                <input type='text' placeholder='Password' name='password' onChange={(e)=>{setpassword(e.target.value)}} />

              </form>

              <br/><br/>

               <button onClick={signup}  className='btn-next'  > next </button>
              
               </div>

           

            :  
            <div className='btn-ada-sig'  > 
            
            
            <button className='btn-ada' onClick={addadress_btn} > Add Delevery Address</button><br/><br/>
            <span > OR</span><br/><br/>

            <button className='btn-sig' onClick={skip_btn} > skip</button>


            </div>   
            }


          



            </diV>

            







        </div>








        </div>










      
    </div>
  )
}

export default Signup
