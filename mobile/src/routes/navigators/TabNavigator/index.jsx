//#region Imports

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ROUTE_NAMES, TAB_ROUTES } from 'routes/routes';

//#endregion

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator initialRouteName={ROUTE_NAMES.HOME}>
        {TAB_ROUTES.map(({ name, title, icon, Component }, index) => (
            <Tab.Screen key={index} name={name} component={Component} options={{ title, tabBarIcon: icon }} />
        ))}
    </Tab.Navigator>
);

export default TabNavigator;
