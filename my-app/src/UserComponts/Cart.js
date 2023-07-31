


import React from 'react'
import "./Cart.css"
// import Navbars from './Navbars'
import Table from 'react-bootstrap/Table';
import { BsFillTrash3Fill} from "react-icons/bs";
import { useNavigate } from 'react-router-dom';





function Cart() {

  const navigate=useNavigate()


function placeoder(){


  navigate("/plo")



}



  
    return (
   
   <div>
    {/* <Navbars/> */}

    <div className='container'>
        
      
      
       <div className='cart-item'>

       <Table striped bordered hover>
      
      <tbody>
        <tr>
         
          <td > <img src='https://dcbookstore.com/uploads/product/images/bk_9761.jpg ' alt='Loading....' className='cart-img'/> </td>
         
          <td className='cart-td'>vellapayathra</td>
          
          <td className='cart-td'>850/-</td>
          
          <td className='btn-td' > <button className='cart-btn'>-</button >       <span>5 </span>    <button className='cart-btn'>+</button>          </td>
         
          <td className='cart-icon' > <BsFillTrash3Fill className='icom'  /> </td>
       
        </tr>

        </tbody>

        </Table>

        </div>





        <div className='cart-item'>

<Table striped bordered hover>

<tbody>
 <tr>
  
   <td > <img src='https://dcbookstore.com/uploads/product/images/bk_9761.jpg ' alt='Loading....' className='cart-img'/> </td>
  
   <td className='cart-td'>vellapayathra</td>
   
   <td className='cart-td'>850/-</td>
   
   <td className='btn-td' > <button className='cart-btn'>-</button >       <span>5 </span>    <button className='cart-btn'>+</button>          </td>
  
   <td className='cart-icon' > <BsFillTrash3Fill className='icom'  /> </td>

 </tr>

 </tbody>

 </Table>

 </div>







 <div className='cart-item'>

       <Table striped bordered hover>
      
      <tbody>
        <tr>
         
          <td > <img src='https://dcbookstore.com/uploads/product/images/bk_9761.jpg ' alt='Loading....' className='cart-img'/> </td>
         
          <td className='cart-td'>vellapayathra</td>
          
          <td className='cart-td'>850/-</td>
          
          <td className='btn-td' > <button className='cart-btn'>-</button >       <span>5 </span>    <button className='cart-btn'>+</button>          </td>
         
          <td className='cart-icon' > <BsFillTrash3Fill className='icom'  /> </td>
       
        </tr>

        </tbody>

        </Table>

        </div>



         <div className='totalpricebox'>

            <div className='cart-box'> 

            <h4 id='h4'> Total Price : <span> 500</span>  </h4>

            <button onClick={placeoder}  id='btn'> Place oder</button>

            </div>



         </div>



    
    
    
    
    
    
    
    </div>
      
 
    
    
    
    
    
    </div>
  )
}

export default Cart
