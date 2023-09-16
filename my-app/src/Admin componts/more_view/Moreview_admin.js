

import React from 'react'

import "./Moreview_admin.css";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "../../Constant/Axios";
import { message } from 'antd';



function Moreview_admin(props) {

  const [fetchdata, setfetchdata] = useState([]);

  const [loding, setloding] = useState(true);

  const location = useLocation();

  const data = location.state;

  console.log(data.userAdress);

  const address = data.userAdress;
  const oderid = data._id;


  useEffect(() => {

    axios("/admin/oder_pro?oderid=" + oderid).then((result) => {

      if (result.data.flag) {

        setfetchdata(result.data.data);

        setloding(false);


      } else {

        message.warning("no data found");

      }

    }).catch(err => {

      props.failed(true);

    })


  }, [])


  return (

    <div>

      {

        loding ? <div className='loding-more-view'> <img className='loding-icon-more-view' src='../Book animation.gif' alt='loding..' />    </div>

          :





          <div className='main-more-view'>



            <div className='deli-moreview'>

              <h6 className='title-moreview'> Delevery Address</h6>

              <h6 className='p-address'><span className='del-span'>name:</span>{address.name}</h6>

              <h6 className='p-address'><span className='del-span'>adress:</span>{address.adress}</h6>

              <h6 className='p-address'><span className='del-span'>Landmark:</span>{address.landmark}</h6>

              <h6 className='p-address'><span className='del-span'>pincode:</span> {address.pincode}</h6>

              <h6 className='p-address'> <span className='del-span'>mobile:</span>{address.mobile}</h6>

            </div>

            <hr></hr>

            <h3 className='title-2-more'> Products </h3>



            <div className='main-moreview'>

              {

                fetchdata.map((obj) =>

                (

                  <div className='itembox-moreview'>

                    <div className='imgbox-moreview'>
                      <img className='proimg-moreview' src={`data:${obj.prodata.contentType};base64,${obj.prodata.imageBase64}`} alt='loding..' />

                    </div>

                    <div className='textbox-moreview'>

                      <p className='titile-moreview' > {obj.prodata.name}</p>
                      <p> Language :{obj.prodata.language}</p>
                      <p> Quuntity : {obj.quantity}</p>
                      <p> Price : {obj.prodata.price}</p>

                    </div>

                  </div>








                )

                )




              }






























            </div>









          </div>

      }

    </div>
  )
}

export default Moreview_admin
