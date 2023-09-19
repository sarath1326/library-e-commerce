





import React from 'react'
import Navbars from '../UserComponts/navbar/Navbars'
import Placeoder from '../UserComponts/placeOder/Placeoder'
import Failed from '../UserComponts/Failed/Failed'
import { useState } from 'react'


function Placeoderpage() {

  const [failed, setfailed] = useState(false)


  return (
    <div>

      {

        failed ? <Failed />

           :

        <>

         <Navbars failed={setfailed} />
          <Placeoder failed={setfailed} />


        </>






      }














    </div>
  )
}

export default Placeoderpage
