



import React from 'react'
import './Myoder.css'
// import Navbars from './Navbars'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import axios from "../../Constant/Axios"
import { useEffect,useState } from 'react'



function Myoder() {

  const navigate=useNavigate()

  const [fetchdata,setfetchdata]=useState([])



  useEffect(()=>{

    
    console.log("getkkkkkkk");

    axios("/user/myorder",{
      
      headers:{

        "jwt-token": localStorage.getItem("library_token")


      }


    }).then((respo)=>{

      const result= respo.data

      if(result.authfaild){

        navigate("/Login")
      }

      if(result.flag){


         setfetchdata(result.data)
        
         console.log(result.data)
     
     
     
      }else{

        console.log("my oder is empty")
      }



     

    }).catch(err=>{

      console.log('errr')


    })

  
  
  
  
  
  
  
  },[])



  
 

  
  
 

  function view_pro(cartid){



  
     navigate(`/placepro/${cartid}`)

     
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
          
         
          <th>Delevery Date</th>
          <th>Price</th>
          <th> Payment type</th>
          <th>Status</th>
          <th> View product</th>
        </tr>
      </thead>


      <tbody>

      {
        
        fetchdata.map((obj)=>

        (

          <tr>
         
          
          <td>{obj.delevary_date}</td>
         
          <td>{obj.totalAmount}</td>
          
          <td>{obj.pyment_method}</td>
          
          <td>{obj.status}</td>
          
          <td> <button className='view-btn' onClick={()=>{view_pro(obj._id)}}  > View product</button></td>
        
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

export default Myoder
