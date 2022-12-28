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



export default function MaterialCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
      
     
        title={props.product.materialname}
        subheader={props.product.quantity + " X במלאי "}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.product.materialimg}
        alt={props.product.materialimg}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {props.product.materialname}
        </Typography>
        <Typography paragraph> נקודת איזון:  {props.product.minimum}</Typography>
        <Typography paragraph>עדכן נקודת איזון  <input onChange={props.getMinMin} type="number" placeholder={props.product.minimum} /> <button onClick={props.setMin} >עדכן</button></Typography>

        <Typography paragraph>כמות במלאי:  {props.product.quantity}</Typography>
        <Typography paragraph>עדכן כמות במלאי  <input  type="number" onChange={props.getQuantity} placeholder={props.product.quantity} /> <button onClick={props.updateQuantity} >עדכן</button></Typography>

        <Typography paragraph>נקנה במחיר :  {props.product.materialcoast}</Typography>
     
      </CardContent>
  
      
    </Card>
  );
}
