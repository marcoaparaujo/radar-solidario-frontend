//#region Imports

import React from 'react';
import { useController } from 'react-hook-form';
import { CheckBox } from 'react-native-elements';
import useFormContext from 'storages/form/context';
import useStyles from './styles';

//#endregion

const FieldCheckBox = ({ name, label, isLoading = false, isDisabled = false, ...rest }) => {
    const styles = useStyles();

    const { control } = useFormContext();
    const { field } = useController({ name, control, defaultValue: false });

    return (
        <CheckBox
            title={label}
            checked={field.value}
            disabled={isDisabled || isLoading}
            containerStyle={styles.checkboxContainer}
            onPress={() => field.onChange(!field.value)}
            {...rest}
        />
    );
};

export default FieldCheckBox;
