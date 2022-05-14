import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import * as React from 'react'
import ButtonPrimary from './components/buttons/ButtonPrimary'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

//console.log(sessionStorage.getItem('backgroundColor'))

const color1 = (value) =>{
    //sessionStorage.setItem('backgroundColor', value)
    console.log('Gris')
    console.log(value)
}

const color2 = (value) =>{
    //sessionStorage.setItem('backgroundColor', value)
    console.log('Naranja')
    console.log(value)
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Child = (props) => {
    return(
        <>
            <Grid item xs={4}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                    <Typography color="text.primary">Cambiar el fondo a Gris</Typography>
                    </CardContent>
                    <CardActions>
                    <ButtonPrimary
                        text="Cambiar Color"
                        variant="outlined"
                        color="primary"
                        size="small"
                        click={() => props.changeColor('#e8e8e8')}
                    />
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                    <Typography color="text.primary">Cambiar el fondo a Naranja</Typography>
                    </CardContent>
                    <CardActions>
                    <ButtonPrimary
                        text="Cambiar Color"
                        variant="outlined"
                        color="error"
                        size="small"
                        click={() => props.changeColor('#FF5733')}
                    />
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default Child