import React, { PureComponent ,useEffect,useState} from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

 function TestChart (props) {
  
  const [yAxisMax6, setYAxisMax] = useState(100);


    
  useEffect(()=>{
  // json fetch here, and stored in 'data'
setUp()
  },[])

  function setUp(){
    let currentMonthMax = Math.max(...props.orderStats.map((o) =>  parseInt(o.totalprice) )); // if the array has a custom object that contains 'CurrentMonth'

    setYAxisMax(currentMonthMax *1.1 ); 
  }
  
    return (
      <div className="h100 w100">
        <h1>קניות שנעשו לפי תאריך</h1>
        <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={props.orderStats}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="date"  />
          <YAxis dataKey="totalprice" domain={[0,yAxisMax6]} />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="totalprice" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="" stroke="#ff7300" />
          <Scatter dataKey="name" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
      </div>
    );
  
}


export default TestChart 