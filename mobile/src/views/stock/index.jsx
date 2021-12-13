//#region Imports

import { useNavigation } from '@react-navigation/native';
import FAB from 'components/FAB';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import { FoodStampContextProvider } from 'storages/food-stamp/context';
import { FormContextProvider } from 'storages/form/context';
import useSystemContext from 'storages/system/context';
import StockInfinityScroll from './components/StockInfinityScroll';
import useStyles from './styles';

//#endregion

const Content = ({ navigation }) => {
    const styles = useStyles();
    const { charity } = useSystemContext();

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.text}>Estoque</Text>
            </View>

            <StockInfinityScroll navigation={navigation}>
                <View style={styles.name}>
                    <Text style={styles.text}>{charity.name}</Text>
                </View>
            </StockInfinityScroll>
        </View>
    );
};

const Stock = ({ navigation }) => {
    const { navigate } = useNavigation();

    return (
        <View>
            <FormContextProvider>
                <FoodStampContextProvider>
                    <Content navigation={navigation} />
                </FoodStampContextProvider>
            </FormContextProvider>

            <FAB onPress={() => navigate(ROUTE_NAMES.FOOD_STAMP.REGISTER)} />
        </View>
    );
};

export default Stock;
