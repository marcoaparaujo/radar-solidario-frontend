//#region Imports

import React, { Fragment } from 'react';
import { View } from 'react-native';
import { FormContextProvider } from 'storages/form/context';
import FieldValue from './../../../../../components/FieldValue/index';

//#endregion

const Content = () => {
    return (
        <Fragment>
            <View>
                <FieldValue name={'juriscleide'} label={'carlos felino'} unit='Kg' />
            </View>
            <View>
                <FieldValue name={'jesonel mestre do disfarce'} label={'jurema'} />
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
