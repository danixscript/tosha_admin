import React, { PureComponent,useState,useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


 function ChartTAvSit (props) {
   
  const [yAxisMax4, setYAxisMax] = useState(100);


  useEffect(()=>{
    // json fetch here, and stored in 'data'
  setUp()
    },[props])

  function setUp(){
    props.data.map((e)=>{
      if(e.ordertype == 'SIT'){
        e.ordertype = 'seat'
      }
    })
    let currentMonthMax = Math.max(...props.data.map((o) =>  parseInt(o.orderssumintype)     )); // if the array has a custom object that contains 'CurrentMonth'

    setYAxisMax(currentMonthMax *1.1 ); 
  }

    return (
      <div className="h100 w100">

        <ResponsiveContainer >
        <BarChart
         
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 8" />
          <XAxis dataKey="ordertype" interval={0} />
          <YAxis domain={[0,yAxisMax4]} />
          <Tooltip />
          <Legend />
          <Bar dataKey={"orderssumintype"} fill="#82ca9d" />


        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  
}


export default ChartTAvSit 