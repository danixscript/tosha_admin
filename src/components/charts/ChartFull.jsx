
import React, { PureComponent,useEffect,useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';


function ChartFull(props) {

  const [yAxisMax8, setYAxisMax] = useState(100);


    
  useEffect(()=>{
  // json fetch here, and stored in 'data'
setUp()
  },[props])
  function setUp(){
    let currentMonthMax = Math.max(...props.orderStats.map((o) =>  parseInt(o.totalprice) )); // if the array has a custom object that contains 'CurrentMonth'

    setYAxisMax(currentMonthMax *1.1 ); 
  }
  
    return (
      <div className="h100 w100">

    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={props.orderStats}
          margin={{
            top: 20,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="totalprice" domain={[0,yAxisMax8]} />
          <Tooltip />
          <Legend />
          <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
       
          <Line type="monotone" dataKey="totalprice" stroke="#82ca9d" />

          <Line type="monotone" dataKey="totalprice" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
  }
  
  export default ChartFull;
  