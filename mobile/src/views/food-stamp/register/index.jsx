//#region Imports

import { useNavigation } from '@react-navigation/core';
import Button from 'components/Button';
import FieldsFoodStamp from 'form-fields/FieldsFoodStamp';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { ROUTE_NAMES } from 'routes/routes';
import useFoodStampContext, { FoodStampContextProvider } from 'storages/food-stamp/context';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import useSystemContext from 'storages/system/context';
import formatSendCharity from 'utils/validations/format/formatSendCharity';
import foodStampSchema from 'utils/validations/yup/schemas/food-stamp';
import FoodStampTutorialBox from './components/FoodStampTutorialBox';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();
    const { navigate } = useNavigation();

    const { charity } = useSystemContext();
    const { handleSubmit } = useFormContext();
    const { includeFoodStamp, requestState } = useFoodStampContext();

    const onSubmit = useCallback(async (data) => {
        data = formatSendCharity(data, charity);
        data = { ...data, isAble: true };

        const { errors } = await includeFoodStamp(data);
        !errors.length && navigate(ROUTE_NAMES.TABS, { screen: ROUTE_NAMES.STOCK });
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <FoodStampTutorialBox />

                <View style={styles.content}>
                    <FieldsFoodStamp />
                </View>
            </View>

            <Button onPress={handleSubmit(onSubmit)} isLoading={requestState.isLoading}>
                Confirmar cadastro
            </Button>
        </View>
    );
};

const FoodStampRegister = () => (
    <FormContextProvider schema={foodStampSchema}>
        <FoodStampContextProvider>
            <Content />
        </FoodStampContextProvider>
    </FormContextProvider>
);

export default FoodStampRegister;
