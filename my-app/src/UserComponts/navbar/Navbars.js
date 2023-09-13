



import React from 'react'
import "./Navbar.css"




import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { VscAccount } from "react-icons/vsc";
import Badge from 'react-bootstrap/Badge';



import { BsFillCartDashFill,BsFillBagCheckFill,BsFillHouseDoorFill } from "react-icons/bs";

import { useNavigate } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect,useState } from 'react';
import axios from "../../Constant/Axios"
import {useDispatch} from "react-redux"
import { AddCart } from '../../redux/cart/Cart'
// import { use } from '../../../server/Routering/userRouting/userrouter';






function Navbars(props) {

  const count=useSelector((state)=>state.count)

  console.log("redux" , count)

 

  const dispatch=useDispatch()


//  const {nameuser}=useContext(namecontext);

 const [username,setusername]=useState('')
 
 const [countFlag,setcountFlag]=useState(false)

 const [login,setlogin]=useState(false)


const navigate=useNavigate();

useEffect(()=>{
  
   

  


  axios("/user/navbar/username",{
    headers:{
      
      "jwt-token" :localStorage.getItem("library_token")

    }

  }).then((result)=>{

             if(result.data.login){

              const name=result.data.user

              const count =result.data.count

              dispatch(AddCart(count))

              setusername(name.name)

              setlogin(true)



             


            
            
            }else{

              setusername("")
            }

}).catch(err=>{

  props.failed(true)

})

},[])


const Logout=()=>{

    localStorage.removeItem("library_token")

}

       
 








return (
    
    <div>


<Navbar expand="lg" className="bg-body-tertiary-navbar ">
      <Container fluid>
      <img src='../logo li.png' alt='' />
        {/* <Navbar.Brand href="#" className='navhad'>Laibrary</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" className='togil' />
        <Navbar.Collapse id="navbarScroll" className='colaps'>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link  className='navlink' onClick={()=>{navigate("/home")}}   > <BsFillHouseDoorFill className='icons-nav'/> Home </Nav.Link>
            
            <Nav.Link  className='navlink' onClick={()=>{navigate("/cart")}}   ><BsFillCartDashFill className='icons-nav' /> Cart 
            
           
              <Badge className='badg-nav' bg="success">{count.cartcount}</Badge>
            
            </Nav.Link>
            

            <Nav.Link className='navlink' onClick={()=>{navigate("/myoder")}}   ><BsFillBagCheckFill className='icons-nav'/>    My Oders </Nav.Link>
            
            
          
            </Nav>
            
    <span className='name'>{ username ? username : null  } </span>     

    
           <span className='ac-icon'> {<VscAccount />    }</span>
      
          <NavDropdown className='navdrop' title=""  id="navbarScrollingDropdown">
           
       { login ?     <NavDropdown.Item className='ndi' onClick={Logout}  >Logout</NavDropdown.Item>
   
       
       : 
       
       <NavDropdown.Item className='ndi' onClick={()=>{navigate("/login")}}  >Login</NavDropdown.Item>


          }
             
             
              <NavDropdown.Item href="#action4">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
         
          
        </Navbar.Collapse>
      </Container>
      
    </Navbar>

   




        


      
    
    
    
    </div>
  )
}

export default Navbars
