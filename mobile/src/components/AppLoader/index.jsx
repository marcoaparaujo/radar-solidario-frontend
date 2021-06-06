//#region Imports

import Logo from 'assets/images/logo.gif';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Image } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const SplashScreen = () => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.image} />
            <ActivityIndicator size='large' style={styles.loader} />
        </View>
    );
};

export default SplashScreen;
