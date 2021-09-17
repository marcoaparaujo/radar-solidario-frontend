//#region Imports

import FieldDatePicker from 'containers/FieldDatePicker';
import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import useFoodStampContext, { FoodStampContextProvider } from 'storages/food-stamp/context';
import { FormContextProvider } from 'storages/form/context';
import useSystemContext from 'storages/system/context';
import StockAvailableBoards from './components/StockAvailableBoards/index';
import StockUnavailableBoards from './components/StockUnavailableBoards/index';
import useStyles from './styles';
//#endregion

const Content = () => {
    const styles = useStyles();

    const { charity } = useSystemContext();
    const { fetchFindAllByCharityName } = useFoodStampContext();

    useEffect(() => {
        (async () => {
            await fetchFindAllByCharityName(charity.name);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.textSpace}>
                <Text style={styles.text}>Estoque</Text>
            </View>
            <View>
                <Text style={styles.text}>{charity.name}</Text>
                <Text style={styles.belowText}>{charity.name}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonView}>
                    <Button buttonStyle={styles.firstButton} title={'Disponível'} />
                </View>
                <View style={styles.buttonView}>
                    <Button buttonStyle={styles.secondButton} title={'Indisponível'} />
                </View>
            </View>

            <StockAvailableBoards />
            <StockUnavailableBoards />
            <StockAvailableBoards />
            <StockUnavailableBoards />
            <StockAvailableBoards />
            <StockUnavailableBoards />
            <StockAvailableBoards />
            <StockUnavailableBoards />
        </View>
    );
};

const Stock = () => (
    <ScrollView>
        <FormContextProvider>
            <FoodStampContextProvider>
                <Content />
            </FoodStampContextProvider>
        </FormContextProvider>
    </ScrollView>
);

export default Stock;
