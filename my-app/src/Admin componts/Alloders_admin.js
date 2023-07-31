


import React from 'react'
import Admin_navbar from './Admin_navbar'
import "./Alloders_admin.css"

import Table from 'react-bootstrap/Table';
import { BsFillTrash3Fill} from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


function Alloders_admin() {

    const navigate=useNavigate()
  
    return (
    <div>
        <Admin_navbar/>

        <div className='main-allod'>

            
            <div className=' container   tabilmain-allod'>

            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Oder id</th>
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
        <tr>
          <td>1</td>
          
          <td>5/25/23</td>
          
          <td>850</td>
          
          <td>cod</td>
          
          <td> <button onClick={()=>{navigate("/admin/moreview")}}   className='btn-allod' >  View </button>  </td>
          
          <td> placrd</td>
          
          <td><input type='date' />   </td>
          
          <td> <input type='checkbox' /></td>
         
          <td> <BsFillTrash3Fill className='icon-allod' />  </td>
        
        </tr>
        </tbody>
        </Table>






            </div>









        </div>
      









    </div>
  )
}

export default Alloders_admin
