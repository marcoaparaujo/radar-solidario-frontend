//#region Imports

import SplashLoader from 'containers/SplashLoader';
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import THEME from 'utils/constants/theme';
import Router from './routes';

//#endregion

const App = () => (
    <SafeAreaProvider>
        <ThemeProvider theme={THEME}>
            <SplashLoader>
                <Router />
            </SplashLoader>
        </ThemeProvider>
    </SafeAreaProvider>
);

export default App;
