//#region Imports

import React, { useRef } from 'react';
import { View } from 'react-native';
import { FormContextProvider } from 'storages/form/context';
import FieldValue from '../../../../../components/FieldValue/index';
import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
import FOOD_STAMP_LABELS from 'utils/constants/labels/food-stamp';
import useStyles from './styles';
import Button from '../../../../../components/Button/index';
import { ROUTE_NAMES } from 'routes/routes';
import { Text } from 'react-native-elements';
import  Modal  from 'containers/Modal';

//#endregion

const Content = () => {
    const styles = useStyles();
    const ref = useRef(null);

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
                <Button onPress={() => ref.current && ref.current.show()}  style={styles.button}>Confirmar doação</Button>
            </View>
            <Modal style={styles.modal} ref={ref}>
                <View style={styles.mainView}>
                    <View style={styles.aboveView}>
                        <Text style={styles.modalText}>A seguinte doação foi registrada</Text>
                        <Text style={styles.modalText}>com sucesso</Text>
                    </View>
                </View>

            </Modal>
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
