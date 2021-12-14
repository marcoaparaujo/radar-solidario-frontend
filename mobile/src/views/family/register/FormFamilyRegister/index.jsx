//#region Imports

import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button';
import FieldsAddress from 'form-fields/FieldsAddress';
import FieldsFamily from 'form-fields/FieldsFamily';
import React, { Fragment, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import useFamilyContext from 'storages/family/context';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import formatSendAddress from 'utils/validations/format/formatSendAddress';
import addressSchema from 'utils/validations/yup/schemas/address';
import familySchema from 'utils/validations/yup/schemas/family';

//#endregion

const Content = () => {
    const { navigate } = useNavigation();

    const { handleSubmit, formState } = useFormContext();
    const { includeFamily, requestState } = useFamilyContext();

    const onSubmit = useCallback(async (data) => {
        data = formatSendAddress(data);

        const { errors } = await includeFamily(data);
        !errors.length && navigate(ROUTE_NAMES.TABS, { screen: ROUTE_NAMES.FAMILY.SEARCH });
    }, []);

    return (
        <Fragment>
            <FieldsFamily />
            <FieldsAddress />

            {Object.keys(formState.errors).length > 0 && (
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 5 }}>
                    <Text style={{ color: 'red' }}>Erro ao efetuar o cadastro, cheque os campos</Text>
                </View>
            )}

            <Button onPress={handleSubmit(onSubmit)} isLoading={requestState.isLoading}>
                Concluir
            </Button>
        </Fragment>
    );
};

const FormFamilyRegister = () => {
    const schema = useMemo(() => familySchema.concat(addressSchema), [familySchema, addressSchema]);

    return (
        <FormContextProvider schema={schema}>
            <Content />
        </FormContextProvider>
    );
};

export default FormFamilyRegister;
