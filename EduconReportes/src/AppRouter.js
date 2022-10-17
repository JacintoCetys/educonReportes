import React from 'react';
// import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import GlobalStyles from './components/GlobalStyles';
import { theme } from './theme';
import { Router } from './routes'

export const AppRouter = () => {
    console.log('ejemplo')
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router />
        </ThemeProvider>
    )
}
