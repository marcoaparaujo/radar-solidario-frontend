//#region Imports

import Button from 'components/Button';
import Accordion from 'containers/Accordion';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const AccordionAvailableStock = () => {
    const styles = useStyles();

    return (
        <Accordion label='Estoque disponível'>
            <View style={styles.container}>
                <Text style={styles.text}>14 Cestas de 04Kg</Text>
                <Text style={styles.text}>04 Cestas de 1000Kg</Text>
                <Button style={styles.button}>Doar cesta</Button>
                <Button style={styles.button}>Cadastrar Cesta</Button>
            </View>
        </Accordion>
    );
};

export default AccordionAvailableStock;
