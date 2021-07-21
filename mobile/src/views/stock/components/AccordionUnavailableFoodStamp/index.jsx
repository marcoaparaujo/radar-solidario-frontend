//#region Imports

import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button';
import React from 'react';
import { Text } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import AccordionStock from '../AccordionStock';
import useStyles from './styles';

//#endregion

const AccordionUnavailableFoodStamp = () => {
    const styles = useStyles();
    const { navigate } = useNavigation();

    return (
        <AccordionStock label='Cestas indisponíveis'>
            <Text style={styles.text}>14 Cestas de 04Kg</Text>
            <Text style={styles.text}>04 Cestas de 1000Kg</Text>

            <Button style={styles.button} onPress={() => navigate(ROUTE_NAMES.FOOD_STAMP.AVAILABILITY)}>
                Alterar disponibilidade
            </Button>
        </AccordionStock>
    );
};

export default AccordionUnavailableFoodStamp;
