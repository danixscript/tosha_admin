import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function DeleteOrder(props) {
  return (
    <Stack direction="row" spacing={2}>
    
      <Button variant="outlined" onClick={()=>{
        props.func(props.data)
      }} color="error">
        {props.text}
      </Button>
    </Stack>
  );
}
