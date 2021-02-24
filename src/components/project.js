import React, { Component } from 'react';
import pin from "../images/pin.png";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
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
        transform: "rotate(0deg)",
    },
    cardroot: {
        paddingTop: 20,

    },
});

/*
props - 
    title -> Title of project
    image -> Project image
    desc -> Description of project
    children -> Card Actions(showing icons of technology used)
*/
export default function Project(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" className={classes.root} style={{transform:"rotate("+props.rotate+"deg)"}}>
                <div className={classes.cardroot}>   
                    <Card elevation={10}>
                    <img src={pin} width="6%" style={{ position: 'absolute', zIndex: '1', marginTop: -10 }}></img>
                        <CardActionArea href={props.action}>
                            <CardMedia
                                component="img"
                                alt="Project"
                                image={props.image}
                                title="Project"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h5">
                                    {props.title}
                                </Typography>
                                <Typography variant="body2" component="h7">
                                    {props.desc}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{fontSize:"3.8vh",color:"gray"}}>    
                            {props.children}
                        </CardActions>
                    </Card>
                </div>
            </Container>
        </React.Fragment>
    );
}