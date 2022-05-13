import React, {useState, Fragment} from 'react';
import { styled, useTheme, createTheme  } from '@mui/material/styles';
import Welcome from '../vistas/Welcome';
import Test from '../Test';
import Home from '../vistas/Home';
//import DrawerData from './DrawerData';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import AccessTime from '@mui/icons-material/AccessTime'
import { NavLink, Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';

const drawerWidth = 200;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {...openedMixin(theme), '& .MuiDrawer-paper': openedMixin(theme),}),
        ...(!open && {...closedMixin(theme), '& .MuiDrawer-paper': closedMixin(theme),}),
    }),
);

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});
  
export default function NavBar(props) {

    const DrawerData = [
        {
            id:     1,
            text:   "Inicio",
            url:    "/inicio",
            icon:   <HomeIcon sx={{color: "#397a31"}}/>,
        },
        {
            id:     2,
            text:   "Login",
            url:    "login",
            icon:   <AccessTime sx={{color: "#df0000"}}/>,
        },
        {
            id:     3,
            text:   "Test",
            url:    "test",
            icon:   <AccessTime sx={{color: "#df0000"}}/>,
        },
        {
            id:     4,
            text:   "Home",
            url:    "home",
            icon:   <AccessTime sx={{color: "#df0000"}}/>,
        },
        {
            id:     5,
            text:   "Config",
            url:    "config",
            icon:   <SettingsIcon sx={{color: "#000"}}/>,
        },
        {
            id:     6,
            text:   "Inicio 2",
            url:    "/inicio2",
            icon:   <HomeIcon sx={{color: "#397a31"}}/>,
        }
    ]
    
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => { setOpen(true) }
    const handleDrawerClose = () => { setOpen(false) }
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleChange = (event) => { setAuth(event.target.checked) };
    const handleMenu = (event) => { setAnchorEl(event.currentTarget) };
    const handleClose = () => { setAnchorEl(null) };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar 
            position="fixed" 
            open={open}  
            sx={{
                bgcolor: '#c60000',
                color:'#e8e8e8'
            }}>
                <Toolbar>
                    <IconButton
                    color="inherit"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                    marginRight: '36px',
                    ...(open && { display: 'none' }),
                    }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid container spacing={1}>
                    <Grid item xs={5}/>
                        <Grid item xs={2}>
                            <Typography variant="h6" noWrap component="div" align="center">
                                Subscriptor Manager
                            </Typography>
                        </Grid>
                        <Grid item xs={4}/>
                        <Grid item xs={1}>
                            {auth && (
                                <div>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                        }}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </Menu>
                                </div>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {DrawerData.map((item) => { const {text, icon, url, id } = item;
                        return(
                            <Fragment key={id}>
                            <NavLink to={url}>
                                <ListItem button key={id}>
                                    <ListItemIcon >{icon}</ListItemIcon>
                                    <ListItemText>
                                    <Typography variant="text" component="div" sx={{color: "#000"}}>{text}</Typography>
                                    </ListItemText>
                                </ListItem>
                                <Divider/>
                            </NavLink>    
                            </Fragment>                        
                        );
                    })}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}><DrawerHeader />
               {props.main}
            </Box>
        </Box>
    );
}