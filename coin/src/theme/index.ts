import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    lightGrey: string;
    lightGreen: string;
    radius: number;
  }
}

// Custom colors. Names generated by https://colornamer.robertcooper.me/

const theme = createTheme({
  palette: {
    primary: { main: '#33AF00' },

    common: {
      lightGreen: '#68ad4a',
      lightGrey: '#808080',
      radius: 5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 700,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 320,
      tablet: 568,
      desktop: 1025,
    },
  },
});

export default theme;