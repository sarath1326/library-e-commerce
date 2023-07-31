







import React from 'react'
import { Dna } from  'react-loader-spinner'

import "./Loding.css"

function Loding() {

    
    return (
    
    <div className='main'>

       

     

      <div className='dna'>
      
      <Dna
      visible={true}
      
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />

    </div>


    



       

        

       

      
    </div>
  )
}

export default Loding
