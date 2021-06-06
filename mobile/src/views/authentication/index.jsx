//#region Imports

import FieldInput from 'containers/FieldInput';
import React from 'react';
import { FormContextProvider } from 'storages/form/context';
import { View } from 'react-native';

//#endregion

const Authentication = () => (
    <FormContextProvider>
        <View style={{ width: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FieldInput name={'teste'} />
        </View>
    </FormContextProvider>
);

export default Authentication;
