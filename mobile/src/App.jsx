//#region Imports

import Snackbar from 'components/Snackbar';
import SplashLoader from 'containers/SplashLoader';
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import THEME from 'utils/constants/theme';
import Router from './routes';
import { SystemContextProvider } from './storages/system/context';

//#endregion

const App = () => (
    <SafeAreaProvider>
        <ThemeProvider theme={THEME}>
            <SystemContextProvider>
                <SplashLoader>
                    <Router />
                </SplashLoader>

                <Snackbar />
            </SystemContextProvider>
        </ThemeProvider>
    </SafeAreaProvider>
);

export default App;
