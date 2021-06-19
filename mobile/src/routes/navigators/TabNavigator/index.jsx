//#region Imports

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Icon } from 'react-native-elements';
import { ROUTE_NAMES, TAB_ROUTES } from 'routes/routes';

//#endregion

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator initialRouteName={ROUTE_NAMES.HOME}>
        {TAB_ROUTES.map(({ name, Component, options }, index) => (
            <Tab.Screen
                key={index}
                name={name}
                component={Component}
                options={{
                    ...options,
                    tabBarIcon: ({ color, size }) => (
                        <Icon solid size={size} color={color} type='font-awesome-5' name={options.tabBarIcon} />
                    )
                }}
            />
        ))}
    </Tab.Navigator>
);

export default TabNavigator;
