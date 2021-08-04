//#region Imports

import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { ROUTE_NAMES } from 'routes/routes';
import { FoodStampContextProvider } from 'storages/food-stamp/context';
import useSystemContext from 'storages/system/context';
import AccordionAvailableStock from './components/AccordionAvailableStock';
import AccordionReservedFoodStamps from './components/AccordionReservedFoodStamp';
import AccordionUnavailableFoodStamp from './components/AccordionUnavailableFoodStamp';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();
    const { navigate } = useNavigation();

    const { charity } = useSystemContext();

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* <Text style={styles.text}>{charity.name}</Text>
                <Text style={styles.belowText}>{charity.name}</Text> */}
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
