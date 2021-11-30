//#region Imports

import { OPEN_REGISTER } from '@env';
import { useNavigation } from '@react-navigation/native';
import Logo from 'assets/images/logo.gif';
import Snackbar from 'components/Snackbar';
import React from 'react';
import { View } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import { AuthenticationContextProvider } from 'storages/authentication/context';
import FormLogin from './FormLogin';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();
    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.image} resizeMode='contain' />

            <View style={styles.form}>
                <FormLogin />
            </View>

            {OPEN_REGISTER && (
                <View style={styles.register}>
                    <Text style={styles.text}>Não está cadastrado?</Text>
                    <Text style={styles.registerText} onPress={() => navigate(ROUTE_NAMES.USER.REGISTER)}>
                        Cadastre-se
                    </Text>
                </View>
            )}

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
