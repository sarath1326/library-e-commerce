


import React from 'react'
import Admin_navbar from '../Admin componts/navbar-admin/Admin_navbar'
import Report from '../Admin componts/repot-admin/Report'
import Failed from '../UserComponts/Failed/Failed'
import { useState } from 'react'


function Report_page() {

  
  const [failed, setfailed] = useState(false)
 
  return (
    <div>

      {
        failed ? <Failed />
          :
          <>

            <Admin_navbar />
            <Report />

          </>
      }





    </div>
  )
}

export default Report_page
