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
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    /*const [data, setData] = React.useState({
        Nickname: "",
        Nombre: "",
        Apellido: "",
        Correo: "",
        Fecha: ""
    });

    const changeStateData = () => {
        setData(e => ({
            ...e, 
            'Nickname' : Nickname,
            'Nombre' : Nombre,
            'Apellido' : Apellido,
            'Correo' : Correo,
            'Fecha' : Fecha
            })
        )
        //console.log(data)
    }
*/

    const [nickanme, setNickanme] = React.useState('');
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [correo, setCorreo] = React.useState('');
    const [fecha, setFecha] = React.useState('');
    
    const [imputError, setImputError] = React.useState(false);
    //console.log(data)
    const DataJSON = {
        'Nickname' : nickanme,
        'Nombre' : nombre,
        'Apellido' : apellido,
        'Correo' : correo,
        'Fecha' : fecha
    }

    //console.log(DataJSON);
    const handleClickOpen = () => { setOpen(true) };
    const handleClose = () => { 
        setOpen(false)
        setImputError(false)
        setNickanme('')
        setNombre('')
        setApellido('')
        setCorreo('')
        setFecha('')
    };

    const SendData = () => {        
        if(nickanme === '' || nickanme === 0 || nombre === '' || nombre === 0 || 
        apellido === '' || apellido === 0 || correo === '' || correo === 0){
            /*
            if (setImputError(true)){
                console.log("Se envió la data")
            }
            */ 
            console.log("Faltan campos")
            setImputError(true) 
        }else{
            handleClose()
            console.log("Campos llenados")
        }
    }

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
                <Typography variant="h4.secondary" align="left" gutterBottom component="div">{props.titulo} {props.IconTitle}</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography variant="h4.secondary" align="left" gutterBottom component="div">{props.dialogo}</Typography>
                    </DialogContentText>
                    <TextRequired
                        label="Nickname"
                        name="Nickname"
                        variant="outlined"
                        error={imputError}
                        change={e => setNickanme(e.target.value)}
                    />
                    <TextRequired
                        label="Nombre"
                        variant="outlined"
                        error={imputError}
                        change={e => setNombre(e.target.value)}
                    />
                    <TextRequired
                        label="Apellido"
                        variant="outlined"
                        error={imputError}
                        change={e => setApellido(e.target.value)}
                    />
                    <TextRequired
                        label="Correo"
                        variant="outlined"
                        error={imputError}
                        change={e => setCorreo(e.target.value)}
                    />
                    <DatepickerComponent 
                        titulo="Agregar Fecha de Subscripción"
                        variant="outlined"
                        error={imputError}
                        change={e => setFecha(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <ButtonPrimary autoFocus click={SendData} text="Aceptar"/>
                    <ButtonPrimary click={handleClose} autoFocus text="Cancelar"/>
                </DialogActions>
            </Dialog>
        </>
    );
}