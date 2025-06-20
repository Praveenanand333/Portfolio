import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance for light mode
const lightThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3a86ff',
      light: '#63a4ff',
      dark: '#004ecb',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#fb5607',
      light: '#ff8a50',
      dark: '#c41c00',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f7f9fc',
      paper: '#ffffff',
      card: '#ffffff',
      section: '#eef2f8',
    },
    text: {
      primary: '#212121',
      secondary: '#546e7a',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
      marginBottom: '0.5rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    subtitle1: {
      fontSize: '1.1rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          boxShadow: 'none',
          padding: '0.5rem 1.5rem',
        },
        contained: {
          boxShadow: '0 4px 10px rgba(58, 134, 255, 0.15)',
          '&:hover': {
            boxShadow: '0 6px 15px rgba(58, 134, 255, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.06)',
          borderRadius: 12,
          transition: 'transform 0.3s, box-shadow 0.3s',
          overflow: 'visible',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
          '@media (min-width: 900px)': {
            paddingLeft: 40,
            paddingRight: 40,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          fontSize: '0.9rem',
        },
      },
    },
  },
};

// Create a theme instance for dark mode
const darkThemeOptions = {
  // First, copy the non-palette options from light theme
  ...lightThemeOptions,
  
  // Then override with dark mode specific options
  palette: {
    mode: 'dark',
    primary: {
      main: '#52a9ff',
      light: '#80d8ff',
      dark: '#0077cc',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff9e40',
      light: '#ffcd70',
      dark: '#c66900',
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
      card: '#1e1e1e',
      section: '#262626',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#b0bec5',
    },
  },
};

// Create responsive themes
let lightTheme = createTheme(lightThemeOptions);
lightTheme = responsiveFontSizes(lightTheme);

let darkTheme = createTheme(darkThemeOptions);
darkTheme = responsiveFontSizes(darkTheme);

export { lightTheme, darkTheme };