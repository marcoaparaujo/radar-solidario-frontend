//#region Imports

import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import SplashScreen from 'components/SplashScreen';
import React from 'react';
import { View } from 'react-native';
import useStyles from './styles';

//#endregion

const SplashLoader = ({ children }) => {
    const styles = useStyles();

    const [isFontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    });

    return <View style={styles.view}>{isFontsLoaded ? children : <SplashScreen />}</View>;
};

export default SplashLoader;
