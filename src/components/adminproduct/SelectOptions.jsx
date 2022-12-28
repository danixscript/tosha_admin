import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectOptions(props) {
 

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel   id="demo-simple-select-label">Filter</InputLabel>
        <Select
        onChange={props.filterCase}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.filter}
          label="Filter"
        
        >
          <MenuItem value={'expensive'}>היקרים ביותר</MenuItem>
          <MenuItem value={'cheep'}>הזולים ביותר</MenuItem>
          <MenuItem value={'nonactive'}> לא מוצגים באתר</MenuItem>

          <MenuItem value={"finished"}>אזלו במלאי</MenuItem>
          <MenuItem value={'almostfinished'}>קרובים להיגמר במלאי</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}
