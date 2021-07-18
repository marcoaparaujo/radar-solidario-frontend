//#region Imports

import Button from 'components/Button';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import ListItemComponent from '../ListItemComponent';
import useStyles from './styles';

//#endregion

const ReservedFoodStamps = () => {
    const styles = useStyles();

    return (
        <ListItemComponent label='Cestas reservadas'>
            <View style={styles.container}>
                <Text style={styles.text}>02 Cestas de 04Kg</Text>
                <Text style={styles.text}>01 Cestas de 08Kg</Text>
                <Button style={styles.button}>Reservar Cestas</Button>
            </View>
        </ListItemComponent>
    );
};

export default ReservedFoodStamps;
