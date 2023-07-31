



import React from 'react'
import "./Admin_navbar.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs"

import { BsFillCartDashFill,BsFillBagCheckFill,BsFillHouseDoorFill } from "react-icons/bs";



function Admin_navbar() {
  
  const navigate=useNavigate()
  
    return (
    <div>



        
<Navbar expand="lg" className="bg-body-tertiary-adminnavbar ">
      <Container fluid>
      <img src='logo li.png' alt='loding..' />
        {/* <Navbar.Brand href="#" className='navhad'>Laibrary</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" className='togil' />
        <Navbar.Collapse id="navbarScroll" className='colaps'>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <h6  className='admin-title'    > Admin Port </h6>
            
            <Nav.Link  className='navlink'   > <BsFillHouseDoorFill className='icons-nav'/> Home </Nav.Link>
            
            <Nav.Link  className='navlink'  onClick={()=>{navigate("/admin/alloders")}}    > All Oders </Nav.Link>

            {/* <Nav.Link className='navlink'    ><BsFillBagCheckFill className='icons-nav'/>    My Oders </Nav.Link> */}

           <span className='logintext-moreview'> Login </span>
            <Nav.Link className='icon-moreview' onClick={()=>{navigate("/admin/login")}}>  <BsFillPersonFill /> </Nav.Link>
            
            
          
            </Nav>
            
           {/* <NavDropdown className='navdrop' title=<VscAccount/> id="navbarScrollingDropdown">
           
              <NavDropdown.Item className='ndi'   >Login</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> 
            </NavDropdown>  */}
         
          
        </Navbar.Collapse>
      </Container>
      
    </Navbar>

       





         




      









      
    </div>
  )
}

export default Admin_navbar
