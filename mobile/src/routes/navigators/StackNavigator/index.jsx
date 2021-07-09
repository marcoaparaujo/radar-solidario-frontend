//#region Imports

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ROUTE_NAMES, STACK_ROUTES } from 'routes/routes';
import TabNavigator from '../TabNavigator';

//#endregion

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator
        initialRouteName={ROUTE_NAMES.AUTHENTICATION}
        screenOptions={{ headerShown: false, headerTitleAlign: 'center' }}
    >
        <Stack.Screen name={ROUTE_NAMES.TABS} component={TabNavigator} />

        {STACK_ROUTES.map(({ name, options, Component }, index) => (
            <Stack.Screen key={index} name={name} options={options} component={Component} />
        ))}
    </Stack.Navigator>
);

export default StackNavigator;
