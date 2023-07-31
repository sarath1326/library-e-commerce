


import React from "react"

import "./Placeoder.css"



function Placeoder() {
  
    return (
    <div>
      

      <div className="main-plo">

        <div className="address-plo">

          <h3> Delevary Address</h3>
          <p> Cheack Your Address And Edit OR Conform</p>

          <br/><br/>

          <div className="form-plo">

          <form>

           <label> Full Name</label><br/>

           <input type="text" className="input" name="fullname"/><br/><br/>

           <label> Full Address</label><br/>

           <input type="text" className="input" name="fulladdress"/><br/><br/>

           <label> Pincode</label><br/>

           <input type="text" className="input" name="pincode" /><br/><br/>

           <label> Land Mark</label><br/>

           <input type="text" className="input" name="landmark"/><br/><br/>

           <label> Mobile no</label><br/>

           <input type="text" className="input" name="mobile"/><br/><br/>









          </form>
          
          </div>








        </div>

        <div className="payment-plo">

          <h3> Pyment Detailes</h3>

          <div className="box-plo">

            <div>

          <h5> Totle Price: 850/- </h5>
          <h5> Pyment Methode : </h5>

          <form action="/action_page.php">
  
           <input type="radio"  name="fav_language"/>
           <label for="html">COD</label><br/>
           <input type="radio" id="css" name="fav_language" value="CSS"/>
           <label for="css">Online</label><br/>


              </form> <br/><br/>

              <button className="btn-plo"> Place Oder </button>

         </div>

         



          </div>


        </div>




      </div>





    </div>
  )
}

export default Placeoder
