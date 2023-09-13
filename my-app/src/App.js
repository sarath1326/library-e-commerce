


import React from 'react'
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route}from "react-router-dom"

import Homepage from './Userpage/Homepage';
import Cartpage from './Userpage/Cartpage';
import Myoderpage from './Userpage/Myoderpage';
import Oneviewpage from './Userpage/Oneviewpage';
import View from './Userpage/Context/Viewcontext';
import Username from "./Userpage/Context/Usernamecontext"



import Placeoderpage from './Userpage/Placeoderpage';
import Signuppage from './Userpage/Signuppage';
import AddAdresspage from './Userpage/AddAdresspage';
import Loginpage from './Userpage/Loginpage';
import Placeoderpropage from './Userpage/Placeoderpropage';
import Proaddpage_admin from './Admin pages/Proaddpage_admin';
import Categorypage from './Userpage/Categorypage';
import Signle_buypage from './Userpage/Signle_buypage';

import Admin_home_page from './Admin pages/Admin_home_page';
import Alloderspage from './Admin pages/Alloderspage';
import Moreviewpageadmin from './Admin pages/Moreviewpageadmin';
import Loginpageadmin from './Admin pages/Loginpage';
import Oneviewadmin from './Admin pages/Oneview_admin_page';
import Pro_editpage from './Admin pages/Pro_editpage';

import Lodingpage from './Userpage/Lodingpage';
import Otp_page from './Userpage/Otp_page';

// import Plc from './UserComponts/Plc';



import Text from './UserComponts/Text';











function App() {

  const [loding,setloding]=useState(true)

  useEffect(()=>{

      setTimeout(()=>{
        
        setloding(false)

      },3000)


  },[])


  
  
  
  return (
    <div>

      
      <Username>
     <View>

      <Routes>

{/*         
      <Route element={<Lodingpage />} path='/' />

        <Route element={<Homepage/>} path='/home'   />

        <Route element={<Cartpage/>} path='/cart' />

        <Route element={<Myoderpage />}  path='/myoder'   />

        <Route element={<Oneviewpage />} path='/oneview/:proid' />

        <Route element={<Categorypage />} path='/cata/:url' />
       
        <Route element={<Otp_page />} path='/otp' />

        <Route element={<Signle_buypage />} path='/single_buy' />

       

       

        <Route element={ <Placeoderpage />} path='/plo/:total'    />

        <Route element={<Signuppage />  } path='/sig' />

        <Route element={<AddAdresspage /> } path='/Adress' />

        <Route element={<Loginpage />} path='/Login' />

        <Route element={<Placeoderpropage/>} path='/placepro/:cartid' /> */}

        <Route element={<Admin_home_page />} path='/admin' />

        <Route element={<Proaddpage_admin />} path='/admin/proadd' />

        <Route element={<Alloderspage />} path='/admin/alloders'      />

        <Route element={<Moreviewpageadmin />} path='/admin/moreview'   />

        <Route  element={<Loginpageadmin />} path='/admin/login' />

        <Route element={< Oneviewadmin />} path='/admin/oneview' />

        <Route element={<Pro_editpage/>} path='/admin/edit' />


        
        

        

        


      </Routes>

      
      
      </View>  
      </Username>    
    

    
    </div>
  )
}

export default App

