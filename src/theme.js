import { createMuiTheme, responsiveFontSizes }  from '@material-ui/core/styles';
import { pink,grey } from '@material-ui/core/colors';

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
      fontSize: '2.2rem',
      fontFamily: 'Open Sans',
    },
    h5: {
      fontSize: '2.3rem',
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
      default: '#E6BBD0'/*light-pink*/
    },
    primary: { 
      main: '#E6BBD0',/*light-pink*/
      icons: pink[100],
      contrastText: grey[500],
    },
    secondary: {
      main: '#FFFFFF',/*purple*/
    },
    text: {
      primary: '#000000',/*black*/
      secondary: '#FFFFFF'/*white*/
    }
  },
}));
const theme2 = responsiveFontSizes(createMuiTheme({
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
      primary: '#E312A6',/*pink*/
      secondary: '#000000'
    }
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