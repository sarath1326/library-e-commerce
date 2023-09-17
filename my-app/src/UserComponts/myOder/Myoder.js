



import React from 'react'
import './Myoder.css'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import axios from "../../Constant/Axios";
import { useEffect, useState } from 'react';
import {message} from "antd";





function Myoder(props) {

  const navigate = useNavigate();

  const [fetchdata, setfetchdata] = useState([]);
  const [empty, setempty] = useState(false);
  const [loding, setloding] = useState(true);

  useEffect(() => {
    axios("/user/myorder", {

      headers: {

        "jwt-token": localStorage.getItem("library_token")


      }


    }).then((respo) => {

      const result = respo.data;

      if(result.err){
        message.error("somthing worng");

      }

      if (result.authfaild) {

        navigate("/Login");
      }

      if (result.flag) {

        setfetchdata(result.data);

        setloding(false);

      } else {

        setempty(true);

      }

    }).catch(err => {

      props.failed(true);


    });

  }, [])


  function view_pro(cartid) {

    navigate(`/placepro/${cartid}`);

  }


  return (
    <div>



      <div className='container'>

        {

          empty ?


            <div className='empty-myoder'>  <img className='empty-img-myoder' src='../emptyoder.jpeg' alt='loging...' />     </div>


            :

            loding ? <div className='loding-myoder'>


              <img className='loding-img-myoder' src='../Book animation.gif' alt='loding...' />




            </div>







              :



              <div className='myoder-item'>

                <Table striped bordered hover>


                  <thead>
                    <tr>


                      <th>Delevery Date</th>
                      <th>Price</th>
                      <th> Payment type</th>
                      <th>Status</th>
                      <th> View product</th>
                    </tr>
                  </thead>


                  <tbody>

                    {

                      fetchdata.map((obj) =>

                      (

                        <tr>


                          <td className='td-myoder'>{obj.delevary_date}</td>

                          <td className='td-myoder'>{obj.totalAmount}</td>

                          <td className='td-myoder'>{obj.pyment_method}</td>

                          <td className='td-myoder'>{obj.status}</td>

                          <td className='td-myoder'> <button className='view-btn' onClick={() => { view_pro(obj._id) }}  > View product</button></td>

                        </tr>




                      )

                      )



                    }


                  </tbody>
                </Table>




              </div>





        }


      </div>
















    </div>
  )
}

export default Myoder
