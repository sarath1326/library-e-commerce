

import React from 'react'
import Navbars from '../UserComponts/navbar/Navbars'
import Signle_buy from "../UserComponts/single_buy/Single_buy_oder"
import Failed from '../UserComponts/Failed/Failed'
import { useState } from 'react'

function Signle_buypage() {

  const [failed, setfailed] = useState(false)



  return (

    <div>

      {

        failed ? <Failed />

        :

        <>

          <Navbars failed={setfailed} />

          <Signle_buy failed={setfailed} />




        </>
      }












    </div>
  )
}

export default Signle_buypage
