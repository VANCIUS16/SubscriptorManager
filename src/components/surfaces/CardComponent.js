import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonPrimary from '../buttons/ButtonPrimary';

export default function CardComponent(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{props.Titulo1}</Typography>
        <Typography variant="h5" component="div">{props.Titulo2} {props.IconTitle}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">{props.SubTitulo1}</Typography>
        <Typography variant="body2">{props.Cuerpo1}<br />{props.Cuerpo2}</Typography>
      </CardContent>
      <CardActions>
        <ButtonPrimary 
         color={props.color}
         variant={props.variant}
         click={props.click}
         size={props.size}
         text={props.boton}/>
      </CardActions>
    </Card>
  );
}
