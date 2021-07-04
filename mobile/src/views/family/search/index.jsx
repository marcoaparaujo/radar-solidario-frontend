//#region Imports

import { useNavigation } from '@react-navigation/native';
import Logo from 'assets/images/logo.gif';
import Button from 'components/Button';
import React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import { FamilyContextProvider } from 'storages/family/context';
import FormSearchFamily from './FormSearchFamily';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.image} resizeMode='contain' />

            <FormSearchFamily />
        </View>
    );
};

const Family = () => {
    const { navigate } = useNavigation();

    return (
        <FamilyContextProvider>
            <Content />
            <Button onPress={() => navigate(ROUTE_NAMES.FAMILY.REGISTER)}>Cadastrar manualmente</Button>
        </FamilyContextProvider>
    );
};

export default Family;
