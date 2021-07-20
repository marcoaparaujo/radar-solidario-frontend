//#region Imports

import Button from 'components/Button';
import React from 'react';
import { Text } from 'react-native-elements';
import AccordionStock from '../AccordionStock';
import useStyles from './styles';

//#endregion

const AccordionAvailableStock = () => {
    const styles = useStyles();

    return (
        <AccordionStock label='Estoque disponível'>
            <Text style={styles.text}>14 Cestas de 04Kg</Text>
            <Text style={styles.text}>04 Cestas de 1000Kg</Text>
            <Button style={styles.button}>Doar cesta</Button>
            <Button style={styles.button}>Cadastrar Cesta</Button>
        </AccordionStock>
    );
};

export default AccordionAvailableStock;
