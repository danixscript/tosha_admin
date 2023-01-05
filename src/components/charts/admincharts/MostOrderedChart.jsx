import React, { PureComponent,useState,useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


 function MostOrderedChart (props) {
   
  const [yAxisMax4, setYAxisMax] = useState(100);


  useEffect(()=>{
    // json fetch here, and stored in 'data'
  setUp()
    },[props])

  function setUp(){
    let currentMonthMax = Math.max(...props.data.map((o) =>  parseInt(o.quantitysum) )); // if the array has a custom object that contains 'CurrentMonth'

    setYAxisMax(currentMonthMax *1.1 ); 
  }

    return (
      <div className="h100 w100">
        <h1>       המוצר הנרכש ביותר </h1>

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
          <XAxis dataKey="productname" interval={0} />
          <YAxis domain={[0,yAxisMax4]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="quantitysum" fill="#82ca9d" />
          <Bar dataKey="name" fill="#82aa5d" />


        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  
}


export default MostOrderedChart 