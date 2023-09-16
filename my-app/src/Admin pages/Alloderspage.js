

import React from 'react'
import Alloders_admin from '../Admin componts/all-oders-admin/Alloders_admin'
import Admin_navbar from '../Admin componts/navbar-admin/Admin_navbar'
import Failed from "../UserComponts/Failed/Failed"
import { useState } from 'react'

function Alloderspage() {

  const [failed,setfailed]=useState(false)

  return (
    <div>

      {

        failed ? <Failed />

        :

        <>

        <Admin_navbar failed={setfailed} />

        <Alloders_admin failed={setfailed} />


      </>




      }


    






    </div>
  )
}

export default Alloderspage
