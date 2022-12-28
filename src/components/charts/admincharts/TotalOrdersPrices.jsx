import React, { PureComponent, useEffect,useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


 function TotalOrdersPrices (props) {
   
    const [yAxisMax2, setYAxisMax] = useState(100);


    
    useEffect(()=>{
      // json fetch here, and stored in 'data'
    setUp()
      },[props])

  function setUp(){
    let currentMonthMax = Math.max(...props.data.map((o) =>  parseInt(o.totalordersprice) )); // if the array has a custom object that contains 'CurrentMonth'

    setYAxisMax(currentMonthMax *1.1 ); 
  }
    

    return (
      <div className="h100 w100">
        <h1>             מאיזה ספק קניתי בהכי הרבה כסף </h1>
        <p>סכום כל ההזמנות שלי לפי ספק</p>

        <ResponsiveContainer width={'100%'} aspect={3} >
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
          <XAxis dataKey="providername" interval={0} />
          <YAxis domain={[0,yAxisMax2]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalordersprice" fill="#82ca9d" />


        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  
}


export default TotalOrdersPrices 