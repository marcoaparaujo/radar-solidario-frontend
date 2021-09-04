//#region Imports

import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button';
import FieldsFoodStamp from 'form-fields/FieldsFoodStamp';
import React, { Fragment, useCallback } from 'react';
import { View } from 'react-native';
import { ROUTE_NAMES } from 'routes/routes';
import useFoodStampContext from 'storages/food-stamp/context';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import useSystemContext from 'storages/system/context';
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
                <FieldsFoodStamp />
                {children}
            </View>

            <Button onPress={handleSubmit(onSubmit)} isLoading={requestState.isLoading}>
                Confirmar cadastro
            </Button>
        </Fragment>
    );
};

const FormFoodStampRegister = ({ children }) => (
    <FormContextProvider schema={foodStampSchema}>
        <Content>{children}</Content>
    </FormContextProvider>
);

export default FormFoodStampRegister;
