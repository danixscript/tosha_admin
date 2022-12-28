import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import ErrorButton from './Button';

export default function DeleteAlert(props) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
    
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        אם אתה מוחק את הספק הזה לא תוכל לקנות מוצרים ממנו יותר לעולם — <strong>{props.provider.name},{props.provider.email},{props.provider.cat}</strong>
     <ErrorButton id={props.provider.id} func={props.removeProvider} text={props.provider.name} />   
      
       <button onClick={props.closePopUp}>ביטול</button>

      </Alert>
   
    </Stack>
  );
}
