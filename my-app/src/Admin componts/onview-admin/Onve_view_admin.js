

import React from 'react'
import "./Oneview_admin.css";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "../../Constant/Axios";



function Onve_view_admin(props) {

    const location = useLocation();

    const [finddata, setfinddata] = useState({});

    const [loding, setloding] = useState(true);

    useEffect(() => {

        const proid = location.state;

        axios("/admin/oneview?proid=" + proid).then((result) => {

            if (result.data.flag) {

                setfinddata(result.data.data);

                setloding(false);




            } else if (result.data.err) {

                console.log("err find");

            } else {

                console.log("nodata");
            }



        }).catch(err => {

            props.failed(true);

        })




    }, []);




    return (
        <div>

            {

                loding ? <div className='loding-oneview-admin'> <img className='loding-icon-oneview-admin' src='../Book animation.gif' alt='loding..' />    </div>

                    :




                    <div className='onview-admin-main'>



                        <div className='box-oneview-admin'>

                            <div className='image-oneview-admin'>

                                <img className='img-onview-admin' src={`data:${finddata.contentType};base64,${finddata.imageBase64}`} alt='loding...' />


                            </div>

                            <div className='text-oneview-admin'>

                                <h5 className='title-oneview-admin'>{finddata.name}</h5>


                                <p>
                                    Auther : {finddata.author}<br />
                                    Languge :{finddata.language} <br />
                                    Type :{finddata.type} <br />
                                    Publisher :{finddata.publisher} <br />
                                    price :{finddata.price}/-



                                </p>





                            </div>



                        </div>











                    </div>









            }

        </div>
    )
}

export default Onve_view_admin
