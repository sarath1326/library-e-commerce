

import React from 'react'
import Moreview_admin from '../Admin componts/more_view/Moreview_admin'
import Admin_navbar from '../Admin componts/navbar-admin/Admin_navbar'
import Failed from '../UserComponts/Failed/Failed'
import { useState } from 'react'

function Moreviewpageadmin() {

  const [failed, setfailed] = useState(false)

  return (
    <div>

     {
      failed ?   <Failed />

      : 

      <>

      <Admin_navbar failed={setfailed} />

      <Moreview_admin failed={setfailed} />


    </>
     }




    </div>
  )
}

export default Moreviewpageadmin
