



import React, { useState } from 'react'
import "./Navbar.css"



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { VscAccount } from "react-icons/vsc";
import { useContext } from 'react';
import { namecontext } from '../Userpage/Context/Usernamecontext'; 

import { BsFillCartDashFill,BsFillBagCheckFill,BsFillHouseDoorFill } from "react-icons/bs";

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "../Constant/Axios"






function Navbars() {


 const {nameuser}=useContext(namecontext)

 const [user,setuser]=useState('')

       


             useEffect(()=>{

             axios("/user/userdata/navbar").then((respo)=>{

              if(respo.data.flag){

                console.log(respo.data.obj)

              }else{

                console.log("plz login")
             
              }



             })
                   




             },[])


 






 







  const navigate=useNavigate()


  function home(){

  navigate("/home")

  }

  function cart(){

    navigate("/cart")

  }


  function myoder(){

  navigate("/myoder")

  }

  function login(){
    
    navigate("/login")
  
  }






  
    return (
    
    <div>


<Navbar expand="lg" className="bg-body-tertiary-navbar ">
      <Container fluid>
      <img src='logo li.png' alt='' />
        {/* <Navbar.Brand href="#" className='navhad'>Laibrary</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" className='togil' />
        <Navbar.Collapse id="navbarScroll" className='colaps'>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link  className='navlink' onClick={home}   > <BsFillHouseDoorFill className='icons-nav'/> Home </Nav.Link>
            
            <Nav.Link  className='navlink' onClick={cart}   ><BsFillCartDashFill className='icons-nav' /> Cart </Nav.Link>

            <Nav.Link className='navlink' onClick={myoder}   ><BsFillBagCheckFill className='icons-nav'/>    My Oders </Nav.Link>
            
            
          
            </Nav>
            
   { user ?    <span className='name'> {user} </span> : null    }
          
          <NavDropdown className='navdrop' title=<VscAccount/> id="navbarScrollingDropdown">
           
              <NavDropdown.Item className='ndi' onClick={login}  >Login</NavDropdown.Item>
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
