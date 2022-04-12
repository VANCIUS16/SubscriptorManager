import * as React from 'react';
import Button from '@mui/material/Button';

const ButtonPrimary = (props) => {

  return (
    <Button 
    color={props.color}
    variant={props.variant}
    onClick={props.click}
    size={props.size}
    >
      {props.text}
    </Button>
  );
}

export default ButtonPrimary