//#region Imports

import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button';
import FieldsDonate from 'form-fields/FieldsDonate';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { ROUTE_NAMES } from 'routes/routes';
import useFoodStampContext, { FoodStampContextProvider } from 'storages/food-stamp/context';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import useSystemContext from 'storages/system/context';
import formatDonate from 'utils/validations/format/formatDonate';
import foodStampSchema from 'utils/validations/yup/schemas/food-stamp';
import useStyles from './styles';

//#endregion

const Content = ({ family }) => {
    const styles = useStyles();

    const { navigate } = useNavigation();
    const { handleSubmit } = useFormContext();

    const { user, charity } = useSystemContext();
    const { options, fetchDonate } = useFoodStampContext();

    const onSubmit = useCallback(
        async (data) => {
            date = formatDonate(data, user, charity, options);

            const { errors } = await fetchDonate(data);
            !errors.length && navigate(ROUTE_NAMES.TABS, { screen: ROUTE_NAMES.FAMILY.SEARCH });
        },
        [options, family]
    );

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <FieldsDonate />
            </View>

            <Button onPress={handleSubmit(onSubmit)}>Confirmar doação</Button>
        </View>
    );
};

const FoodStampDonate = ({ route }) => (
    <FormContextProvider schema={foodStampSchema}>
        <FoodStampContextProvider>
            <Content family={route.params.family} />
        </FoodStampContextProvider>
    </FormContextProvider>
);

export default FoodStampDonate;
