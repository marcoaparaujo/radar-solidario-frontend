//#region Imports

import { NavigationContainer } from '@react-navigation/native';
import React, { useMemo } from 'react';
import StackNavigator from 'routes/navigators/StackNavigator';
import useSystemContext from 'storages/system/context';
import NAVIGATION_THEME from 'utils/constants/theme/navigation-theme';

//#endregion

const Router = () => {
    const { theme } = useSystemContext();
    const activeTheme = useMemo(() => theme === 'light' && NAVIGATION_THEME, [theme]);

    return (
        <NavigationContainer theme={activeTheme}>
            <StackNavigator />
        </NavigationContainer>
    );
};

export default Router;
