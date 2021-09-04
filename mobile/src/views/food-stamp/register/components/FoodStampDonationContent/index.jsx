//#region Imports

import Button from 'components/Button';
import FieldValue from 'components/FieldValue';
import React, { useRef } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { FormContextProvider } from 'storages/form/context';
import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
import FOOD_STAMP_LABELS from 'utils/constants/labels/food-stamp';
import ModalDonateSuccess from './ModalDonateSuccess';
import useStyles from './styles';

//#endregion

const Content = () => {
    const modalRef = useRef(null);
    const styles = useStyles();

    return (
        <View style={styles.containerMain}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <FieldValue name={FOOD_STAMP_FIELDS.WEIGHT} label={FOOD_STAMP_LABELS.WEIGHT} unit='Kg' />
                </View>

                <View style={styles.content}>
                    <FieldValue name={FOOD_STAMP_FIELDS.LENGHT} label={FOOD_STAMP_LABELS.LENGHT} />
                </View>
            </View>

            <View>
                <Text style={styles.text}>Você está doando</Text>
                <Text style={styles.text}>{/* {quantidade} cestas de {peso}kg */}</Text>
                <Button onPress={() => modalRef.current && modalRef.current.show()} style={styles.button}>
                    Confirmar doação
                </Button>
            </View>

            <ModalDonateSuccess modalRef={modalRef} />
        </View>
    );
};

const FoodStampDonationContent = () => {
    return (
        <FormContextProvider>
            <Content />
        </FormContextProvider>
    );
};

export default FoodStampDonationContent;
