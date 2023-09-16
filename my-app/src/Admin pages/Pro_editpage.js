


import React from 'react'
import Admin_navbar from '../Admin componts/navbar-admin/Admin_navbar'
import Pro_edit from '../Admin componts/pro_edit/Pro_edit'
import Failed from '../UserComponts/Failed/Failed'
import { useState } from 'react'


function Pro_editpage() {

  const [failed, setfailed] = useState(false)
  return (
    <div>

      {
        failed ? <Failed />
          :

          <>

            <Admin_navbar failed={setfailed} />
            <Pro_edit failed={setfailed} />

          </>
      }







    </div>
  )
}

export default Pro_editpage
