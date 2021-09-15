//#region Imports

import FieldButtonGroup from 'components/FieldButtonGroup';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';
import { FormContextProvider } from 'storages/form/context';
import HistoricalDonateBoards from './components/HistoricalDonateBoards';
import useStyles from './styles';
import HistoricalReservedBoards from './components/HistoricalReservedBoards/index';
import FieldDatePicker from 'containers/FieldDatePicker';
import DateTimePicker from '@react-native-community/datetimepicker';

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

            <View>
                <FieldButtonGroup name={'Filter'} label={'Filtro'} options={['Doada', 'Reservada']} />
                <Date mode='date' />
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
