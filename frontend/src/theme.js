import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // You can customize the primary color
        },
        secondary: {
            main: '#ff4081', // Customize the secondary color
        },
        background: {
            default: '#f5f5f5', // Background color for the app
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h2: {
            fontWeight: 500,
        },
        h3: {
            fontWeight: 500,
        },
        // Customize other typography variants as needed
    },
});

export default theme;
