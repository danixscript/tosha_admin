import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ErrorButton(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={()=>{props.func(props.id)}} variant="outlined" color="error">
        {props.text}
      </Button>
    </Stack>
  );
}
