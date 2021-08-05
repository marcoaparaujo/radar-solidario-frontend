//#region Imports

import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button';
import React from 'react';
import { Text } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import useFoodStampContext from 'storages/food-stamp/context';
import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
import AccordionStock from '../AccordionStock';
import useStyles from './styles';

//#endregion

const AccordionAvailableStock = () => {
    const styles = useStyles();
    const { navigate } = useNavigation();

    const { foodStamps } = useFoodStampContext();

    return (
        <AccordionStock label='Estoque disponível'>
            {foodStamps
                .filter((foodStamp) => foodStamp[FOOD_STAMP_FIELDS.IS_ABLE])
                .map((foodStamp, index) => (
                    <Text key={index} style={styles.text}>
                        {foodStamp[FOOD_STAMP_FIELDS.LENGHT]} Cestas de {foodStamp[FOOD_STAMP_FIELDS.WEIGHT]}Kg
                    </Text>
                ))}

            <Button style={styles.button}>Doar cesta</Button>
            <Button style={styles.button} onPress={() => navigate(ROUTE_NAMES.FOOD_STAMP.REGISTER)}>
                Cadastrar Cesta
            </Button>
        </AccordionStock>
    );
};

export default AccordionAvailableStock;
