import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ChartMostPopular from '../charts/homecharts/ChartMostPopular';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function GridHome(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={8}>
        <Grid xs={6} md={8}>
          <Item className='w100 h100'>
         
         <div className="chartdiv">
         <h1>   המוצר שנקנה הכי הרבה פעמים  </h1>

          <ChartMostPopular data={props.mostPopular}/>

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
          
          
           
       

          </div>
          </Item>
        </Grid>



      </Grid>
    </Box>
  );
}
