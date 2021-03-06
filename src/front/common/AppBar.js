import React, {useState, Fragment} from 'react';
import { styled, useTheme } from '@mui/material/styles';
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
import NavBar from './NavBar';

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
const AppBars = styled(MuiAppBar, {
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

const DrawerData = [
    {
        id:     1,
        text:   "Inicio",
        url:    "/inicio",
        icon:   <HomeIcon/>,
    },
    {
        id:     2,
        text:   "Login",
        url:    "login",
        icon:   <AccessTime/>,
    },
    {
        id:     3,
        text:   "Test",
        url:    "test",
        icon:   <AccessTime/>,
    },
    {
        id:     4,
        text:   "Home",
        url:    "home",
        icon:   <AccessTime/>,
    },
    {
        id:     5,
        text:   "Config",
        url:    "config",
        icon:   <SettingsIcon/>,
    }
]

export default function AppBar (){

    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => { setOpen(true) }
    const handleDrawerClose = () => { setOpen(false) }
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleChange = (event) => { setAuth(event.target.checked) };
    const handleMenu = (event) => { setAnchorEl(event.currentTarget) };
    const handleClose = () => { setAnchorEl(null) };

    return(
        <>
                <Box sx={{ display: 'flex' }}>
            <AppBars position="fixed" open={open} color="error">
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
            </AppBars>
            <NavBar/>
        </Box>
        </>
    )
}