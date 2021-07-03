//#region Imports

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Icon } from 'react-native-elements';
import { ROUTE_NAMES, TAB_ROUTES } from 'routes/routes';

//#endregion

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator initialRouteName={ROUTE_NAMES.HOME}>
        {TAB_ROUTES.map(({ name, options, Component }, index) => (
            <Tab.Screen
                key={index}
                name={name}
                component={Component}
                options={{
                    ...options,
                    tabBarIcon: ({ color, size }) => (
                        <Icon solid size={size} color={color} name={options.tabBarIcon} type='font-awesome-5' />
                    )
                }}
            />
        ))}
    </Tab.Navigator>
);

export default TabNavigator;
