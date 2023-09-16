


import React from 'react'
import Proadd_admin from '../Admin componts/pro-add-admin/Proadd_admin'
import Admin_navbar from '../Admin componts/navbar-admin/Admin_navbar'
import Failed from '../UserComponts/Failed/Failed'
import { useState } from 'react'

function Proaddpage_admin() {

  const [failed, setfailed] = useState(false)

  return (
    <div>


      {
        failed ? <Failed />
          :
          <>

            <Admin_navbar  failed={setfailed} />
            <Proadd_admin failed={setfailed} />

          </>
      }









    </div>
  )
}

export default Proaddpage_admin
