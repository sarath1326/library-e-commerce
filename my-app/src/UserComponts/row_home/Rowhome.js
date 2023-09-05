


import React from 'react'
import "./Rowhome.css"
import { useEffect,useState } from 'react'
import axios from "../../Constant/Axios"
import { useNavigate } from "react-router-dom"
import { AiOutlineArrowRight } from "react-icons/ai";
// import { useContext } from 'react'
// import { viewcontext } from '../Userpage/Context/Viewcontext'







axios.defaults.withCredentials=true

function Rowhome(props) {

  const [fetchdata,setfetchdata]=useState([])

  const [loging,setloding]=useState(true)

  const navigate=useNavigate()

  // const {setdata}=useContext(viewcontext)




    function pageview(id){

        if(id=="lit"){

          const url="/lit"

          navigate(`/cata${url}`)

           

        }else if(id=="edu"){

          const url="/edu"

          navigate(`/cata${url}`)
            
         
          }else {

            const url= "/gen"

            navigate(`/cata${url}`)

          }

          }
  
          

       useEffect(()=>{

        axios(props.url).then((respo)=>{




         const result=respo.data

          setfetchdata(result.data)

          setloding(false)

       



        })

          


       },[])


       function oneview(proid){

        

        navigate(`/oneview/${proid}`)



             }

      















  return (
    <div>

        
  <div className='row'>
        
        <h2>{props.title} </h2>
        <span id='more' onClick={()=>{pageview(props.id)}} className='spanicon-row'   > <AiOutlineArrowRight className='spanicon-row' />  </span>
        <div className='posters'>

          {

            loging ? <h1> heloo</h1>

            :


            





            fetchdata.map((obj)=>

                  
                (



                  <div onClick={()=>{oneview(obj._id)}}>

            <div className='poster'>

                

                <div className='row-img'>

                    <img className='row-item-img' src={`data:${obj.contentType};base64,${obj.imageBase64}`}  />

                 </div>

                <div className='row-text'>

                  <h6 className='booktitle'> {obj.name}</h6>
                  <span className='span-row' >Language:</span><span className='span-row' > {obj.language}</span>


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
