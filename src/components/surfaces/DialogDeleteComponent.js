import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import ButtonPrimary from '../buttons/ButtonPrimary';
import Typography from '@mui/material/Typography';
import TextRequired from '../textField/TextRequired';

export default function DialogDeleteComponent(props) {
    
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [correo, setCorreo] = React.useState('');
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    
    return (
        <>
            <ButtonPrimary
                text={props.boton}
                variant={props.variant}
                color={props.color}
                size={props.size}
                click={() => {setOpen(true)}}
            />
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={() => {setOpen(false);}}
                aria-labelledby="DialogDeleteComponent"
            >
                <DialogTitle id="DialogDeleteComponent">
                <Typography variant="h4.secondary" align="left" gutterBottom component="div">{props.titulo}</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography variant="h4.secondary" align="left" gutterBottom component="div">{props.dialogo}</Typography>
                    </DialogContentText>
                    <TextRequired
                        label="Correo"
                        variant="outlined"
                        change={e => setCorreo(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <ButtonPrimary 
                        autoFocus
                        text="Aceptar"
                        variant="outlined"
                        color="error"
                        click={() => { props.changeWord("Hola"); setOpen(false); }}
                    />
                    <ButtonPrimary
                        text="Cancelar"
                        variant="outlined"
                        click={() => {setOpen(false);}}
                    />
                </DialogActions>
            </Dialog>
        </>
    );
}