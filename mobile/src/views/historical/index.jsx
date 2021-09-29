//#region Imports

import FieldDatePicker from 'containers/FieldDatePicker';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { FormContextProvider } from 'storages/form/context';
import useSystemContext from 'storages/system/context';
import HistoricalDonateBoards from './components/HistoricalDonateBoards';
import HistoricalReservedBoards from './components/HistoricalReservedBoards';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();
    const { charity } = useSystemContext();
    return (
        <View style={styles.color}>
            <View style={styles.container}>
                <View style={styles.textSpace}>
                    <Text style={styles.text}>Histórico</Text>
                </View>

                <View>
                    <Text style={styles.charityName}>{charity.name}</Text>
                    <Text>{charity.name}</Text>
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
