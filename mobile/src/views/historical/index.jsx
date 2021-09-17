//#region Imports

import FieldDatePicker from 'containers/FieldDatePicker';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { FormContextProvider } from 'storages/form/context';
import HistoricalDonateBoards from './components/HistoricalDonateBoards';
import HistoricalReservedBoards from './components/HistoricalReservedBoards';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <View style={styles.textSpace}>
                <Text style={styles.text}>Histórico</Text>
            </View>

            <View>
                <Text>Instituição</Text>
                <Text>Nome da instituição</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonView}>
                    <Button buttonStyle={styles.donateButton} title={'Doação'} />
                </View>
                <View style={styles.buttonView}>
                    <Button buttonStyle={styles.reservedButton} title={'Reservado'} />
                </View>
            </View>

            <HistoricalDonateBoards />
            <HistoricalReservedBoards />
            <HistoricalDonateBoards />
            <HistoricalReservedBoards />
            <HistoricalDonateBoards />
            <HistoricalReservedBoards />
            <HistoricalDonateBoards />
            <HistoricalReservedBoards />
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
