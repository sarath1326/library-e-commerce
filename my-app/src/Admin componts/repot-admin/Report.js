


import React from 'react'
import "./Report.css"
import {LineChart ,XAxis,CartesianGrid,YAxis,Tooltip,Legend,Line,BarChart,Bar,AreaChart,Area} from "recharts"
import axios from "../../Constant/Axios"
import { useEffect,useState } from 'react'
import {message } from "antd"



function Report() {

  const [count,setcount]=useState({})



  useEffect(()=>{

    axios("/admin/report").then((result)=>{

      if(result.data.err){

        message.error("somthing err")
      
      }else{

        setcount(result.data.data)

        console.log( count)

    

      }

    }).catch(err=>{

    message.error("server err")

    console.log("server err:", err)

    })



  },[])





    const data=[
        {name:"users",value:count.users_count},
        {name:"sales",value:count.plceoder_count},
        {name:"products",value:count.products_count },
        



    ]

    console.log(data)

  return (
    <div>

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
      




    </div>
  )
}

export default Report
