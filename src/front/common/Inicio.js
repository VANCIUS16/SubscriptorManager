import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import SubsTable from './SubsTable';

export default function Inicio() {
    return (
        <Box>
            <Paper>
                <Typography variant="h4" align="left" gutterBottom component="div">Pagina Principal</Typography>
                <Typography variant="h4.secondary" align="left" gutterBottom component="div">
                    Aquí se muestra la información básica de tus suscriptores, los que estan por caducar y
                    los nuevos que se vayan agregando. 
                </Typography>
                <SubsTable />
            </Paper>
        </Box>
    );
}
