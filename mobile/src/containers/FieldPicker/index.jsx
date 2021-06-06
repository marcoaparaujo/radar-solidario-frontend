//#region Imports

import { Picker } from '@react-native-picker/picker';
import COLOR from 'assets/styles/color';
import FieldLabel from 'components/FieldLabel';
import React, { useCallback } from 'react';
import { useController } from 'react-hook-form';
import { ActivityIndicator, View } from 'react-native';
import { Icon } from 'react-native-elements';
import useFormContext from 'storages/form/context';
import useStyles from './styles';

//#endregion

const FieldPicker = ({
    name,
    icon,
    label,
    onChange,
    iconColor,
    items = [],
    isRequired = true,
    isLoading = false,
    isDisabled = false,
    ...rest
}) => {
    const styles = useStyles();

    const { control } = useFormContext();
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
                <View style={styles.containerPicker}>
                    <Icon name={icon} style={styles.icon} />

                    <Picker
                        mode='dialog'
                        style={styles.picker}
                        itemStyle={styles.item}
                        selectedValue={field.value}
                        enabled={!(isDisabled || isLoading)}
                        onValueChange={(itemValue) => handleChange(itemValue)}
                        {...rest}
                    >
                        <Picker.Item label={label} value={undefined} />
                        {items && items.map(({ text, value }) => <Picker.Item label={text} value={value} />)}
                    </Picker>

                    {isLoading && <ActivityIndicator size='small' style={styles.loader} />}
                </View>
            </View>
        </View>
    );
};

export default FieldPicker;
