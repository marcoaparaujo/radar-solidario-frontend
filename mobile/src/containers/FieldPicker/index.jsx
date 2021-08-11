//#region Imports

import { Picker } from '@react-native-picker/picker';
import FieldError from 'components/FieldError';
import FieldLabel from 'components/FieldLabel';
import React, { useCallback } from 'react';
import { useController } from 'react-hook-form';
import { ActivityIndicator, View } from 'react-native';
import useFormContext from 'storages/form/context';
import useStyles from './styles';

//#endregion

const FieldPicker = ({
    name,
    label,
    onChange,
    options = [],
    isRequired = true,
    isLoading = false,
    isDisabled = false,
    ...rest
}) => {
    const styles = useStyles();

    const {
        control,
        formState: { errors }
    } = useFormContext();

    const { field } = useController({ name, control });

    const handleChange = useCallback(
        (value) => {
            field.onChange(value);
            onChange && onChange(value);
        },
        [field, onChange]
    );

    return (
        <View style={styles.container}>
            <FieldLabel label={label} isRequired={isRequired} />

            <View style={styles.content}>
                <Picker
                    mode='dialog'
                    style={styles.picker}
                    selectedValue={field.value}
                    enabled={!(isDisabled || isLoading)}
                    onValueChange={(itemValue) => handleChange(itemValue)}
                    {...rest}
                >
                    <Picker.Item label={label} value={undefined} />
                    {options &&
                        options.map(({ text, value }, index) => <Picker.Item key={index} label={text} value={value} />)}
                </Picker>

                {isLoading && <ActivityIndicator size='small' style={styles.loader} />}
            </View>

            <FieldError name={name} errors={errors} />
        </View>
    );
};

export default FieldPicker;
