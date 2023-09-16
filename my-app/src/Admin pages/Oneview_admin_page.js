

import React, { useState } from 'react'
import Admin_navbar from '../Admin componts/navbar-admin/Admin_navbar'
import Onve_view_admin from '../Admin componts/onview-admin/Onve_view_admin'
import Failed from '../UserComponts/Failed/Failed'

function Oneview_admin_page() {
  const [failed,setfailed]=useState(false)
  return (
    <div>

      {
        failed ? <Failed />
        :
        <>

      <Admin_navbar failed={setfailed} />

      <Onve_view_admin failed={setfailed} />
      
      </>


      }
      



      
    </div>
  )
}

export default Oneview_admin_page
