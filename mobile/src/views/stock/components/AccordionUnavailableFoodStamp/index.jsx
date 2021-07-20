//#region Imports

import Button from 'components/Button';
import React from 'react';
import { Text } from 'react-native-elements';
import AccordionStock from '../AccordionStock';
import useStyles from './styles';

//#endregion

const AccordionUnavailableFoodStamp = () => {
    const styles = useStyles();

    return (
        <AccordionStock label='Cestas indisponíveis'>
            <Text style={styles.text}>14 Cestas de 04Kg</Text>
            <Text style={styles.text}>04 Cestas de 1000Kg</Text>
            <Button style={styles.button}>Alterar Disponibilidade</Button>
        </AccordionStock>
    );
};

export default AccordionUnavailableFoodStamp;
