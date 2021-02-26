import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TranslateIcon from '@material-ui/icons/Translate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Switch from '@material-ui/core/Switch';
import Drawer from '@material-ui/core/Drawer';
import { useTheme } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        background: 'transparent',
        boxShadow: 'none',
    },
    iconBar: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
}));

export default function Navigation(props) {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    function handleDrawer() {
        setOpen(!open);
    }
    function handleCheck(e) {
        props.handleSwitch();
        setChecked(!checked);
    }
    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar variant="dense">
                    <Hidden smUp>
                        <IconButton edge="start" style={{color:theme.palette.secondary.icons}} aria-label="menu" onClick={() => { handleDrawer() }}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <nav className={classes.iconBar}>
                        <Tooltip title="Github">
                            <IconButton href="https://www.github.com/qwerty003">
                                <GitHubIcon style={{color:theme.palette.secondary.icons}} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="LinkedIn">
                            <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/abhijeet-kumar-955631166">
                                <LinkedInIcon style={{color:theme.palette.secondary.icons}} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Articles">
                            <IconButton aria-label="Articles" href="https://auth.geeksforgeeks.org/user/abhijeetcatches33/articles">
                                <TranslateIcon style={{color:theme.palette.secondary.icons}} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Resume">
                            <IconButton aria-label="Resume">
                                <AssignmentIcon style={{color:theme.palette.secondary.icons}} />
                            </IconButton>
                        </Tooltip>
                    </nav>
                    <Switch checked={checked} onChange={() => { handleCheck() }} style={{color:theme.palette.secondary.icons}}/>
                </Toolbar>
            </AppBar>
            {/* Drawer (can be placed anywhere in template) */}
            <Drawer
                variant="temporary"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
                onClick={() => { handleDrawer() }}>
                <List>
                    <div>
                        <ListItem button component="a" href="mailto:abhijeetcatches33@gmail.com">
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Mail" />
                        </ListItem>
                        <ListItem button component="a" href="https://www.linkedin.com/in/abhijeet-kumar-955631166">
                            <ListItemIcon>
                                <LinkedInIcon />
                            </ListItemIcon>
                            <ListItemText primary="LinkedIn" />
                        </ListItem>
                        <ListItem button component="a" href="https://twitter.com/Abigit03">
                            <ListItemIcon>
                                <TwitterIcon />
                            </ListItemIcon>
                            <ListItemText primary="Twitter" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <FavoriteIcon />
                            </ListItemIcon>
                            <ListItemText primary="Support" />
                        </ListItem>
                    </div>
                </List>
            </Drawer>
            {/* End-Drawer */}
        </div>
    );
}


/*Demonstartion of using Themeprovider in an app. 6 palettes of colours are available to use (primary,secondary,error,warning,info
and success), out of which we used secondary in appbar. To override <Themeprovider> colors we can manually set color to any value
we like, like in icons here.
*/