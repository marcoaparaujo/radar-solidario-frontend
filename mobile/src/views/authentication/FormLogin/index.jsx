//#region Imports

import { useNavigation } from '@react-navigation/native';
import FieldsAuthentication from 'form-fields/FieldsAuthentication';
import React, { Fragment, useCallback } from 'react';
import { Button } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import authenticationSchema from 'utils/validations/yup/schemas/authentication';

//#endregion

const Content = () => {
    const { navigate } = useNavigation();
    const { handleSubmit } = useFormContext();

    const onSubmit = useCallback((data) => {
        console.log(data);
        navigate(ROUTE_NAMES.TABS, { screen: ROUTE_NAMES.SEARCH });
    }, []);

    return (
        <Fragment>
            <FieldsAuthentication />
            <Button onPress={handleSubmit(onSubmit)} title='Enviar' />
        </Fragment>
    );
};

const FormLogin = () => (
    <FormContextProvider schema={authenticationSchema}>
        <Content />
    </FormContextProvider>
);

export default FormLogin;
