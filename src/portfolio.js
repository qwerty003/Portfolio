import React, { Component } from 'react';
import './portfolio.css';
import background from "./images/b9.png";
import project1 from "./images/project1.jpg";
import ProgressBar from './components/progress';
import NavigationMenu from './components/navigation';
import Project from './components/project';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import theme, { theme2 } from './theme';


class Portfolio extends Component {
  render() {
    const projectProps = { title: "INCOMP", desc: "A test description of project", image: project1 };
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <ProgressBar></ProgressBar>

          <NavigationMenu></NavigationMenu>
          <br></br>
          
          <Container maxWidth="sm" className="content1">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Hello World
            </Typography>
            <Typography variant="h4" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
          </Typography>
            <Grid container direction="row" justify="center" spacing={2}>
              <Grid item>
                <Button variant="contained" color="secondary">
                  Main call to action
              </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="secondary">
                  Secondary action
                </Button>
              </Grid>
            </Grid>
            <br />
          </Container>
          <br />

          <Container maxWidth="sm" className="title">
            <ThemeProvider theme={theme2}>
              <div style={{ backgroundImage: `url(${background})`, display: 'inline-block', backgroundSize: 'cover' }}>
                <Typography variant="h2" align="center" color="textSecondary" gutterBottom>Projects</Typography>
              </div>
            </ThemeProvider>
          </Container>

          <Project {...projectProps}>
            <i class="devicon-java-plain" ></i>
            <i class="devicon-react-original"></i>
            <i class="devicon-vuejs-plain"></i>
          </Project>
          <br /><br />
          <Project {...projectProps}>
            <i class="devicon-java-plain" ></i>
            <i class="devicon-react-original"></i>
            <i class="devicon-vuejs-plain"></i>
          </Project>
          <br /><br />
          <Project {...projectProps}>
            <i class="devicon-java-plain" ></i>
            <i class="devicon-react-original"></i>
            <i class="devicon-vuejs-plain"></i>
          </Project>
          <br /><br />
          <Project {...projectProps}>
            <i class="devicon-java-plain" ></i>
            <i class="devicon-react-original"></i>
            <i class="devicon-vuejs-plain"></i>
          </Project>
          <br /><br />
          <Project {...projectProps}>
            <i class="devicon-java-plain" ></i>
            <i class="devicon-react-original"></i>
            <i class="devicon-vuejs-plain"></i>
          </Project>
          <br /><br />
        
        
        </ThemeProvider>
      </React.Fragment>

    );
  }
}

export default Portfolio; 