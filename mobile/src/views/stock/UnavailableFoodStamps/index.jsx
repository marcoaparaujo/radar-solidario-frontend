//#region Imports

import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import Button from '../../../components/Button/index';
import ListItemComponent from '../ListItemComponent';
import useStyles from './styles';

//#endregion

const UnavailableFoodStamps = () => {
    const styles = useStyles();

    return (
        <ListItemComponent label='Cestas indisponíveis'>
            <View style={styles.container}>
                <Text style={styles.text}>14 Cestas de 04Kg</Text>
                <Text style={styles.text}>04 Cestas de 1000Kg</Text>
                <Button style={styles.button}>Alterar Disponibilidade</Button>
            </View>
        </ListItemComponent>
    );
};

export default UnavailableFoodStamps;
