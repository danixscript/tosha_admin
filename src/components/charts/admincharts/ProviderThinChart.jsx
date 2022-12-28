import React, { PureComponent ,useState,useEffect} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


 function ProviderThinChart (props) {
  const [yAxisMax3, setYAxisMax] = useState(100);


    
  useEffect(()=>{
    // json fetch here, and stored in 'data'
  setUp()
    },[props])

  function setUp(){
    let currentMonthMax = Math.max(...props.data.map((o) =>  parseInt(o.quantity) )); // if the array has a custom object that contains 'CurrentMonth'

  setYAxisMax(currentMonthMax *1.1 ); 
  }

    return (
      <div className="h100 w100">
        <h1> המוצר שנקנה הכי הרבה פעמים מספק <span className='compenyname'>{props.data.length > 0? props.data[0].name : ''}</span></h1>

        <ResponsiveContainer width="100%" className={'chartt'} height="100%">
        <BarChart
         
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 25,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="productname" />
          <YAxis domain={[0,yAxisMax3]} dataKey="quantity" />
          <Tooltip />
          <Legend />
          <Bar dataKey="quantity"barSize={50} fill="royalblue" />
          
        </BarChart>
      </ResponsiveContainer>

       
      </div>
    );
  
}


export default ProviderThinChart 