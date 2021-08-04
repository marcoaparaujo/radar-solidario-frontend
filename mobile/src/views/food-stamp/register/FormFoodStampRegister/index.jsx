//#region Imports

import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button';
import FieldValue from 'components/FieldValue';
import React, { Fragment, useCallback } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import useFoodStampContext from 'storages/food-stamp/context';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import useSystemContext from 'storages/system/context';
import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
import FOOD_STAMP_LABELS from 'utils/constants/labels/food-stamp';
import formatSendCharity from 'utils/validations/format/formatSendCharity';
import foodStampSchema from 'utils/validations/yup/schemas/food-stamp';
import useStyles from './styles';

//#endregion

const Content = ({ children }) => {
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
        <Fragment>
            <View style={styles.container}>
                <View style={styles.content}>
                    <FieldValue name={FOOD_STAMP_FIELDS.LENGHT} label={FOOD_STAMP_LABELS.LENGHT} unit='Kg' />
                </View>

                <View style={styles.content}>
                    <FieldValue name={FOOD_STAMP_FIELDS.WEIGHT} label={FOOD_STAMP_LABELS.WEIGHT} />
                </View>

                {children}
            </View>
            <View>
                <Button onPress={handleSubmit(onSubmit)} isLoading={requestState.isLoading}>
                    Confirmar cadastro
                </Button>
                <Text style={styles.text}>Você está cadastrando</Text>
                <Text style={styles.text}>{/* {quantidade} cestas de {peso}kg */}</Text>
            </View>
        </Fragment>
    );
};

const FormFoodStampRegister = ({ children }) => (
    <FormContextProvider schema={foodStampSchema}>
        <Content>{children}</Content>
    </FormContextProvider>
);

export default FormFoodStampRegister;
