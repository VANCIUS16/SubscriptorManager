import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ButtonPrimary from '../../components/buttons/ButtonPrimary';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Config() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography variant="h5" component="div">Configuración</Typography>
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={4}>                       
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                            <Typography color="text.primary">Configuración 1</Typography>
                            <Typography color="text.secondary">Explicación de la configuración 1</Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonPrimary
                                text="Abrir"
                                variant="outlined"
                                color="success"
                                />
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                            <Typography color="text.primary">Configuración 2</Typography>
                            <Typography color="text.secondary">Explicación de la configuración 2</Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonPrimary
                                text="Abrir"
                                variant="outlined"
                                color="warning"
                                />
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                            <Typography color="text.primary">Configuración 3</Typography>
                            <Typography color="text.secondary">Explicación de la configuración 3</Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonPrimary
                                text="Abrir"
                                variant="outlined"
                                color="error"
                                />
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <Typography color="text.secondary">Configuración 4</Typography>
                            <ButtonPrimary
                                text="Abrir"
                                variant="outlined"
                                color="primary"
                                />
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <Typography color="text.secondary">Configuración 5</Typography>
                            <ButtonPrimary
                                text="Abrir"
                                variant="outlined"
                                color="secondary"
                                />
                        </Item>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
