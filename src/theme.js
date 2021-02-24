import { createMuiTheme, responsiveFontSizes }  from '@material-ui/core/styles';
import { pink,grey,green } from '@material-ui/core/colors';

const theme = responsiveFontSizes(createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'Raleway',
      'Open Sans',
      'Ruda',
      'Lato',
      'Sacramento',
      'Allura',
      'cursive',
    ].join(','),
    h2: {
      fontSize: '5rem',
      fontFamily: 'Raleway',
    },
    h3: {
      fontStyle: 'bold',
    },
    h4: {
      fontSize: '2.1rem',
      fontFamily: 'Open Sans',
    },
    h5: {
      fontSize: '2.1rem',
      fontFamily: 'Roboto',
      fontWeight: 300
    },
    body2: {
      fontSize: '1rem',
      fontFamily: 'Lato',
    },
    subtitle1:{
      fontSize: '1rem',
      color: '#544D4D'
    }
  },
  palette: {
    background: {
      default: '#E6BBD0'/*light-pink*/
    },
    primary: { 
      main: '#E6BBD0',/*light-pink*/
      icons: green[50],
      contrastText: grey[500],
    },
    secondary: {
      main: '#E769A6',/*white*/
      icons: '#FFFFFF'
    },
    text: {
      primary: '#000000',/*black*/
      secondary: '#FFFFFF',/*white*/
    }
  },
}));

const theme2 = responsiveFontSizes(createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
    ].join(','),
    h2: {
      fontSize: '5rem',
      fontFamily: 'Raleway',
    },
    h3: {
      fontStyle: 'bold',
    },
    h4: {
      fontSize: '2.1rem',
      fontFamily: 'Open Sans',
    },
    h5: {
      fontSize: '2.1rem',
      fontFamily: 'Roboto',
      fontWeight: 300
    },
    body2: {
      fontSize: '1rem',
      fontFamily: 'Lato',
    }
  },
  palette: {
    background: {
      default: '#91D3AE',/*light-green*/
    },
    primary: { 
      main: '#91D3AE',/*light-green*/
      icons: pink[100],
      contrastText: grey[500],
    },
    secondary: {
      main: '#5DC288',/*dark-green*/
      icons: '#FFFFFF',/*white*/
    },
    text: {
      primary: '#000000',/*black*/
      secondary: '#FFFFFF',/*white*/
    },
  },
}));

export default theme ;
export {theme2} ;

/*The way theme works is that we define the themes (objects) first using createMuiTheme and then pass this
object to the <ThemeProvider> component which wraps the whole template which needs to be themed.

Acc. to docs - "<ThemeProvider> relies on the context feature of React to pass the theme down to the components" which means 
it injects theme to all the components in the template. Since, each component has styling properties set to default 
(e.g-appbar color is set "primary" which means it's background color will be whatever theme.primary.main is, if there is a theme obj) 
so each component's default styling now is set via theme.

If needed, component colors or styles can be overriden and changed by either explicitly setting values to each single component
or by having another nested <ThemeProvider theme={theme2}> wrapper around a section of components.

Also, if the whole template of a component isn't wrapped under <ThemeProvider> as soon as it appears in a part of the template,
the whole template can get styled acc to the theme even though they are outside the wrapper. 
*/