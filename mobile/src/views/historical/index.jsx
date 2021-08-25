//#region Imports

import React from 'react';
import { ScrollView, View } from 'react-native';
import useStyles from './styles';
import { Text } from 'react-native-elements';
import FormHistoricSearch from './FormHistoricSearch';
import { FormContextProvider } from 'storages/form/context';

//#endregion

const Content = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <View style={styles.textSpace}>
                <Text style={styles.text}>Histórico</Text>
            </View>
            <FormHistoricSearch />
        </View>
    );
};

const Historical = () => (
    <ScrollView>
        <FormContextProvider>
            <Content />
        </FormContextProvider>
    </ScrollView>
);

export default Historical;
