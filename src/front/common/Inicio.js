import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import SubsTable from './SubsTable';
import CardComponent from '../../components/surfaces/CardComponent';

export default function Inicio() {
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
                        color="success"
                        variant="contained"
                        size="small"
                        boton="Abrir"
                        click={()=>{console.log("Clicked")}}
                    />
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={1}>
                <CardComponent
                        Titulo2 ="Editar Suscriptor"
                        Cuerpo1 ="Aqui podrás editar un suscriptor existente de tu cuenta!"
                        color="warning"
                        variant="contained"
                        size="small"
                        boton="Abrir"
                        click={()=>{console.log("Clicked")}}
                    />
                </Grid>
                <Grid item xs={2}/>
                <Grid item xs={1}>
                <CardComponent
                        Titulo2 ="Eliminar Suscriptor"
                        Cuerpo1 ="Aqui podrás remover a un suscriptor de tu cuenta!"
                        color="error"
                        variant="contained"
                        size="small"
                        boton="Abrir"
                        click={()=>{console.log("Clicked")}}
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
