//#region Imports

import FieldCheckBox from 'containers/FieldCheckbox';
import React, { Fragment } from 'react';
import { Text } from 'react-native-elements';
import { FormContextProvider } from 'storages/form/context';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();

    return (
        <Fragment>
            <Text style={styles.info}>Cestas disponíveis</Text>

            <FieldCheckBox label='14 cestas de 04kg' name={'B'} />
            <FieldCheckBox label='04 cestas de 08kg' name={'V'} />
        </Fragment>
    );
};

const FormAvailiability = () => (
    <FormContextProvider>
        <Content />
    </FormContextProvider>
);

export default FormAvailiability;
