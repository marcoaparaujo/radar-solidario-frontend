//#region Imports

import Snackbar from 'components/Snackbar';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { CharityContextProvider } from 'storages/charity/context';
import { UserContextProvider } from 'storages/user/context';
import FormUserRegister from './FormUserRegister';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();

    return (
        <ScrollView>
            <View style={styles.form}>
                <FormUserRegister />
            </View>
            <Snackbar />
        </ScrollView>
    );
};

const UserRegister = () => (
    <UserContextProvider>
        <CharityContextProvider>
            <Content />
        </CharityContextProvider>
    </UserContextProvider>
);

export default UserRegister;
