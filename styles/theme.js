import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // You can switch to 'dark' here for dark mode
    primary: {
      main: '#2196F3', // Change this to your desired primary color
    },
    secondary: {
      main: '#FF4081', // Change this to your desired secondary color
    },
  },
});

export default theme;
