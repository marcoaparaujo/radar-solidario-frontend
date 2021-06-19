//#region Imports

import Logo from 'assets/images/logo.gif';
import React from 'react';
import { View } from 'react-native';
import { Image, Text } from 'react-native-elements';
import FormLogin from './FormLogin';
import useStyles from './styles';

//#endregion

const Authentication = () => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.image} resizeMode='contain' />

            <View style={styles.form}>
                <FormLogin />
                <Text style={styles.text}>Esqueci a senha</Text>
            </View>

            <Text style={styles.text}>Para se cadastrar, é necessário convite via TOKEN</Text>
        </View>
    );
};

export default Authentication;
