import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import theme from '../theme';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        marginTop: 20,
    },
    iconroot:{
        
    },
    icon: {
        display: 'inline-block',
        marginLeft: 20,
        marginTop: 5
    }

});

/*
props - 
    title -> Title of project
    image -> Project image
    desc -> Description of project
    children -> Card Actions(showing icons of technology used)
*/
export default function Skills() {
    const classes = useStyles();
    const languages = ["devicon-python-plain-wordmark", "devicon-javascript-plain colored", "devicon-php-plain colored", "devicon-cplusplus-plain colored"];
    const frameworks = ["devicon-vuejs-plain-wordmark colored","devicon-react-original-wordmark colored","devicon-django-line-wordmark colored","devicon-materialui-plain colored","devicon-laravel-plain-wordmark colored"];
    const tools = ["devicon-git-plain-wordmark colored","devicon-android-plain-wordmark colored","devicon-ssh-original-wordmark colored","devicon-mysql-plain-wordmark colored","devicon-css3-plain-wordmark colored","devicon-redux-original colored","devicon-firebase-plain-wordmark colored"];
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" className={classes.root}>
                <Typography variant="h5" align="center" color="textSecondary">
                    Languages
                </Typography>
                <div style={{ fontSize: '5vh' }}>
                    {languages.map((language) =>
                        <div key={language} className={classes.icon}>
                            <i class = {language}></i>
                        </div>
                    )}
                </div>

                <Typography variant="h5" align="center" color="textSecondary">
                    Frameworks
                </Typography>
                <div style={{ fontSize: '5vh' }}>
                    {frameworks.map((framework) =>
                        <div key={framework} className={classes.icon}>
                            <i class = {framework}></i>
                        </div>
                    )}
                </div>

                <Typography variant="h5" align="center" color="textSecondary">
                    Tools & Other
                </Typography>
                <div style={{ fontSize: '5vh' }}>
                    {tools.map((tool) =>
                        <div key={tool} className={classes.icon}>
                            <i class = {tool}></i>
                        </div>
                    )}
                </div>
            </Container>
        </React.Fragment>
    );
}