import * as React from 'react';
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
import LineChart from '../../charts/LineChart';
import BarChart from '../../charts/BarChart';
import SegmentChart from '../../charts/SegmentChart';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function Inicio2() {

    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h4" align="left" gutterBottom component="div" sx={{color: '#FF5733'}}>
                        Bienvenido a tu WORKSPACE
                    </Typography>
                    <Typography variant="h4.secondary" align="left" gutterBottom component="div">
                        Hola!!! Aquí tienes la opción de poder modificar a tu gusto tu lista de suscriptores!!!
                    </Typography>
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
                                    color="#3fb42d" //#3fb42d
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
                                    color="#d3b20f"//#d3b20f 
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
                                color="#b50000" //#b50000 
                                size="small"
                                titulo="REMOVER SUSCRIPTOR!!!"
                                IconTitle = {<PersonRemoveIcon color="error" fontSize='small'/>}
                                dialogo="Ingresa el correo del suscriptor que quieras remover. Esta acción no se puede deshacer, ojo!!!"
                            />}
                        />
                    </Stack>
                </CardContent>
            </Card>
            <br/>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h4" align="left" gutterBottom component="div" sx={{color: '#FF5733'}}>
                        Tabla de Suscriptores
                    </Typography>
                    <Typography variant="h4.secondary" align="left" gutterBottom component="div">
                        Aquí se muestra la información básica de tus suscriptores.
                    </Typography>
                    <SubsTable />
                </CardContent>
            </Card>
            <br/>
            <Card  sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h4" align="left" gutterBottom component="div" sx={{color: '#FF5733'}}>
                        Bienvenido a tus Gráficas
                    </Typography>
                    <Typography variant="h4.secondary" align="left" gutterBottom component="div">
                        Aquí podrás ver graficamente tus estadisticas.
                    </Typography>
                    <Stack
                        direction="row"
                        divider={<Divider/>}
                        spacing={8}
                    >
                        <CardComponent
                            Titulo2 = "Grafica 1"
                            IconTitle = {<BarChartIcon fontSize='small' color="success"/>}
                            Cuerpo1 ={<LineChart/>}
                            
                        />
                        <CardComponent
                            Titulo2 ="Grafica 2"
                            IconTitle={<BarChartIcon fontSize='small' color="warning"/>}
                            Cuerpo1 ={<BarChart/>}
                        />
                        <CardComponent
                            Titulo2="Grafica 3"
                            IconTitle={<BarChartIcon fontSize='small' color="error"/>}
                            Cuerpo1={<SegmentChart/>}
                        />
                    </Stack>  
                </CardContent>
            </Card>
        </>
    );
}