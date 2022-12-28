import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function MediaCard(props) {
  const [sumState, setSumState] = useState(5)

  function getSum(e) {
    let int = parseInt(e.target.value);
    setSumState(int);
  }
  return (
    <Card sx={{ maxWidth: 345 ,minHeight:400}}>
      <CardMedia
        component="img" 
        height="140"
        image={props.item.productimg}
        alt={props.item.productname}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.item.productname}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
         {props.item.name}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
         {props.item.cat}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.item.price}שח
        </Typography>

      </CardContent>
      <CardActions>
        <Button onClick={()=>{props.addProduct(props.item,sumState)}} size="small">הוסף לסל</Button>
        <select
        className=""
         onChange={getSum}
        >
          <option value="5">5</option>
          <option value="15">15</option>
          <option value="25">25</option>

        </select>
      </CardActions>
    </Card>
  );
}
