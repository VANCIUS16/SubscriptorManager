import * as React from 'react';
import Button from '@mui/material/Button';

const ButtonColor = (props) => {

  return (
    <Button 
    sx={{ 
        bgcolor: props.color,
        '&:hover': { 
            backgroundColor: props.color,
        },
    }}
    variant={props.variant}
    onClick={props.click}
    size={props.size}
    >
      {props.text}
    </Button>
  );
}

export default ButtonColor