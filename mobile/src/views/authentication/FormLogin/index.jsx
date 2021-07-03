//#region Imports

import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button';
import FieldsAuthentication from 'form-fields/FieldsAuthentication';
import React, { Fragment, useCallback } from 'react';
import { ROUTE_NAMES } from 'routes/routes';
import useAuthenticationContext from 'storages/authentication/context';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import authenticationSchema from 'utils/validations/yup/schemas/authentication';

//#endregion

const Content = () => {
    const { navigate } = useNavigation();

    const { handleSubmit } = useFormContext();
    const { fetchLogin } = useAuthenticationContext();

    const onSubmit = useCallback(async (data) => {
        const { errors } = await fetchLogin(data);
        !errors.length && navigate(ROUTE_NAMES.TABS, { screen: ROUTE_NAMES.FAMILY.SEARCH });
    }, []);

    return (
        <Fragment>
            <FieldsAuthentication />
            <Button onPress={handleSubmit(onSubmit)}>Entrar</Button>
            <Button onPress={() => navigate(ROUTE_NAMES.TABS, { screen: ROUTE_NAMES.FAMILY.SEARCH })}>Avançar</Button>
        </Fragment>
    );
};

const FormLogin = () => (
    <FormContextProvider schema={authenticationSchema}>
        <Content />
    </FormContextProvider>
);

export default FormLogin;
