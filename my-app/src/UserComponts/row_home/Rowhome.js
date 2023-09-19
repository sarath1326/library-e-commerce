


import React from 'react'
import "./Rowhome.css"
import { useEffect, useState } from 'react';
import axios from "../../Constant/Axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import {message} from "antd";


axios.defaults.withCredentials = true;

function Rowhome(props) {

  const [fetchdata, setfetchdata] = useState([]);
  const [loging, setloding] = useState(true);
  const navigate = useNavigate();

  function pageview(id) {

    if (id == "lit") {

      const url = "/lit"

      navigate(`/cata${url}`);

    } else if (id == "edu") {

      const url = "/edu"

      navigate(`/cata${url}`);

    } else {

      const url = "/gen"

      navigate(`/cata${url}`);

    }

  }



  useEffect(() => {

    axios(props.url).then((respo) => {

      if(respo.data.err){

        message.error("somthing worng..check your connection")

        return
      }

      const result = respo.data;

      if(result.err){

        message.error("somthing err");
        return
        
      }

      setfetchdata(result.data);
      setloding(false);

    }).catch(err => {

      props.failed(true);

    });

  }, [])


  function oneview(proid) {

    navigate(`/oneview/${proid}`);
   
  }


  return (
    <div>


      <div className='row'>

        <h2>{props.title} </h2>
        <span id='more' className='spanicon-row'   > <AiOutlineArrowRight   onClick={() => { pageview(props.id) }} className='spanicon-row' />  </span>
        <div className='posters'>

          {

            loging ? null

              :








              fetchdata.map((obj) =>


              (



                <div  className='div-row'>

                  <div className='poster' onClick={() => { oneview(obj._id) }}  >



                    <div className='row-img'>

                      <img className='row-item-img' src={`data:${obj.contentType};base64,${obj.imageBase64}`} />

                    </div>

                    <div className='row-text'>

                      <h6 className='booktitle'> {obj.name}</h6>
                      <span className='span-row' >Language:</span><span className='span-row' > {obj.language}</span> <br/>
                      <span> <span className='rating-row'> {obj.rating}  </span> ⭐</span>


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
