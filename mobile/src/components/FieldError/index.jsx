//#region Imports

import React, { useMemo } from 'react';
import { Text } from 'react-native-elements';
import extractErrors from 'utils/functions/extractErrors';
import useStyles from './styles';

//#endregion

const FieldError = ({ name, errors, inputRef }) => {
    const styles = useStyles();

    const error = useMemo(() => {
        const value = extractErrors(name, errors);
        if (value) {
            inputRef && inputRef.current.shake();
            return value.message;
        }

        return value;
    }, [name, errors]);

    return <Text style={styles.error}>{error}</Text>;
};

export default FieldError;
