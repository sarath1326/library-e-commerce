


import React from 'react'
import "./Rowhome.css"
import { useEffect,useState } from 'react'
import axios from "../Constant/Axios"
import { useNavigate } from "react-router-dom"









function Rowhome(props) {

  const [fetchdata,setfetchdata]=useState([])

  const navigate=useNavigate()




    function pageview(id){

        if(id=="lit"){

          navigate("/lit")

           

        }else if(id=="edu"){

          navigate("/edu")
            
         
          }else {

            navigate("/gen")

          }

          }
  
          

       useEffect(()=>{

        axios(props.url).then((respo)=>{

          console.log(respo.data)

          setfetchdata(respo.data)



        })

          


       },[])

      















  return (
    <div>

        
  <div className='row'>
        
        <h2>{props.title} </h2>
        <h5 id='more' onClick={()=>{pageview(props.id)}}     > more </h5>
        <div className='posters'>

          {


            





            fetchdata.map((obj)=>

                  
                (



                  <div>

            <div className='poster'>

                

                <div className='row-img'>

                    <img className='row-item-img' src={`data:${obj.contentType};base64,${obj.imageBase64}`}  />

                 </div>

                <div className='row-text'>

                  <h6 className='booktitle'> {obj.name}</h6>
                  <span>Language:</span><span> {obj.language}</span>


               </div>

               </div>

             </div>

             )


              )

          



               }


           </div>

      

          </div>
        
         </div>
  )
}

export default Rowhome
