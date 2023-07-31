


import React from 'react'
import "./Signup.css"
import { useState, } from 'react'
import { useNavigate } from 'react-router-dom'


function Signup() {

    const navigate=useNavigate()

    const [state,setstate]=useState(true)




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

                <input type='text' placeholder='name'  name='name'  /> <br/><br/>

                <input type='text' placeholder='Email id' name='email' /> <br/><br/>

                {/* <input type='number' placeholder='mobile no' name='mobile' /> <br/><br/> */}

                <input type='text' placeholder='Password' name='password' />

              </form>

              <br/><br/>

               <button onClick={()=>{setstate(false)}}  className='btn-next'  > next </button>
              
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
