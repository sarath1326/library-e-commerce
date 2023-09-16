


import React from 'react'
import "./Report.css"
import { LineChart, XAxis, CartesianGrid, YAxis, Tooltip, Legend, Line, BarChart, Bar, AreaChart, Area } from "recharts"
import axios from "../../Constant/Axios"
import { useEffect, useState } from 'react'
import { message } from "antd"
import { useNavigate } from 'react-router-dom'



function Report(props) {

  const [count, setcount] = useState({})

  const [loding, setloding] = useState(true)

  const navigate = useNavigate()



  useEffect(() => {

    const jwt = localStorage.getItem("library_admin_token")


    axios("/admin/report", {

      headers: {
        "token": jwt

      }



    }).then((result) => {

      if (result.data.login_failed) {

        navigate("/admin/login")

      }

      if (result.data.err) {

        message.error("somthing err")

      } else {

        setcount(result.data.data)
        setloding(false)




      }

    }).catch(err => {

      props.failed(true)

    })



  }, [])





  const data = [
    { name: "users", value: count.users_count },
    { name: "sales", value: count.plceoder_count },
    { name: "products", value: count.products_count },




  ]

  console.log(data)

  return (
    <div>

      {loding ? <div className='loding-report'>  <img className='loding-icon-report' src='../Book animation.gif' alt='loding...' />        </div>

        :

        <div className='main-report'>




          <LineChart width={800} height={300} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <Line type="monotone" dataKey="value" stroke="#82ca9d" />
          </LineChart>




        </div>



      }

    </div>
  )
}

export default Report
