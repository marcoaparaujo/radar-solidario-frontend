//#region Imports

import Button from 'components/Button';
import FieldsDonate from 'form-fields/FieldsDonate';
import React, { Fragment, useCallback } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useFamilyContext from 'storages/family/context';
import { FoodStampContextProvider } from 'storages/food-stamp/context';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import ModalDonateSuccess from './components/ModalDonateSuccess';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();

    const { handleSubmit } = useFormContext();
    const { modalConfirmDonateRef } = useFamilyContext();

    const onSubmit = useCallback(
        async (data) => {
            console.log('data', data);
            modalConfirmDonateRef.current.show();
        },
        [modalConfirmDonateRef]
    );

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <FieldsDonate />
            </View>

            <View>
                <Text style={styles.text}>Você está doando</Text>
                <Text style={styles.text}>{/* {quantidade} cestas de {peso}kg */}</Text>

                <Button onPress={handleSubmit(onSubmit)}>Confirmar doação</Button>
            </View>

            <ModalDonateSuccess />
        </View>
    );
};

const FoodStampDonate = () => (
    <FoodStampContextProvider>
        <FormContextProvider>
            <Content />
        </FormContextProvider>
    </FoodStampContextProvider>
);

export default FoodStampDonate;
