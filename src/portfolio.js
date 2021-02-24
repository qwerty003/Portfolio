import React, { Component } from 'react';
import './portfolio.css';
import { createMuiTheme } from '@material-ui/core/styles';
import project1 from "./images/project1.jpg";
import project2 from "./images/project2.jpg";
import project3 from "./images/project3.jpg";
import project4 from "./images/project4.jpg";
import ProgressBar from './components/progress';
import NavigationMenu from './components/navigation';
import Header from './components/header';
import Project from './components/project';
import Skills from './components/skills';
import Action from './components/action';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import RedditIcon from '@material-ui/icons/Reddit';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ThemeProvider } from '@material-ui/styles';
import theme, { theme2 } from './theme';


class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { newtheme: false,}
  }
  changeTheme() {
    this.setState({ newtheme: !(this.state.newtheme) });
  }
  calcRotate() {
    return (Math.floor(Math.random() * (1 - (-1) + 1) + (-1)))
  }
  render() {
    const appliedTheme = createMuiTheme(this.state.newtheme ? theme2 : theme);
    const projects = [{ image: project1, title: "INCOMP", rotate: this.calcRotate(), action: "https://github.com/qwerty003/INCOMP", desc: "A PHP website where people within a company can interact and communicate with each other.", icons: ["devicon-php-plain","devicon-mysql-plain","devicon-css3-plain","devicon-html5-plain-wordmark","devicon-apache-plain-wordmark"] },
    { image: project2, title: "Nettweak", rotate: this.calcRotate(), action: "https://github.com/qwerty003/Nettweak", desc: "A native Android application to execute commands on a cloud Virtual Machine (or any remote Linux pc with OpenSSH) via SSH.", icons: ["devicon-java-plain","devicon-android-plain","devicon-ssh-original-wordmark","devicon-googlecloud-plain-wordmark"] },
    { image: project3, title: "IMDB100", rotate: this.calcRotate(), action: "https://github.com/qwerty003/IMDB100", desc: "A VueJS SPA which let’s you browse through top 100 IMDB movies, search them and add your favorite ones to a watch list.", icons: ["devicon-javascript-plain","devicon-vuejs-plain","devicon-firebase-plain","devicon-babel-plain"] },
    { image: project4, title: "Tweeter", rotate: this.calcRotate(), action: "", desc: "A Reddit bot in Python which tweets after !tweeter is commented on posts from desired subreddits", icons: ["devicon-python-plain","devicon-pycharm-plain-wordmark"] },
    ];
    return (
      <React.Fragment>
        <ThemeProvider theme={appliedTheme}>
          <CssBaseline />

          <ProgressBar></ProgressBar>

          <NavigationMenu handleSwitch={() => { this.changeTheme() }}></NavigationMenu>
          <br></br>

          <Container maxWidth="md" className="content1">
            <Typography component="h1" variant="h2" align="center" color="textSecondary" gutterBottom>
              &lt;/Hello World&gt;
            </Typography>
          </Container>
          <Container maxWidth="sm" className="content1">
            <Typography variant="h4" align="center" color="textSecondary" paragraph>
              Hi there,<br />
              I&apos;m Abhijeet Kumar a Computer Science undergrad and a Full Stack Developer who loves solving problems
              behind the keyboard.<br></br>
              Feel free to contact me or add me on socials if you like my work.

              
          </Typography>
            <Grid container direction="row" justify="center" spacing={2}>
              <Grid item>
                <Button variant="contained" color="secondary" href="#projects">
                  See Projects
              </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="secondary" href="#skills">
                  Skills
                </Button>
              </Grid>
            </Grid>
            <br />
          </Container>
          <br />

          <a name="projects"><Header text="Projects"></Header></a>

          {projects.map((project) =>
            <div key={project.title}>
              <Project {...project}>
                {project.icons.map((icon) => <i class={icon} ></i>)}
              </Project>
              <br /> <br />
            </div>
          )}


          <a name="skills"><Header text="Skills"></Header></a>

          <Skills></Skills>

          <Action></Action>

          {/* Footer */}
          <Container maxWidth="100%" className="footer" style={{ backgroundImage: "linear-gradient(to bottom, " + appliedTheme.palette.primary.main + "," + appliedTheme.palette.secondary.main + ")" }}>
            <div><TwitterIcon /> &nbsp; <FacebookIcon /> &nbsp; <RedditIcon /> &nbsp; <LinkedInIcon /></div>
            <br />
            <div>  abhijeetcatches33@gmail.com  • +91-8340460293 •	18328@iiitu.ac.in </div>
            <br />
            <Typography variant="subtitle1"> © Made with &nbsp;
              <FavoriteIcon style={{color:"red"}} /> &nbsp; by @abigit using &nbsp;
              <i class="devicon-react-original-wordmark colored" style={{fontSize:"2rem"}} /></Typography>
          </Container>
          {/* End footer */}

        </ThemeProvider>
      </React.Fragment>

    );
  }
}

export default Portfolio; 