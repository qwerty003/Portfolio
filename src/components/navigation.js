import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import theme from '../theme';
import { Hidden } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const drawerWidth = 240;

const useStyles = () => ({
    root: {
        flexGrow: 1,
    },
    appbar:{
        background:'transparent',
        boxShadow:'none',
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
});

class NavigationMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false, }
    }
    handleDrawer() {
        const status = !(this.state.open);
        this.setState({ open: status });
    }
    render() {
        const { classes } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <AppBar position="static" color="transparent" elevation={0}>
                        <Toolbar variant="dense">
                            <Hidden smUp>
                                <IconButton edge="start" color="secondary" aria-label="menu" onClick={() => { this.handleDrawer() }}>
                                    <MenuIcon />
                                </IconButton>
                            </Hidden>
                            <Hidden xsDown>
                                <nav className={classes.iconBar}>
                                    <Tooltip title="Github">
                                        <IconButton href="https://www.github.com/qwerty003">
                                            <GitHubIcon color="secondary" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="LinkedIn">
                                        <IconButton aria-label="LinkedIn">
                                            <LinkedInIcon color="secondary" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Me">
                                        <IconButton aria-label="Me">
                                            <AccountCircleIcon color="secondary" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Articles">
                                        <IconButton aria-label="Articles">
                                            <AssignmentIcon color="secondary" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Support">
                                        <IconButton aria-label="Support">
                                            <CreditCardIcon color="secondary" />
                                        </IconButton>
                                    </Tooltip>
                                </nav>
                            </Hidden>
                            <Typography>Some company name</Typography>
                        </Toolbar>
                    </AppBar>
                    {/* Drawer (can be placed anywhere in template) */}
                    <Drawer
                        variant="temporary"
                        classes={{
                            paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}
                        onClick={() => { this.handleDrawer() }}>
                        <List>
                            <div>
                                <ListItem button component="a" href="https://www.github.com/qwerty003">
                                    <ListItemIcon>
                                        <GitHubIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Github" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <LinkedInIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="LinkedIn" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <AssignmentIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Articles" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <CreditCardIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Support" />
                                </ListItem>
                            </div>
                        </List>
                    </Drawer>
                    {/* End-Drawer */}
                </div>
            </ThemeProvider>
        );
    }
}

export default withStyles(useStyles)(NavigationMenu);

/*Demonstartion of using Themeprovider in an app. 6 palettes of colours are available to use (primary,secondary,error,warning,info
and success), out of which we used secondary in appbar. To override <Themeprovider> colors we can manually set color to any value
we like, like in icons here.  
*/