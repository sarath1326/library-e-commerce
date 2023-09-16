



import React from 'react'
import "./Admin_navbar.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import { BsFillPersonFill, BsGraphUpArrow } from "react-icons/bs"
import { PiWarningCircleBold } from "react-icons/pi"
import axios from "../../Constant/Axios"
import { useState, useEffect } from 'react';
import {message} from "antd"





import { BsFillCartDashFill, BsFillBagCheckFill, BsFillHouseDoorFill } from "react-icons/bs";



function Admin_navbar(props) {

  const navigate = useNavigate()

  const [name,setname]=useState("")

  useEffect(() => {

    const jwt = localStorage.getItem("library_admin_token")


    axios("/admin/getname", {

      headers: {
        "token": jwt

      }



    }).then((respo) =>{

   
      const result= respo.data

      if(result.not_login){

         setname("")

      }else if(result.err){
        
        message.error("somthig err ! ")

      }else{

        setname(result.name)
      }

     }).catch(err=>{

      props.failed(true)

        
     })




  }, [])







  return (
    <div>




      <Navbar expand="lg" className="bg-body-tertiary-adminnavbar ">
        <Container fluid>
          <img src='../logo li.png' alt='loding..' />
          {/* <Navbar.Brand href="#" className='navhad'>Laibrary</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" className='togil' />
          <Navbar.Collapse id="navbarScroll" className='colaps'>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <h6 className='admin-title'    > Admin Port </h6>

              <Nav.Link className='navlink' onClick={() => { navigate("/admin") }}  > <BsFillHouseDoorFill className='icons-nav' /> Home </Nav.Link>

              <Nav.Link className='navlink' onClick={() => { navigate("/admin/alloders") }}> <BsFillBagCheckFill className='icons-nav' />     All Oders </Nav.Link>

              <Nav.Link className='navlink' onClick={() => { navigate("/admin/report") }}   > <BsGraphUpArrow className='icons-nav' />       Report </Nav.Link>

              <span className='logintext-moreview'> {name}</span>
              {/*             
            <Nav.Link className='icon-moreview' onClick={()=>{navigate("/admin/login")}}>  <BsFillPersonFill /> </Nav.Link> */}

              <NavDropdown className='icon-moreview text-white' title={<BsFillPersonFill className='text-white' />} >

                <NavDropdown.Item className='ndi' onClick={() => { navigate("/admin/master/login") }}   >Add new</NavDropdown.Item>

                <NavDropdown.Item className='ndi' onClick={() => { navigate("/admin/login") }}  >Login</NavDropdown.Item>






              </NavDropdown>




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
