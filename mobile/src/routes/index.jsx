//#region Imports

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from 'routes/navigators/StackNavigator';
import NAVIGATION_THEME from 'utils/constants/theme/navigation-theme';

//#endregion

const Router = () => (
    <NavigationContainer theme={NAVIGATION_THEME}>
        <StackNavigator />
    </NavigationContainer>
);

export default Router;
