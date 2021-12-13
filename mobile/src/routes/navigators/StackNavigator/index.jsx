//#region Imports

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { ROUTE_NAMES, STACK_ROUTES } from 'routes/routes';
import useSystemContext from 'storages/system/context';
import TabNavigator from '../TabNavigator';

//#endregion

const Stack = createStackNavigator();

const StackNavigator = () => {
    const { navigate } = useNavigation();
    const { setLogin } = useSystemContext();

    useEffect(() => {
        (async () => {
            try {
                const value = await AsyncStorage.getItem('@login');
                const parsed = JSON.parse(value);
                if (parsed && parsed !== {}) {
                    await setLogin(parsed);
                    navigate(ROUTE_NAMES.TABS, { screen: ROUTE_NAMES.FAMILY.SEARCH });
                }
            } catch {}
        })();
    }, []);

    return (
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
};

export default StackNavigator;
