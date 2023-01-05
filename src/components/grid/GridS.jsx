import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ChartFull from '../charts/ChartFull';

import ChartBar from '../charts/CharBar';
import TestChart from '../charts/TestChart';
import MostOrderedChart from '../charts/admincharts/MostOrderedChart';
import ProviderThinChart from '../charts/admincharts/ProviderThinChart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GridS(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={8}>
        <Grid xs={6} md={8}>
          <Item className='w100 h100'>
         
         <div className="chartdiv">
         <TestChart orderStats={props.orderStats} />
         </div>
          
          </Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item className='w100 h100'>
            <h1>      הזמנות מוצרים לפי יום </h1>
            <div className="chartdiv">
            <ChartFull orderStats={props.orderStats}/>

            </div>

           

          </Item>
        </Grid>
        <Grid xs={8} md={4}>
          <Item className='w100 h100 '>

<div className="chartdiv2 paddchard">
<ChartBar  data={props.statsState}/>
</div>
          </Item>
        </Grid>
        <Grid xs={5} md={8}>
          <Item className='w100 h100 '>
          <div className="chartdiv2 paddchard">
       
          <div className="optionDiv w100">
   {props.providersState.length > 0? 
             <select onChange={props.changeProvider} name="" id="">
              {props.providersState.map((e)=>{
                return(
                  <option value={e.id}>{e.name}</option>
                )
              })}
            
             
            
            </select>
            :""}
   </div>
          <ProviderThinChart providers={props.providersState}  data={props.topProducts}/>


          </div>
          </Item>
        </Grid>



      </Grid>
    </Box>
  );
}
