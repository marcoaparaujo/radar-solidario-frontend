//#region Imports

import RobotoBold from 'assets/fonts/Roboto-Bold.ttf';
import RobotoMedium from 'assets/fonts/Roboto-Medium.ttf';
import RobotoRegular from 'assets/fonts/Roboto-Regular.ttf';
import SplashScreen from 'components/AppLoader';
import * as Font from 'expo-font';
import * as Splash from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import useStyles from './styles';

//#endregion

const SplashLoader = ({ children }) => {
    const styles = useStyles();
    const [isLoading, setIsLoading] = useState(true);

    const fonts = useCallback(async () => {
        await Font.loadAsync({
            'Roboto-Bold': RobotoBold,
            'Roboto-Medium': RobotoMedium,
            'Roboto-Regular': RobotoRegular
        });
    }, []);

    useEffect(() => {
        (async () => {
            try {
                await Splash.preventAutoHideAsync();
                await fonts();
            } finally {
                setIsLoading(false);
                await Splash.hideAsync();
            }
        })();
    }, []);

    return <View style={styles.view}>{!isLoading ? children : <SplashScreen />}</View>;
};

export default SplashLoader;
