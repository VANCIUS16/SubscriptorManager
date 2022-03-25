import { Typography } from '@mui/material';
import React from 'react';

export default function Welcome (){
    return(
        <>
            <Typography variant="h3" align="center" gutterBottom component="div">Welcome Page!</Typography>
            <Typography variant="h4" align="center" gutterBottom component="div">Bienvenido: Admin</Typography>
            <Typography variant="h5" align="center" gutterBottom component="div">Que gusto tenerte de vuelta!!!</Typography>
        </>
    );
}