import React, {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Welcome from './Welcome';
import Test from './Test';
import Home from './Home';
//import DrawerData from './DrawerData';
import AccessTime from '@mui/icons-material/AccessTime'

import {
    NavLink
  } from "react-router-dom";

const drawerWidth = 240;

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

const  NavBar = (props) => {
    
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => { setOpen(true) }
    const handleDrawerClose = () => { setOpen(false) }

    const DrawerData = [
        {
            id:     1,
            text:   "Welcome",
            url:    "",
            icon:   <AccessTime/>,
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
        }
    ]

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" open={open} color="secondary">
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
                    <Typography variant="h6" noWrap component="div" align="center">Subscriptor Manager</Typography>
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
                    {DrawerData.map((item) => {
                        const {text, icon, url } = item;
                        return(
                            <ListItem button key={text}>
                                <NavLink to={url}>
                                    <ListItemIcon >{icon}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </NavLink>
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
               {props.main}
            </Box>
        </Box>
    );
}

export default NavBar