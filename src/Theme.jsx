import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0B0D17', // Blue-900
    },
    secondary: {
      main: '#D0D6F9', // Blue-300
    },
    background: {
      default: '#0B0D17',
      paper: '#0B0D17',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D0D6F9',
    },
    common: {
      white: '#FFFFFF',
      black: '#0B0D17',
    },
  },

  typography: {
    h1: {
      fontFamily: 'Bellefair, serif',
      fontSize: '144px',
      lineHeight: 1.719,
      letterSpacing: '0px',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: 'Bellefair, serif',
      fontSize: '100px',
      lineHeight: 1.146,
      letterSpacing: '0px',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: 'Bellefair, serif',
      fontSize: '56px',
      lineHeight: 1.142,
      letterSpacing: '0px',
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: 'Bellefair, serif',
      fontSize: '32px',
      lineHeight: 1.146875,
      letterSpacing: '0px',
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: '"Barlow Condensed", sans-serif',
      fontSize: '28px',
      lineHeight: 1.2,
      letterSpacing: '4px',
      textTransform: 'uppercase',
    },
    h6: {
      fontFamily: 'Bellefair, serif',
      fontSize: '28px',
      lineHeight: 1.146,
      letterSpacing: '0px',
      textTransform: 'uppercase',
    },

    // Custom presets
    textPreset7: {
      fontFamily: '"Barlow Condensed", sans-serif',
      fontSize: '14px',
      lineHeight: 1.2,
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    textPreset8: {
      fontFamily: '"Barlow Condensed", sans-serif',
      fontSize: '16px',
      lineHeight: 1.2,
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    textPreset9: {
      fontFamily: 'Barlow, sans-serif',
      fontSize: '18px',
      lineHeight: 1.8,
      letterSpacing: '0px',
    },
    },
    components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              minWidth: '375px',
              overflowX: 'hidden',
              backgroundColor: '#0B0D17',
            },
          },
        },
      },
});

theme = responsiveFontSizes(theme);

export default theme;
