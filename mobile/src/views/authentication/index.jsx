//#region Imports

import Logo from 'assets/images/logo.gif';
import Snackbar from 'components/Snackbar';
import React from 'react';
import { View } from 'react-native';
import { Image, Text } from 'react-native-elements';
import slsx from 'slsx';
import { AuthenticationContextProvider } from 'storages/authentication/context';
import FormLogin from './FormLogin';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();
    const forgotPasswordStyle = slsx(styles.text, styles.forgotPassword);

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.image} resizeMode='contain' />

            <View style={styles.form}>
                <FormLogin />
                <Text style={forgotPasswordStyle}>Esqueci a senha</Text>
            </View>

            <Text style={styles.text}>Para se cadastrar, é necessário convite via TOKEN</Text>

            <Snackbar />
        </View>
    );
};

const Authentication = () => (
    <AuthenticationContextProvider>
        <Content />
    </AuthenticationContextProvider>
);

export default Authentication;
