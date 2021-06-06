//#region Imports

import React from 'react';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const FieldLabel = ({ label, isRequired, ...rest }) => {
    const styles = useStyles();

    return (
        <Text style={styles.label} {...rest}>
            {label}
            {!isRequired && <Text style={styles.required}>*</Text>}
        </Text>
    );
};

export default FieldLabel;
