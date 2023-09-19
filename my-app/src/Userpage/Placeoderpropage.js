


import React from 'react'
import Navbars from '../UserComponts/navbar/Navbars'
import Place_Products from '../UserComponts/place_pro/Place_Products'
import Failed from '../UserComponts/Failed/Failed'
import { useState } from 'react'

function Placeoderpropage() {
  const [failed, setfailed] = useState(false)

  return (
    <div>


      {

        failed ? <Failed />

        :

        <>


         <Navbars failed={setfailed} />
             
          <Place_Products failed={setfailed}  />





        </>



      }










    </div>
  )
}

export default Placeoderpropage
