//#region Imports

import Button from 'components/Button';
import FieldValue from 'components/FieldValue';
import React from 'react';
import { View } from 'react-native';
import { FormContextProvider } from 'storages/form/context';
import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
import FOOD_STAMP_LABELS from 'utils/constants/labels/food-stamp';
import useStyles from './styles';

//#endregion

const Content = ({ children }) => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <FieldValue name={FOOD_STAMP_FIELDS.SIZE} label={FOOD_STAMP_LABELS.SIZE} unit='Kg' />
            </View>

            <View style={styles.content}>
                <FieldValue name={FOOD_STAMP_FIELDS.AMOUNT} label={FOOD_STAMP_LABELS.AMOUNT} />
            </View>

            {children}

            <Button>Confirmar cadastro</Button>
        </View>
    );
};

const FormFoodStampRegister = ({ children }) => (
    <FormContextProvider>
        <Content>{children}</Content>
    </FormContextProvider>
);

export default FormFoodStampRegister;
