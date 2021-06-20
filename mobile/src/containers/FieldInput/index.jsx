//#region Imports

import FieldLabel from 'components/FieldLabel';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useController } from 'react-hook-form';
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
        <Input
            ref={inputRef}
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
            // label={<FieldLabel label={label} isRequired={isRequired} />}
            leftIcon={icon && <Icon solid name={icon} type='font-awesome-5' />}
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
    );
};

export default FieldInput;
