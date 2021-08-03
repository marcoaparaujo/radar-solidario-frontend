//#region Imports

import useStyles from './styles';
import { View } from 'react-native';
import React, { Fragment } from 'react';
import { Text } from 'react-native-elements';
import KeyButton from 'components/ButtonGroup';
import FieldInput from 'containers/FieldInput/index';
import USER_FIELDS from 'utils/constants/fields/user';
import USER_LABELS from 'utils/constants/labels/user';
import { FormContextProvider } from 'storages/form/context';
import userSchema from 'utils/validations/yup/schemas/user';

//#endregion

const Content = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <View>
                <FieldInput name={USER_FIELDS.THIS} label={USER_LABELS.NAME}></FieldInput>

                <FieldInput name={USER_FIELDS.BIRTH} label={USER_LABELS.BIRTH}></FieldInput>

                <FieldInput name={USER_FIELDS.CPF} label={USER_LABELS.CPF}></FieldInput>

                <FieldInput name={USER_FIELDS.PHONE} label={USER_LABELS.PHONE}></FieldInput>
            </View>

            <View style={styles.text}>
                <Text>Selecione o Gênero</Text>
            </View>
            <KeyButton />
        </View>
    );
};

const UserRegister = () => {
    const schema = userSchema;
    return (
        <Fragment>
            <FormContextProvider schema={schema}>
                <Content />
            </FormContextProvider>
        </Fragment>
    );
};

export default UserRegister;
