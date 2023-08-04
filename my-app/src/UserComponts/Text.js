



   import React from 'react'
   import  {useParams} from "react-router-dom"
   import { useEffect } from 'react'
   import axios from "../Constant/Axios"

   
   function Text() {

    const {proid}=useParams()

    console.log(proid)


          useEffect (()=>{


            axios("/user/oneview?proid="+proid).then((respo)=>{

                console.log(respo.data)

            })









          },[])






     
    
    return (
       <div>


      <h1> text</h1>





         
       </div>
     )
   }
   
   export default Text
   