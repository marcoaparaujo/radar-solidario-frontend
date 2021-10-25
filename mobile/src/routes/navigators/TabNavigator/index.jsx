//#region Imports

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Icon } from 'react-native-elements';
import { ROUTE_NAMES, TAB_ROUTES } from 'routes/routes';

//#endregion

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator
        initialRouteName={ROUTE_NAMES.FAMILY.SEARCH}
        screenOptions={{ headerShown: false, tabBarLabelStyle: { fontSize: 12 } }}
    >
        {TAB_ROUTES.map(({ name, options, Component }, index) => (
            <Tab.Screen
                key={index}
                name={name}
                component={Component}
                options={{
                    ...options,
                    tabBarIcon: ({ color }) => <Icon solid size={22} color={color} name={options.tabBarIcon} />
                }}
            />
        ))}
    </Tab.Navigator>
);

export default TabNavigator;
