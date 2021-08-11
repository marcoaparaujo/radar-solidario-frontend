//#region Imports

import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button';
import FieldsUser from 'form-fields/FieldsUser';
import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { ROUTE_NAMES } from 'routes/routes';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import useUserContext from 'storages/user/context';
import formatIncludeUser from 'utils/validations/format/formatIncludeUser';
import { charitySelectSchema } from 'utils/validations/yup/schemas/charity';
import userSchema from 'utils/validations/yup/schemas/user';
import useStyles from './styles';
import authenticationSchema from 'utils/validations/yup/schemas/authentication';
import FieldsAuthentication from 'form-fields/FieldsAuthentication';

//#endregion

const Content = () => {
    const styles = useStyles();
    const { navigate } = useNavigation();

    const { handleSubmit } = useFormContext();
    const { includeVoluntary, requestState } = useUserContext();

    const onSubmit = useCallback(async (data) => {
        data = formatIncludeUser(data);

        const { errors } = await includeVoluntary(data);
        !errors.length && navigate(ROUTE_NAMES.TABS, { screen: ROUTE_NAMES.FAMILY.SEARCH });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.fields}>
                <FieldsAuthentication />
                <FieldsUser />
            </View>

            <Button onPress={handleSubmit(onSubmit)} isLoading={requestState.isLoading}>
                Concluir
            </Button>
        </View>
    );
};

const FormUserRegister = () => {
    const schema = useMemo(() => userSchema.concat(charitySelectSchema).concat(authenticationSchema), []);

    return (
        <FormContextProvider schema={schema}>
            <Content />
        </FormContextProvider>
    );
};

export default FormUserRegister;
