//#region Imports

import AuthenticationFields from 'form-fields/authentication';
import React, { Fragment, useCallback } from 'react';
import { Button } from 'react-native-elements';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import authenticationSchema from 'utils/validations/yup/schemas/authentication';

//#endregion

const Content = () => {
    const { handleSubmit } = useFormContext();

    const onSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    return (
        <Fragment>
            <AuthenticationFields />
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
