//#region Imports

import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button';
import React from 'react';
import { Text } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import AccordionStock from '../AccordionStock';
import useStyles from './styles';

//#endregion

const AccordionAvailableStock = () => {
    const styles = useStyles();
    const { navigate } = useNavigation();

    return (
        <AccordionStock label='Estoque disponível'>
            <Text style={styles.text}>14 Cestas de 04Kg</Text>
            <Text style={styles.text}>04 Cestas de 02Kg</Text>

            <Button style={styles.button}>Doar cesta</Button>
            <Button style={styles.button} onPress={() => navigate(ROUTE_NAMES.FOOD_STAMP.REGISTER)}>
                Cadastrar Cesta
            </Button>
        </AccordionStock>
    );
};

export default AccordionAvailableStock;
