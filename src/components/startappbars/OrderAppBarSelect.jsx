import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function OrderAppBarSelect(props) {
 

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel   id="demo-simple-select-label">Filter</InputLabel>
        <Select
        onChange={props.filterCase}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.filter}
          
        
        >
          <MenuItem value={"expensive"}> ההזמנות היקרות ביותר</MenuItem>
          <MenuItem value={"cheep"}> ההזמנות הזולות ביותר</MenuItem>
          <MenuItem value={"new"}>   הזמנות חדשות </MenuItem>
          <MenuItem value={"notactive"}>    הזמנות שלא אושרו </MenuItem>

          

         

        </Select>
      </FormControl>
    </Box>
  );
}
