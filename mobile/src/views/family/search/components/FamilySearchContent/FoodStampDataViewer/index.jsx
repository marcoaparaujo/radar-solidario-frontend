//#region Imports

import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const FoodStampDataViewer = ({ label, data }) => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.text}>{data || 'Nenhum registro encontrado'}</Text>
        </View>
    );
};

export default FoodStampDataViewer;
