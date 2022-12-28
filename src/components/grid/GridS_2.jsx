import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


import MostOrderedChart from '../charts/admincharts/MostOrderedChart';
import TotalOrdersPrices from '../charts/admincharts/TotalOrdersPrices';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function GridS_2(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={8}>
        <Grid xs={6} md={8}>
          <Item className='w100 h100'>
         
         <div className="chartdiv">
         <TotalOrdersPrices data={props.totalOrdersPrices} />

         </div>
          
          </Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item className='w100 h100'>
         
            <div className="chartdiv">
          
            </div>

           

          </Item>
        </Grid>
        <Grid xs={8} md={4}>
          <Item className='w100 h100 '>

<div className="chartdiv2 paddchard">

</div>
          </Item>
        </Grid>
        <Grid xs={5} md={8}>
          <Item className='w100 h100 '>
          <div className="chartdiv2 paddchard">
            <label htmlFor="">הצג כמות מוצרים בגרף</label>
         
             <select onChange={props.changeLimit} name="" id="">
           
             
                  <option value={2}>2</option>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
            
             
            
            </select>
           
       
     <MostOrderedChart data={props.mostOrderedProduct} />

          </div>
          </Item>
        </Grid>



      </Grid>
    </Box>
  );
}
