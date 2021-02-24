import React, { Component } from 'react';
import background from "../images/b9.png";
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${background})`,
        display: 'inline-block',
        backgroundSize: 'cover',
    },
    titleContainer: {
        textAlign: 'center',
    }
}));

const headertheme = responsiveFontSizes(createMuiTheme({
    typography: {
        fontFamily: [
            'Roboto',
            'Sacramento',
            'cursive',
        ].join(','),
        h2: {
            fontSize: '4.8rem',
            fontFamily: 'Allura',
            fontWeight: 'normal',
        },
    },
    palette: {
        text: {
            primary: '#000000',/*black*/
            secondary: '#000000',/*black*/
        }
    },
}));

export default function Header(props) {
    const classes = useStyles();
    return (
        <Container maxWidth="sm" className={classes.titleContainer}>
            <ThemeProvider theme={headertheme}>
                <div className={classes.root}>
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>{props.text}</Typography>
                </div>
            </ThemeProvider>
        </Container>
    );

}