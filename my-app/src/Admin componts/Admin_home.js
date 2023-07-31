


import React, { useState } from 'react'
import "./Admin_home.css"
import Admin_navbar from './Admin_navbar'
import Table from 'react-bootstrap/Table';
import { BiEditAlt } from "react-icons/bi";
import { BsFillTrash3Fill} from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "../Constant/Axios"

function Admin_home() {

const navigate=useNavigate()
const [prodata,setprodata]=useState([])


        useEffect(()=>{

          axios("/admin/viewproadmin").then((responce)=>{

            console.log(responce.data)
            
            setprodata(responce.data)


          })




        },[])







function proadd(){
   
   navigate("/admin/proadd")
}






  
    return (
    <div>

        <Admin_navbar />

        <div className='admin-home-main'>

            <h1 className='h1-admin'> All Products</h1>

            <button className='btn-admin' onClick={proadd}   > Add New </button>

            <div className='container'>  

            <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th> Category</th>
          <th> Price</th>
          
          <th>Img</th>
          <th>Edit/ Delete</th>
        </tr>
      </thead>
      <tbody>

        {

          prodata.map((obj,index)=>

          (

           
            <tr>
            <td> {index+1} </td>
            
            <td >{obj.name}</td>
            <td> {obj.cotegory}</td>
            <td>{obj.price}</td>
             
             <td> <img src={`data:${obj.contentType};base64,${obj.imageBase64}`}   />     </td>
            
            <td> <BiEditAlt className='edit-admin' />  <BsFillTrash3Fill className='delete-admin'  />  </td>
  
  
          </tr>
  






          )

          )


       

        }

        </tbody>

        </Table>

        </div>






        </div>

       






      
    </div>
  )
}

export default Admin_home
