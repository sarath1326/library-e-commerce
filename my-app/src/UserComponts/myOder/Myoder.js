



import React from 'react'
import './Myoder.css'
// import Navbars from './Navbars'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';



function Myoder() {

  const navigate=useNavigate()

  
  
 

  function view_pro(){

    navigate("/placepro")

     
  }







  
    return (
    <div>

{/* <Navbars/> */}

<div className='container'>
    
  
  
   <div className='myoder-item'>

   {/* <Table striped bordered hover>
  
  <tbody>
    <tr>
     
      <td > <img src='https://dcbookstore.com/uploads/product/images/bk_9761.jpg ' alt='Loading....' className='myoder-img'/> </td>
     
      <td className='myoder-td'>vellapayathra</td>
      
      <td className='myoder-td'>850/-</td>
      
      <td className='btn-td' > <button className='myoder-btn'>-</button >       <span>5 </span>    <button className='myoder-btn'>+</button>          </td>
     
      <td className='myoder-icon' > <BsFillTrash3Fill className='icom'  /> </td>
   
    </tr>

    </tbody>

    </Table> */}


       

<Table striped bordered hover>
      <thead>
        <tr>
          <th>Oder ID</th>
         
          <th>Delevery Date</th>
          <th>Price</th>
          <th> Payment type</th>
          <th>Status</th>
          <th> View product</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          
          <td>Otto</td>
          <td>850</td>
          <td>cod</td>
          <td>placed</td>
          <td> <button className='view-btn' onClick={view_pro}   > View product</button></td>
        </tr>
        </tbody>
        </Table>

















    </div>





    










    










</div>
  

      
   
   
   
   
   
   
   
   
   
   
   
   
   
    </div>
  )
}

export default Myoder
