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
        subheader={props.product.price + ' ש"ח'}
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
        <Typography paragraph>עדכן נקודת איזון <br /> <input onChange={props.getMinMin} type="number" placeholder={props.product.minimum} /> <button onClick={props.setMin} >עדכן</button></Typography>

        <Typography paragraph>כמות במלאי:  
        {props.product.idprovider == 0 ?
<div className="v">                <input onChange={props.getAmountin} type="number" placeholder={props.product.quantity} /> <button onClick={props.setProductQuantity} >עדכן</button>
</div>
      :
      <p className='pnpw'>{props.product.quantity} המוצר לא שלך תצטרך לקנות</p>}
        </Typography>
        <Typography paragraph>עדכן מחיר <br /> <input onChange={props.getPrice} type="number" placeholder={props.product.price+' ש"ח'} /> <button onClick={props.setPrice} >עדכן</button></Typography>
        <Typography paragraph>מחיר:  {props.product.price}ש"ח</Typography>

      </CardContent>
      {props.product.price > 0 ?
    
    <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
         
        </IconButton>
        <IconButton aria-label="share">
          {props.product.active == 1 ? 
          <DeleteOrder text="הורד מהמדף" data={props.product} func={props.removeItemFromDisplay} >   </DeleteOrder>
        :
        <AcceptButton func={props.activeProductHere} data={props.product} text="  הוסף מוצר לתפריט" >  </AcceptButton>}
        </IconButton>
       
      </CardActions>
      :
      <Typography paragraph>   אתם חייבים לתת מחיר למוצר לפני שאתם מפעילים אותו</Typography>

    }
      
    </Card>
  );
}
