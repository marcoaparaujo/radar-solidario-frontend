//#region Imports

import Button from 'components/Button';
import Accordion from 'containers/Accordion';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const AccordionReservedFoodStamps = () => {
    const styles = useStyles();

    return (
        <Accordion label='Cestas reservadas'>
            <View style={styles.container}>
                <Text style={styles.text}>02 Cestas de 04Kg</Text>
                <Text style={styles.text}>01 Cestas de 08Kg</Text>
                <Button style={styles.button}>Reservar Cestas</Button>
            </View>
        </Accordion>
    );
};

export default AccordionReservedFoodStamps;
