


import React, { useState } from 'react'
import "./Admin_home.css"

import Table from 'react-bootstrap/Table';
import { BiEditAlt } from "react-icons/bi";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ReactPaginate from "react-paginate"
import axios from "../../Constant/Axios"
import Swal from 'sweetalert2'
import {message } from "antd"





function Admin_home() {

  const navigate = useNavigate()
  const [prodata, setprodata] = useState([])
  


  useEffect(() => {

    axios("/admin/viewproadmin").then((responce) => {

      console.log(responce.data)

      setprodata(responce.data)



    })




  }, [])

  const moreview=(proid)=>{

    navigate("/admin/oneview",{state:proid})



  }

  const proedit=(proid)=>{

       navigate("/admin/edit",{state:proid})

  }

  const proDelete=(proid,index)=>{


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

          prodata.splice(index,1)
          setprodata([...prodata])

          const jwt= localStorage.getItem("library_admin_token")

          const data={
            proid,
            jwt
          }

          axios.delete("/admin/pro_delete?proid="+data).then((result)=>{

            if(result.data.flag){

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )

               }else{

                 message.error("somthing worng")


               }

            
          
            }).catch(err=>{

              console.log("err")

            })
          


          
        
          }
   
   
   
   
   
   
   
    })








  }


  // react pagination start //

  const [pageNumber, setPageNumber] = useState(0);

  const userPrePage = 3;
  const pageVisited = pageNumber * userPrePage;

  const pageCount = Math.ceil(prodata.length / userPrePage);

  const changePage = ({ selected }) => {

    setPageNumber(selected);

  }


  const displyaData = prodata.slice(pageVisited, pageVisited + userPrePage)
    .map((obj, index) =>

    (
      <tr className='tr-admin'  >
        {/* <td>{index+1}</td>   */}
       
        <td className='td-admin'> {obj.name}</td>
        <td className='td-admin'> {obj.cotegory}</td>
        <td className='td-admin'>{obj.price}</td>
      
        <td className='td-admin'>  <img  className='img-admin' src={`data:${obj.contentType};base64,${obj.imageBase64}`}  alt='loding...' />   </td>
        <td className='td-admin' onClick={()=>{moreview(obj._id)}}>  <button className='view-btn-admin'> view</button>     </td>
        
        <td className='td-admin'><BiEditAlt className='edit-admin' onClick={()=>{proedit(obj._id)}}    />   <BsFillTrash3Fill className='delete-admin'  onClick={()=>{proDelete(obj._id,index)}}   />   </td>




      </tr>


    ))


      // react pagination end //















  function proadd() {

    navigate("/admin/proadd")
  }







  return (
    <div className='admin-main'>


      <h1 className='title-adimn'> All Products</h1>

      <button className='add-pro-admin '  onClick={()=>{navigate("/admin/proadd")}}> Add New Products</button>

      <div className='container'>

        <Table striped bordered hover>
          <thead>
            <tr>
              
              <th className='th-admin'> Name</th>
              <th className='th-admin'>catagori</th>
              <th className='th-admin'>price</th>
              <th className='th-admin'>img</th>
              <th className='th-admin'> More View</th>
              <th className='th-admin'> Edit & Delete</th>
            </tr>
          </thead>
          <tbody>

            {displyaData}


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
  )
}

export default Admin_home
