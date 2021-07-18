//#region Imports

import FieldLabel from 'components/FieldLabel';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useController } from 'react-hook-form';
import { View } from 'react-native-animatable';
import { Icon, Input } from 'react-native-elements';
import useFormContext from 'storages/form/context';
import extractErrors from 'utils/functions/extractErrors';
import FieldInputRightIcon from './FieldInputRightContent';
import useStyles from './styles';

//#endregion

const FieldInput = ({
    name,
    icon,
    mask,
    color,
    label,
    placeholder,
    isRequired = true,
    isLoading = false,
    isDisabled = false,
    isPassword = false,
    ...rest
}) => {
    const styles = useStyles();

    const inputRef = useRef(null);
    const [visible, setVisible] = useState(isPassword);

    const {
        control,
        formState: { errors }
    } = useFormContext();

    const { field } = useController({ name, control, defaultValue: '' });

    const error = useMemo(() => {
        const value = extractErrors(name, errors);
        if (value) {
            inputRef.current.shake();
            return value.message;
        }

        return value;
    }, [name, errors]);

    const handleChange = useCallback(
        (text) => {
            const value = mask ? mask(text) : text;
            field.onChange(value);
        },
        [mask, field]
    );

    return (
        <View ref={inputRef} style={styles.view}>
            <Input
                value={field.value}
                errorMessage={error}
                errorStyle={styles.error}
                secureTextEntry={visible}
                inputStyle={styles.input}
                containerStyle={styles.container}
                disabled={isDisabled || isLoading}
                placeholder={placeholder || label}
                inputContainerStyle={styles.inputContainer}
                onChangeText={(text) => handleChange(text)}
                leftIcon={icon && <Icon solid name={icon} type='font-awesome-5' />}
                label={label && <FieldLabel label={label} isRequired={isRequired} />}
                rightIcon={
                    <FieldInputRightIcon
                        visible={visible}
                        isLoading={isLoading}
                        isPassword={isPassword}
                        setVisible={setVisible}
                    />
                }
                {...rest}
            />
        </View>
    );
};

export default FieldInput;
