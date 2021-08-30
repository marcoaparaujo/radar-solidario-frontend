//#region Imports

import React from 'react';
import { View } from 'react-native';
import { FoodStampContextProvider } from 'storages/food-stamp/context';
import FoodStampTutorialBox from './components/FoodStampTutorialBox';
import FormFoodStampRegister from './FormFoodStampRegister';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <FoodStampTutorialBox />
            <FormFoodStampRegister />
        </View>
    );
};

const FoodStampRegister = () => (
    <FoodStampContextProvider>
        <Content />
    </FoodStampContextProvider>
);

export default FoodStampRegister;
