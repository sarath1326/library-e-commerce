

import React from 'react'
import Admin_home from '../Admin componts/home-admin/Admin_home'
import Admin_navbar from '../Admin componts/navbar-admin/Admin_navbar'
import Failed from "../UserComponts/Failed/Failed"
import { useState } from 'react'


function Admin_home_page() {

  const [failed, setfailed] = useState(false)

  return (
    <div>

      {
          failed ? 
          
          <Failed />

          :

        <>

          <Admin_navbar failed={setfailed} />

          <Admin_home failed={setfailed} />


        </>



      }









    </div>
  )
}

export default Admin_home_page
