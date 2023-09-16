


import React, { useState } from 'react'
import "./Cart.css"

import Table from 'react-bootstrap/Table';
import { BsFillTrash3Fill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "../../Constant/Axios";
import { useDispatch } from "react-redux";
import { AddCart } from "../../redux/cart/Cart";
import { message } from "antd";



function Cart(props) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [cartdata, setcartdata] = useState([]);

  const [total, settotal] = useState(0);

  const [empty, setempty] = useState(false);
  const [loding, setloding] = useState(true);






  useEffect(() => {

    axios("/user/cart", {

      headers: {

        "jwt-token": localStorage.getItem("library_token")

      }

    }).then((respo) => {

      if(respo.data.err){
        message.error("somthing worng");

      }

      if (respo.data.authfaild) {

        navigate("/login");


      } else {

        if (respo.data.flag) {

          const data = respo.data

          setcartdata(data.cartdata);

          setloding(false);

          settotal(data.total_price);

        } else {

          setempty(true);

        }
      }


    }).catch(err => {

      props.failed(true);
    });



  }, [])


  const countincriment = (index, proid) => {

    const userid = localStorage.getItem("library_token");

    cartdata[index].quantity += 1

    setcartdata([...cartdata]);

    const data = {

      userid,
      proid,
      count: 1

    }

    axios.post("/user//cart_count_change", data).then((respo) => {

    if(respo.data.err){
      message.error("somthoing worng")
    }

      if (respo.data.flag) {

        const data = respo.data;

        settotal(data.total_price);

      } else {

        message.error("somthing worng");

      }


    }).catch(err => {

      props.failed(true);

    })


  }

  const countdecriment = (index, proid) => {

    const userid = localStorage.getItem("library_token")

    if (cartdata[index].quantity === 1) {

      pro_delete(index, proid);

      return

    }

    cartdata[index].quantity -= 1

    setcartdata([...cartdata]);

    const data = {

      userid,
      proid,
      count: -1

    }


    axios.post("/user//cart_count_change", data).then((respo) => {

    if(respo.data.err){
      message.error("somthing worng")
    }

      if (respo.data.flag) {

        const data = respo.data;

        settotal(data.total_price);

      } else {

        message.error("somthig worng");

      }
    }).catch(err => {

      props.failed(true);

    });

  }

  function placeoder() {

    navigate(`/plo/${total}`);

  }


  function pro_delete(index, proid) {

    cartdata.splice(index, 1);

    setcartdata([...cartdata]);

    const count = cartdata.length;

    dispatch(AddCart(count));


    if (cartdata.length === 0) {

      setempty(true);

    } else {

      setempty(false);

    }

    const userid = localStorage.getItem("library_token");

    axios.delete(`/user/cart_delete?proid=${proid}&userid=${userid}`).then((respo) => {  

      if(respo.data.err){
        message.error("somthing err")
      }

     if (respo.data.empty) {

      } else {

        const total = respo.data.total

        settotal(total);

      }

    }).catch(err => {

      props.failed(true);

    })

  }

  const more_view = (proid) => {

    navigate(`/oneview/${proid}`);

  }



  return (

    <div className='main-cart'>


      <div className='container'>


        {empty ?

          <div className='empty-cart'>

            <img className="empty-img-cart" src='./empty-cart.jpeg' alt='loding...' />





          </div>





          :

          loding ? <div className='loding-cat'>

            <img className='loding-img-cart' src='../Book animation.gif' alt='loding..' />






          </div>



            :



            <>











              <div className='cart-item'>

                <Table striped bordered hover className='table-cart'>

                  <tbody>



                    {

                      cartdata.map((obj, index) => (




                        <tr className='tr-cart'>

                          <td > <img src={`data:${obj.cartitems.contentType};base64,${obj.cartitems.imageBase64}`} alt='Loading....' className='cart-img' /> </td>

                          <td className='cart-td'>{obj.cartitems.name} <br /><br />

                            <a className='tda-cart' onClick={() => { more_view(obj.cartitems._id) }}   > view</a>

                          </td>

                          <td className='cart-td'>



                            <br />

                            {obj.cartitems.price} /-


                          </td>

                          <td className='btn-td' >

                            <br />

                            <button className='cart-btn' onClick={() => { countdecriment(index, obj.item) }}       > - </button >




                            <span> {obj.quantity}     </span>





                            <button className='cart-btn' onClick={() => { countincriment(index, obj.item) }}       >+</button>



                          </td>

                          <td className='cart-icon' >

                            <br />

                            <BsFillTrash3Fill className='icom' onClick={() => { pro_delete(index, obj.item) }} />



                          </td>

                        </tr>



                      ))



                    }

                  </tbody>

                </Table>

              </div>















              <div className='total-box'>

                <div className='cart-box'>

                  <h4 id='h4'> Total Price : <span> {total} </span>  </h4>

                  <button onClick={placeoder} id='btn-cart'> Place oder</button>

                </div>







              </div>







            </>}


      </div>









    </div>
  )
}

export default Cart
