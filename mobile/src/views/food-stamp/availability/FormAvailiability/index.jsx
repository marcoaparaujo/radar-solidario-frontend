//#region Imports

import React, { Fragment } from 'react';
import { View } from 'react-native';
import { CheckBox, Text } from 'react-native-elements';
import slsx from 'slsx';
import { FormContextProvider } from 'storages/form/context';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();

    const textLeftStyle = slsx(styles.text, styles.textBold, styles.textLeft);
    const textRightStyle = slsx(styles.text, styles.textBold, styles.textRight);

    return (
        <Fragment>
            <Text style={styles.info}>Cestas disponíveis</Text>

            <View style={styles.row}>
                <CheckBox containerStyle={styles.checkboxContainer} />

                <Text style={textLeftStyle}>14</Text>
                <Text style={styles.text}>cestas de</Text>
                <Text style={textRightStyle}>04kg</Text>
            </View>

            <View style={styles.row}>
                <CheckBox containerStyle={styles.checkboxContainer} />

                <Text style={textLeftStyle}>04</Text>
                <Text style={styles.text}>cestas de</Text>
                <Text style={textRightStyle}>08kg</Text>
            </View>
        </Fragment>
    );
};

const FormAvailiability = () => (
    <FormContextProvider>
        <Content />
    </FormContextProvider>
);

export default FormAvailiability;
