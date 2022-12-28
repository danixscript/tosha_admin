import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AcceptButton from '../buttons/AcceptButton';
import DeleteOrder from '../buttons/DeleteOrder';



export default function ProductCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
      
     
        title={props.product.itemname}
        subheader={props.product.price + " שח "}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.product.productimg}
        alt={props.product.productimg}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {props.product.itemname}
        </Typography>
        <Typography paragraph> נקודת איזון:  {props.product.minimum}</Typography>
        <Typography paragraph>עדכן נקודת איזון  <input onChange={props.getMinMin} type="number" placeholder={props.product.minimum} /> <button onClick={props.setMin} >עדכן</button></Typography>

        <Typography paragraph>כמות במלאי:  {props.product.quantity}</Typography>
        <Typography paragraph>מחיר:  {props.product.price}</Typography>
        <Typography paragraph>עדכן מחיר  <input onChange={props.getPrice} type="number" placeholder={props.product.price} /> <button onClick={props.setPrice} >עדכן</button></Typography>

      </CardContent>
      {props.product.price > 0 ?
    
    <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          {props.product.active == 1 ? 
          <DeleteOrder text="הורד מהמדף" data={props.product} func={props.removeItemFromDisplay} >   </DeleteOrder>
        :
        <AcceptButton func={props.activeProductHere} data={props.product} text="עדכון להפעלת מוצר" >  </AcceptButton>}
        </IconButton>
       
      </CardActions>
      :
      <Typography paragraph>   אתם חייבים לתת מחיר למוצר לפני שאתם מפעילים אותו</Typography>

    }
      
    </Card>
  );
}
