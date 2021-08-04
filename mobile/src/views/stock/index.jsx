//#region Imports

import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';
import { FoodStampContextProvider } from 'storages/food-stamp/context';
import AccordionAvailableStock from './components/AccordionAvailableStock';
import AccordionReservedFoodStamps from './components/AccordionReservedFoodStamp';
import AccordionUnavailableFoodStamp from './components/AccordionUnavailableFoodStamp';
import useStyles from './styles';
import Button from 'components/Button';
import { ROUTE_NAMES } from 'routes/routes';
import { useNavigation } from '@react-navigation/native';

//#endregion

const Content = () => {
    const styles = useStyles();
    const { navigate } = useNavigation();

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Instituição/Entidade:</Text>
                <Text style={styles.belowText}>Nome da Instituição/</Text>
                <Text style={styles.belowText}>Entidade</Text>
            </View>

            <AccordionAvailableStock />
            <AccordionReservedFoodStamps />
            <AccordionUnavailableFoodStamp />
            <Button style={styles.button} onPress={() => navigate(ROUTE_NAMES.USER)}>
                Avançar
            </Button>
        </ScrollView>
    );
};

const Stock = () => (
    <FoodStampContextProvider>
        <Content />
    </FoodStampContextProvider>
);

export default Stock;
