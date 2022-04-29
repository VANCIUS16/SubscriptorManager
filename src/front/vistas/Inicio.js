import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import SubsTable from '../common/SubsTable';
import CardComponent from '../../components/surfaces/CardComponent';
import DialogDeleteComponent from '../../components/surfaces/DialogDeleteComponent';
import DialogDateComponent from '../../components/surfaces/DialogDateComponent';

export default function Inicio() {

    const [word, setWord] = useState("Data");
    console.log(word)
    const [fecha, setFecha] = React.useState('');
    //console.log(fecha)

    return (
        <Box>
            <Paper>
                <Typography variant="h4" align="left" gutterBottom component="div" color={'AppWorkspace'}>WORKSPACE</Typography>
                <Typography variant="h4.secondary" align="left" gutterBottom component="div">
                    Hola!!! Aquí tienes la opción de poder modificar a tu gusto tu lista de suscriptores!!!
                </Typography>
                <Grid container spacing={0}>
                <Grid item xs={2}/>
                <Grid item xs={2}>
                    <CardComponent
                        Titulo2 ="Agregar Suscriptor"
                        Cuerpo1 ="Aqui podrás agregar un suscriptor nuevo a tu cuenta!"
                        boton={
                            <DialogDateComponent 
                            variant="contained" 
                            boton="Abir" 
                            color="success" 
                            size="small"
                            titulo="NUEVOS SUSCRIPTOR!!!"
                            dialogo="Ya casi!! Por favor llena los campos requeridos para agregar exitosamente a un usuario nuevo!!!"
                            tituloFecha="Agregar Fecha de Subscripción"
                            change={e => setFecha(e.target.value)}
                        />}
                    />
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={1}>
                <CardComponent
                        Titulo2 ="Editar Suscriptor"
                        Cuerpo1 ="Aqui podrás editar un suscriptor existente de tu cuenta!"
                        boton={
                            <DialogDateComponent 
                                variant="contained" 
                                boton="Abir" 
                                color="warning" 
                                size="small"
                                titulo="EDITAR SUSCRIPTOR"
                                dialogo="Muy fácil!!! Modifica los datos que quieras cambiar, dale a 'Guardar' y listo!!!"
                                tituloFecha="Modificar Fecha de Subscripción"
                                change={e => setFecha(e.target.value)}
                            />
                        }
                    />
                </Grid>
                <Grid item xs={2}/>
                <Grid item xs={1}>
                <CardComponent
                        Titulo2="Eliminar Suscriptor"
                        Cuerpo1="Aqui podrás remover a un suscriptor de tu cuenta!"
                        boton={
                            <DialogDeleteComponent 
                            variant="contained" 
                            boton="Abir" 
                            color="error" 
                            size="small"
                            titulo="REMOVER SUSCRIPTOR!!!"
                            dialogo="Selecciona el suscriptor que quieras remover
                            ya lo podras agreguar de nuevo!!!"
                            changeWord={word => setWord(word)}
                        />}
                    />
                </Grid>
            </Grid>
            <br/>
            <Typography variant="h4.secondary" align="left" gutterBottom component="div">
                    Aquí se muestra la información básica de tus suscriptores, los que estan por caducar y
                    los nuevos que se vayan agregando. 
                </Typography>
                <SubsTable />
            </Paper>
        </Box>
    );
}
