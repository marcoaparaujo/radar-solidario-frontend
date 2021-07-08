//#region Imports

import SplashLoader from 'containers/SplashLoader';
import React, { useMemo } from 'react';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useSystemContext, { SystemContextProvider } from 'storages/system/context';
import { ELEMENTS_THEME_LIGHT } from 'utils/constants/theme/elements-theme';
import Router from './routes';

//#endregion

const Content = () => {
    const { theme } = useSystemContext();
    const activeTheme = useMemo(() => theme === 'light' && ELEMENTS_THEME_LIGHT, [theme]);

    return (
        <ThemeProvider theme={activeTheme}>
            <SplashLoader>
                <Router />
            </SplashLoader>
        </ThemeProvider>
    );
};

const App = () => (
    <SafeAreaProvider>
        <SystemContextProvider>
            <Content />
        </SystemContextProvider>
    </SafeAreaProvider>
);

export default App;
