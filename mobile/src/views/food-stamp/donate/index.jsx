//#region Imports

import Button from 'components/Button';
import FieldsDonate from 'form-fields/FieldsDonate';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import useFoodStampContext, { FoodStampContextProvider } from 'storages/food-stamp/context';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import foodStampSchema from 'utils/validations/yup/schemas/food-stamp';
import ModalDonateSuccess from './components/ModalDonateSuccess';
import useStyles from './styles';

//#endregion

const Content = ({ family }) => {
    const styles = useStyles();

    const { handleSubmit } = useFormContext();
    const { modalConfirmDonateRef } = useFoodStampContext();

    const onSubmit = useCallback(
        async (data) => {
            modalConfirmDonateRef.current.show();
        },
        [modalConfirmDonateRef]
    );

    console.log('family', family);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <FieldsDonate />
            </View>

            <Button onPress={handleSubmit(onSubmit)}>Confirmar doação</Button>

            <ModalDonateSuccess />
        </View>
    );
};

const FoodStampDonate = ({ route }) => (
    <FormContextProvider schema={foodStampSchema}>
        <FoodStampContextProvider>
            <Content family={route} />
        </FoodStampContextProvider>
    </FormContextProvider>
);

export default FoodStampDonate;
