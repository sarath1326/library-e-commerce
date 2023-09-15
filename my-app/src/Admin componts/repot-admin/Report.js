


import React from 'react'
import "./Report.css"
import {LineChart ,XAxis,CartesianGrid,YAxis,Tooltip,Legend,Line,BarChart,Bar} from "recharts"

function Report() {

    const data=[
        {name:"users",value:2000},
        {name:"sales",value:5000},
        {name:"products",value:20000},
        



    ]

  return (
    <div>

        <div className='main-report'> 

        <h1> helooo</h1>


        <LineChart width={730} height={250} data={data}
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
