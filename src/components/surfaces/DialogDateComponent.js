import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ButtonPrimary from '../buttons/ButtonPrimary';
import Typography from '@mui/material/Typography';
import TextRequired from '../textField/TextRequired';
import DatepickerComponent from '../textField/DatepickerComponent';

export default function DialogDateComponent(props) {
    const [open, setOpen] = React.useState(false);
    /*const [data, setData] = React.useState({
        Nickname: "",
        Nombre: "",
        Apellido: "",
        Correo: "",
        Fecha: ""
    });*/

    const [nickanme, setNickanme] = React.useState('');
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [correo, setCorreo] = React.useState('');
    const [fecha, setFecha] = React.useState('');

    const frmdetails = {
        'Nickname' : nickanme,
        'Nombre' : nombre,
        'Apellido' : apellido,
        'Correo' : correo,
        'Fecha' : fecha
    }
    console.log(frmdetails);

    //console.log(data)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => { setOpen(true) };
    const handleClose = () => { 
        setOpen(false)
        setNickanme('')
        setNombre('')
        setApellido('')
        setCorreo('')
        setFecha('')
    };

    return (
        <>
            <ButtonPrimary
                text={props.boton}
                variant={props.variant}
                color={props.color}
                size={props.size}
                click={handleClickOpen}
            />
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                <Typography variant="h4.secondary" align="left" gutterBottom component="div">{props.titulo}</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography variant="h4.secondary" align="left" gutterBottom component="div">{props.dialogo}</Typography>
                    </DialogContentText>
                    <TextRequired
                        label="Nickname"
                        name="Nickname"
                        variant="outlined"
                        change={e => setNickanme(e.target.value)}
                    />
                    <TextRequired
                        label="Nombre"
                        variant="outlined"
                        change={e => setNombre(e.target.value)}
                    />
                    <TextRequired
                        label="Apellido"
                        variant="outlined"
                        change={e => setApellido(e.target.value)}
                    />
                    <TextRequired
                        label="Correo"
                        variant="outlined"
                        change={e => setCorreo(e.target.value)}
                    />
                    <DatepickerComponent 
                        titulo={props.tituloFecha}
                        change={e => setFecha(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <ButtonPrimary autoFocus click={()=> {props.changeWord("Hola"); }} text="Aceptar"/>
                    <ButtonPrimary click={handleClose} autoFocus text="Cancelar"/>
                </DialogActions>
            </Dialog>
        </>
    );
}