//#region Imports

import React, { Fragment } from 'react';
import { View } from 'react-native';
import { FormContextProvider } from 'storages/form/context';
import FieldValue from './../../../../../components/FieldValue/index';
import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
import FOOD_STAMP_LABELS from 'utils/constants/labels/food-stamp';
import useStyles from './styles';
import Button from './../../../../../components/Button/index';
import { ROUTE_NAMES } from 'routes/routes';
//#endregion

const Content = () => {
    const styles = useStyles();

    return (
        <Fragment>
            <View style={styles.container}>
                <View style={styles.content}>
                    <FieldValue name={FOOD_STAMP_FIELDS.WEIGHT} label={FOOD_STAMP_LABELS.WEIGHT} unit='Kg' />
                </View>

                <View style={styles.content}>
                    <FieldValue name={FOOD_STAMP_FIELDS.LENGHT} label={FOOD_STAMP_LABELS.LENGHT} />
                </View>
            </View>
            <View>
                <Button>Confirmar cadastro</Button>
            </View>
        </Fragment>
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
