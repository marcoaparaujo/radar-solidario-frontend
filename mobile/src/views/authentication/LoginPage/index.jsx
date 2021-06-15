//#region Imports

import Logo from 'assets/images/logo.gif';
import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import useFormContext from 'storages/form/context';
import FieldInput from './../../../containers/FieldInput/index';
import { FormContextProvider } from './../../../storages/form/context';
import AUTHENTICATION_FIELDS from './../../../utils/constants/fields/authentication';
import AUTHENTICATION_LABELS from './../../../utils/constants/labels/authentication';
import authenticationSchema from './../../../utils/validations/yup/schemas/authentication';
import useStyles from './styles';
import THEME from './../../../utils/constants/theme'
import ALIGN from './../../../assets/styles/align';
import useStyles from './styles';




//#endregion
const Content = () => {
    const {handleSubmit} = useFormContext()
    const onSubmit = (data) => {
        console.log(data)



    }


const Styles = useStyles = {





}

    return(

        <Fragment>

            <View>


                <FieldInput
                name = {AUTHENTICATION_FIELDS.EMAIL}
                label = {AUTHENTICATION_LABELS.EMAIL}
                color = {THEME.colors.secondary}
                placeholder = "E-mail"
                icon = "envelope"
                />


                <FieldInput
                name = {AUTHENTICATION_FIELDS.PASSWORD}
                label = {AUTHENTICATION_LABELS.PASSWORD}
                placeholder = "Senha"
                icon = "key"
                isPassword

                />



            </View>

            <Button

                onPress = {handleSubmit(onSubmit)}
            />
        </Fragment>


        )
}

const Authentication = () => (
    <FormContextProvider
        schema = {authenticationSchema}
    >

        <Content/>


    </FormContextProvider>
);

export default Authentication;
