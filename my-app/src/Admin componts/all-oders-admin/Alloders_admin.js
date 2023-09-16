


import React from 'react'
import "./Alloders_admin.css"

import Table from 'react-bootstrap/Table';
import { BsFillTrash3Fill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "../../Constant/Axios";
import ReactPaginate from "react-paginate";
import { message } from "antd";


function Alloders_admin(props) {

  const navigate = useNavigate();

  const [loding, setloding] = useState(true);

  const [finddata, setfinddata] = useState([]);

  const [date, setdate] = useState("");


  useEffect(() => {

    const jwt = localStorage.getItem("library_admin_token");

    axios("/admin/all_oders", {

      headers: {
        "token": jwt
      }
    }).then((result) => {

      if (result.data.login_failed) {
        navigate("/admin/login");
        return
      }

      if (result.data.flag) {

        setfinddata(result.data.data);
        setloding(false);


      } else if (result.data.err) {

        message.error("somthin worng");

      } else {

        console.log("no data");

      }

    }).catch(err => {

      props.failed(true);

    })

  }, [])

  const shiping = (oderid) => {

    if (date) {

      const update = {
        oderid,
        date
      }

      axios.post("/admin/shiping", update).then((result) => {

        if (result.data.flag) {

          message.success("product ready for shipping");
        } else {

          message.error("products not shipping");
        }

      }).catch(err => {

        props.failed(true);
      })

    } else {

      message.warning("plz add delevary date");

    }

  }


  //react paginatioon start//


  const [pageNumber, setPageNumber] = useState(0);

  const userPrePage = 8;
  const pageVisited = pageNumber * userPrePage;

  const pageCount = Math.ceil(finddata.length / userPrePage);

  const changePage = ({ selected }) => {

    setPageNumber(selected);

  }


  const displyaData = finddata.slice(pageVisited, pageVisited + userPrePage)
    .map((obj, index) =>

    (


      <tr>
        <td className='td-oder'>{obj._id}</td>

        <td className='td-oder'>{obj.date}</td>

        <td className='td-oder'> {obj.totalAmount}</td>

        <td className='td-oder'>{obj.pyment_method}</td>

        <td className='td-oder'> <button onClick={() => { navigate("/admin/moreview", { state: obj }) }} className='btn-allod' >  View </button>  </td>

        <td className='td-oder'>{obj.status} </td>

        <td className='td-oder'> {obj.shiping ? obj.delevary_date : <input type='date' onChange={(e) => { setdate(e.target.value) }} />}  </td>

        <td className='td-oder'> {obj.shiping ? <input type='checkbox' checked /> : <input type='checkbox' onClick={() => { shiping(obj._id) }} />} </td>

        <td className='td-oder'> <BsFillTrash3Fill className='icon-allod' />  </td>

      </tr>



    ))


  // react pagination end //













  return (
    <div>

      {loding ?

        <div className='loding-allod'>  <img className='loding-icon' src='../Book animation.gif' alt='loding...' />             </div>

        :


        <div className='main-allod'>


          <div className=' container   tabilmain-allod'>

            <Table striped bordered hover>
              <thead >
                <tr >
                  <th >Oder id</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Pyment Method</th>
                  <th>More View </th>
                  <th> Status</th>
                  <th> Delevery Date</th>
                  <th> Shiping </th>
                  <th> Delete  </th>
                </tr>
              </thead>
              <tbody>


                {

                  displyaData


                }







              </tbody>
            </Table>

            <ReactPaginate

              previousLabel={"<"}

              nextLabel={">"}

              pageCount={pageCount}

              onPageChange={changePage}

              containerClassName={"paginationBttns"}
              pageLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />







          </div>









        </div>








      }

    </div>
  )
}

export default Alloders_admin
