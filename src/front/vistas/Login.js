import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextRequired from '../../components/textField/TextRequired';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ButtonPrimary from '../../components/buttons/ButtonPrimary';

export default function Login() {

    const [ButtonError, SetButtonError] = useState("primary");
    const [TextError, SetTextError] = useState("");
    const [ErrorMessage1, SetErrorMessage1] = useState("");
    const [ErrorMessage2, SetErrorMessage2] = useState("");

    const SendData = () => {
        SetButtonError("error");
        SetTextError("error");
        SetErrorMessage1("Las credenciales ingresadas son incorrectas");
        SetErrorMessage2("Intentalo de nuevo");
        console.log(ButtonError);
    }

    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <Card sx={{height: 500, width: 500,}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="center">
                        <AccountCircleIcon color="primary" fontSize="large"/>
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" align="center">Login</Typography>
                    <Typography variant="body2" color="text.secondary" align="center">Ingresa tus credenciales</Typography>
                </CardContent>
                <CardContent>
                    <Typography component="div" align="center">
                        <TextRequired
                        label="Usuario"
                        id="Usr"
                        error={TextError}
                        helperText="Ingresa tu nombre de Usuario"
                        />
                        <TextRequired
                        label="Contraseña"
                        id="Pw"
                        error={TextError}
                        helperText="Ingresa tu Contraseña"
                        />
                    </Typography>
                    <Typography variant="body2" color="error" align="left">{ErrorMessage1}</Typography>
                    <Typography variant="body2" color="error" align="left">{ErrorMessage2}</Typography>
                    <Typography component="div" align="center">
                        <ButtonPrimary
                        text="Aceptar"
                        color={ButtonError}
                        variant="outlined"
                        error="true"
                        click={() => {SendData();}}
                        />
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}