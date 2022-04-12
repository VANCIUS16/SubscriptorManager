import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextRequired(props) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          fullWidth 
          size="small"
          variant={props.variant}
          error={props.error}
          label={props.label}
          id={props.id}
          helperText={props.helperText}
          onChange={props.change}
        />
      </div>
    </Box>
  );
}