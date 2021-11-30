//#region Imports

import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const FoodStampDonateDateViewer = ({ label, data, isValidDonateDataRange }) => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={isValidDonateDataRange ? styles.textValid : styles.textInvalid}>
                {data || 'Nenhum registro encontrado'}
            </Text>
        </View>
    );
};

export default FoodStampDonateDateViewer;
