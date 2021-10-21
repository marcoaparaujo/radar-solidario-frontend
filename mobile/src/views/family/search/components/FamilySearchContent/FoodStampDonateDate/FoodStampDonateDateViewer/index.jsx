//#region Imports

import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import slsx from 'slsx';
import useStyles from './styles';

//#endregion

const FoodStampDonateDateViewer = ({ label, data, isValidDonateDataRange }) => {
    const styles = useStyles();

    const textStyle = slsx(styles.text, {
        [styles.textValid]: isValidDonateDataRange,
        [styles.textInvalid]: !isValidDonateDataRange
    });

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={textStyle}>{data || 'Nenhum registro encontrado'}</Text>
        </View>
    );
};

export default FoodStampDonateDateViewer;
