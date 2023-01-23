import React, { PureComponent,useState,useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


 function ChartBar (props) {
   
  const [yAxisMax5, setYAxisMax] = useState(100);


    
  useEffect(()=>{
    // json fetch here, and stored in 'data'
  setUp()
    },[props])

  function setUp(){
    let currentMonthMax = Math.max(...props.data.map((o) =>  parseInt(o.ordersnumber) )); // if the array has a custom object that contains 'CurrentMonth'

    setYAxisMax(currentMonthMax *1.1 ); 
  }
  
 
    return (
      <div className="h100 w100">
        <h1>הזמנות עובדים </h1>

        <ResponsiveContainer >
        <BarChart
         
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="employeename" />
          <YAxis  domain={[0,Math.floor(yAxisMax5)]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="ordersnumber" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  
}


export default ChartBar 