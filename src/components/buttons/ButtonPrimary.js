import * as React from 'react';
import Button from '@mui/material/Button';

const ButtonPrimary = (props) => {

  return (
    <Button 
    color={props.color}
    variant={props.variant}
    onClick={props.click}
    >
      {props.text}
    </Button>
  );
}

export default ButtonPrimary