

import React from 'react'
import "./Pro_edit.css";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "../../Constant/Axios";
import { message } from "antd";
import { useNavigate } from 'react-router-dom';


function Pro_edit(props) {

  const [image, setimage] = useState("");
  const location = useLocation();
  const [fetchdata, setfetchdata] = useState({});
  const [data, setdata] = useState("");
  const [loding, setloding] = useState(true);
  const navigate = useNavigate();

  const [values, setvalues] = useState({

    name: "",
    author: "",
    language: "",
    price: "",
    publisher: "",
    cotegory: "",
    type: ""

  })

  useEffect(() => {

    const proid = location.state;
    const jwt = localStorage.getItem("library_admin_token");

    axios("/admin/edit_pro?proid=" + proid, {
      headers: {
        "token": jwt
      }
    }).then((result) => {

      if (result.data.login_failed) {

        navigate("/admin/login");

      }

      if (result.data.flag) {

        setfetchdata(result.data.data)
        setloding(false)
        const { name, author, language, price, publisher, cotegory, type } = result.data.data
        setvalues((obj) => ({

          name: name,
          author: author,
          language: language,
          price: price,
          publisher: publisher,
          cotegory: cotegory,
          type: type
        }

        ))

      } else {
        console.log("errr")

      }

    }).catch(err => {

      props.failed(true)

    })

  }, [])

  const handilChange = (event) => {

    const { name, value } = event.target

    setvalues((obj) => ({

      ...obj,

      [name]: value


    }))

  }

  const datasubmit = (e) => {

    e.preventDefault()

    const formdata = new FormData()

    let uplod_imag = true

    if (image) {

      formdata.append("image_status", uplod_imag)

      formdata.append("image", image)

    } else {

      uplod_imag = false

      formdata.append("image_status", uplod_imag)


    }

    formdata.append("name", values.name)
    formdata.append("author", values.author)
    formdata.append("cotegory", values.cotegory)
    formdata.append("language", values.language)
    formdata.append("price", values.price)
    formdata.append("publisher", values.publisher)
    formdata.append("type", values.type)
    formdata.append("proid", fetchdata._id)





    axios.post("/admin/edit_pro", formdata,).then((result) => {

      if (result.data.flag) {

        message.success("product edited ")


      } else {

        message.error("somthing worng")

      }
    }).catch(err => {

      props.failed(true)

    })


  }

  return (

    <div>

      {

        loding ? <div className='loding-admin-edit'>   <img className='loding-icon-edit' src='../Book animation.gif' alt='loding...' />     </div>

          :




          <div className='main-edit'>

            <div className='container mainbox-edit'>

              <div className='logo-edit'>

                {

                  image ?

                    <img className='img-edit' src={image ? URL.createObjectURL(image) : null} alt='loding...' />

                    :

                    <img className='img-edit' src={`data:${fetchdata.contentType};base64,${fetchdata.imageBase64}`} alt='loding...' />



                }

                <input className='img_input-edit' type='file' onChange={(e) => { setimage(e.target.files[0]) }} />

              </div>


              <div className='form-edit'>

                <form className='formmain-edit' onSubmit={datasubmit}>

                  <label className='label-edit'> name</label><br />

                  <input className='input-edit' placeholder='Enter your full name'
                    type='text'

                    name="name"
                    value={values.name}
                    onChange={(event) => { handilChange(event) }}

                  /> <br />

                  <label className='label-edit'> author</label><br />
                  <input className='input-edit' placeholder='Enter mobile number'
                    type='text'

                    name='author'
                    value={values.author}
                    onChange={(event) => { handilChange(event) }}

                  /> <br />



                  <label className='label-edit'> language</label><br />
                  <input className='input-edit' placeholder='Enter mobile number'
                    type='text'
                   name='language'
                    value={values.language}
                    onChange={(event) => { handilChange(event) }}
                  /> <br />




                  <label className='label-edit'> price</label><br />

                  <input className='input-edit' placeholder='Enter mobile number'
                    type='text'

                    name='price'
                    value={values.price}
                    onChange={(event) => { handilChange(event) }}




                  /> <br />




                  <label className='label-edit'> publisher</label> <br />

                  <input className='input-edit' placeholder='Enter mobile number'
                    type='text'

                    name='publisher'
                    value={values.publisher}
                    onChange={(event) => { handilChange(event) }}




                  /> <br />






                  <label className='label-edit'> cotegory </label>  <br />

                  <input className='input-edit' placeholder='Enter Email id'
                    type='text'


                    name='cotegory'
                    value={values.cotegory}
                    onChange={(event) => { handilChange(event) }}

                  /> <br />




                  <label className='label-edit'>  type </label>     <br />

                  <input className='input-edit' placeholder=' Enter password'

                    // type='text'
                    name='type'
                    value={values.type}

                    onChange={(event) => { handilChange(event) }}




                  /> <br />








                  <button type='submit' className='btn-edit'> Save</button>



                </form>


              </div>





            </div>




          </div>

      }

    </div>



  )
}

export default Pro_edit
