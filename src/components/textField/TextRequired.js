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
          error={props.error}
          required
          fullWidth 
          label={props.label}
          id={props.id}
          size="small"
          helperText={props.helperText}
        />
      </div>
    </Box>
  );
}