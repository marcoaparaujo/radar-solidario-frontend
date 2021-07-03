//#region Imports

import Snackbar from 'components/Snackbar';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { FamilyContextProvider } from 'storages/family/context';
import FormFamily from './FormFamily';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();

    return (
        <ScrollView>
            <View style={styles.form}>
                <FormFamily />
            </View>
            <Snackbar />
        </ScrollView>
    );
};

const FamilyRegister = () => (
    <FamilyContextProvider>
        <Content />
    </FamilyContextProvider>
);

export default FamilyRegister;
