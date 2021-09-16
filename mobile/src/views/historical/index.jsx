//#region Imports

import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';
import { FormContextProvider } from 'storages/form/context';
import HistoricalDonateBoards from './components/HistoricalDonateBoards';
import HistoricalReservedBoards from './components/HistoricalReservedBoards/index';
import useStyles from './styles';
import { Button } from 'react-native-elements';
import FieldDatePicker from 'containers/FieldDatePicker';

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
                    <Button title={'Doação'} />
                </View>
                <View style={styles.buttonView}>
                    <Button style={styles.button} title={'Reservado'} />
                </View>
                <View>
                    <FieldDatePicker name={'Date Picker'} label={'Selecione a data'} />
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
