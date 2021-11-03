//#region Imports

import { useNavigation } from '@react-navigation/native';
import FAB from 'components/FAB';
import React, { Fragment } from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import { FoodStampContextProvider } from 'storages/food-stamp/context';
import { FormContextProvider } from 'storages/form/context';
import useSystemContext from 'storages/system/context';
import StockInfinityScroll from './components/StockInfinityScroll';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();
    const { charity } = useSystemContext();

    return (
        <Fragment>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text}>Estoque</Text>
                </View>

                <StockInfinityScroll>
                    <View style={styles.name}>
                        <Text style={styles.text}>{charity.name}</Text>
                    </View>
                </StockInfinityScroll>
            </View>
        </Fragment>
    );
};

const Stock = () => {
    const { navigate } = useNavigation();
    return (
        <Fragment>
            <ScrollView>
                <FormContextProvider>
                    <FoodStampContextProvider>
                        <Content />
                    </FoodStampContextProvider>
                </FormContextProvider>
            </ScrollView>
            <FAB onPress={() => navigate(ROUTE_NAMES.FOOD_STAMP.REGISTER)} />
        </Fragment>
    );
};

export default Stock;
