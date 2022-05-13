import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import SubsTable from '../common/SubsTable';
import CardComponent from '../../components/surfaces/CardComponent';
import DialogDeleteComponent from '../../components/surfaces/DialogDeleteComponent';
import DialogDateComponent from '../../components/surfaces/DialogDateComponent';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Inicio() {

    const [word, setWord] = useState("Data");
    console.log(word)
    const [fecha, setFecha] = React.useState('');

    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h4" align="left" gutterBottom component="div" color={'AppWorkspace'}>
                        Bienvenido a tu WORKSPACE
                    </Typography>
                    <Typography variant="h4.secondary" align="left" gutterBottom component="div">
                        Hola!!! Aquí tienes la opción de poder modificar a tu gusto tu lista de suscriptores!!!
                    </Typography>
                    <div>
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={2}
                        >
                            <CardComponent
                                Titulo2 = "Agregar Suscriptor"
                                IconTitle = {<AddReactionIcon color="success"/>}
                                Cuerpo1 ="Aqui podrás agregar un suscriptor nuevo a tu cuenta!"
                                boton={
                                    <DialogDateComponent 
                                        variant="contained" 
                                        boton="Abir" 
                                        color="success" 
                                        size="small"
                                        titulo="NUEVOS SUSCRIPTOR!!!"
                                        IconTitle = {<AddReactionIcon color="success" fontSize='small'/>}
                                        dialogo="Por favor llena los campos requeridos para agregar un usuario nuevo."
                                />}
                            />
                            <CardComponent
                                Titulo2 ="Editar Suscriptor"
                                IconTitle={<EditIcon color="warning"/>}
                                Cuerpo1 ="Aqui podrás editar un suscriptor existente de tu cuenta!"
                                boton={
                                    <DialogDateComponent 
                                        variant="contained" 
                                        boton="Abir" 
                                        color="warning" 
                                        size="small"
                                        titulo="EDITAR SUSCRIPTOR"
                                        IconTitle = {<EditIcon color="warning" fontSize='small'/>}
                                        dialogo="Modifica los datos que quieras cambiar, dale a 'Guardar' y listo!!!"
                                        tituloFecha="Modificar Fecha de Subscripción"
                                    />
                                }
                            />
                            <CardComponent
                                Titulo2="Eliminar Suscriptor"
                                IconTitle={<PersonRemoveIcon color="error"/>}
                                Cuerpo1="Aqui podrás remover a un suscriptor de tu cuenta!"
                                boton={
                                    <DialogDeleteComponent 
                                    variant="contained" 
                                    boton="Abir" 
                                    color="error" 
                                    size="small"
                                    titulo="REMOVER SUSCRIPTOR!!!"
                                    IconTitle = {<PersonRemoveIcon color="error" fontSize='small'/>}
                                    dialogo="Ingresa el correo del suscriptor que quieras remover. Esta acción no se puede deshacer, ojo!!!"
                                />}
                            />
                        </Stack>
                    </div>
                    </CardContent>
                    </Card>
                    <br/>
                    <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                    <Typography variant="h4" align="left" gutterBottom component="div" color={'AppWorkspace'}>
                        Tabla de Suscriptores
                    </Typography>
                    <Typography variant="h4.secondary" align="left" gutterBottom component="div">
                        Aquí se muestra la información básica de tus suscriptores.
                    </Typography>
                    <SubsTable />
                </CardContent>
            </Card>
        </>
    );
}

 {/*<Grid container spacing={0}>
    <Grid item xs={2}/>
    <Grid item xs={2}>
        <CardComponent
            Titulo2 = "Agregar Suscriptor"
            IconTitle = {<AddReactionIcon color="success"/>}
            Cuerpo1 ="Aqui podrás agregar un suscriptor nuevo a tu cuenta!"
            boton={
                <DialogDateComponent 
                    variant="contained" 
                    boton="Abir" 
                    color="success" 
                    size="small"
                    titulo="NUEVOS SUSCRIPTOR!!!"
                    IconTitle = {<AddReactionIcon color="success" fontSize='small'/>}
                    dialogo="Por favor llena los campos requeridos para agregar un usuario nuevo."
            />}
        />
    </Grid>
    <Grid item xs={1}/>
    <Grid item xs={1}>
    <CardComponent
            Titulo2 ="Editar Suscriptor"
            IconTitle={<EditIcon color="warning"/>}
            Cuerpo1 ="Aqui podrás editar un suscriptor existente de tu cuenta!"
            boton={
                <DialogDateComponent 
                    variant="contained" 
                    boton="Abir" 
                    color="warning" 
                    size="small"
                    titulo="EDITAR SUSCRIPTOR"
                    IconTitle = {<EditIcon color="warning" fontSize='small'/>}
                    dialogo="Muy fácil!!! Modifica los datos que quieras cambiar, dale a 'Guardar' y listo!!!"
                    tituloFecha="Modificar Fecha de Subscripción"
                />
            }
        />
    </Grid>
    <Grid item xs={2}/>
    <Grid item xs={1}>
        <CardComponent
            Titulo2="Eliminar Suscriptor"
            IconTitle={<PersonRemoveIcon color="error"/>}
            Cuerpo1="Aqui podrás remover a un suscriptor de tu cuenta!"
            boton={
                <DialogDeleteComponent 
                variant="contained" 
                boton="Abir" 
                color="error" 
                size="small"
                titulo="REMOVER SUSCRIPTOR!!!"
                IconTitle = {<PersonRemoveIcon color="error" fontSize='small'/>}
                dialogo="Selecciona el suscriptor que quieras remover
                ya lo podras agreguar de nuevo!!!"
            />}
        />
    </Grid>
</Grid>*/}