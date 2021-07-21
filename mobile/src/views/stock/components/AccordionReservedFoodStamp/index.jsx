//#region Imports

import Button from 'components/Button';
import React from 'react';
import { Text } from 'react-native-elements';
import AccordionStock from '../AccordionStock';
import useStyles from './styles';

//#endregion

const AccordionReservedFoodStamps = () => {
    const styles = useStyles();

    return (
        <AccordionStock label='Cestas reservadas'>
            <Text style={styles.text}>02 Cestas de 04Kg</Text>
            <Text style={styles.text}>01 Cestas de 08Kg</Text>

            <Button style={styles.button}>Reservar Cestas</Button>
        </AccordionStock>
    );
};

export default AccordionReservedFoodStamps;
