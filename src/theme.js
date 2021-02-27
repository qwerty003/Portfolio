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
      fontSize: '2.2rem',
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
      default: '#F39DC7'/*light-pink*/
    },
    primary: { 
      main: '#F39DC7',/*light-pink*/
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
      fontSize: '2.2rem',
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
      default: '#91D3AE',/*light-green*/
    },
    primary: { 
      main: '#91D3AE',/*light-green*/
      icons: green[100],
      contrastText: grey[500],
    },
    secondary: {
      main: '#47BD7A',/*dark-green*/
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
