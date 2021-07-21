//#region Imports

import React from 'react';
import { View } from 'react-native';
import { CheckBox, Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const Available = () => {
    const styles = useStyles();

    return (
        <View>
            <Text style={styles.disponivel}>Cestas disponíveis </Text>
            <View style={styles.view}>
                <CheckBox />
                <Text style={styles.subTitle}>14 cestas de 04kg</Text>
            </View>
            <View style={styles.view}>
                <CheckBox />
                <Text style={styles.subTitle}>04 cestas de 08kg</Text>
            </View>
        </View>
    );
};

export default Available;
