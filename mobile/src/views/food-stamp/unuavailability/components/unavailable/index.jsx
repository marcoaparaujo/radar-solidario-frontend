//#region Imports

import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const Unavailable = () => {
    const styles = useStyles();

    return (
        <View>
            <Text style={styles.indisponivel}>Cestas indisponíveis </Text>
            <Text style={styles.subTitle}> 01 cestas de 04kg</Text>
            <Text style={styles.subTitle}> 01 cestas de 08kg</Text>
        </View>
    );
};

export default Unavailable;
