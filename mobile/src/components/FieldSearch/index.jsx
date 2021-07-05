//#region Imports

import React, { useCallback, useMemo } from 'react';
import { useController } from 'react-hook-form';
import { Icon, SearchBar, useTheme } from 'react-native-elements';
import useFormContext from 'storages/form/context';
import extractErrors from 'utils/functions/extractErrors';
import useStyles from './styles';

//#endregion

const FieldSearch = ({ mask, name, placeholder, onPress }) => {
    const styles = useStyles();
    const { theme } = useTheme();

    const {
        control,
        formState: { errors }
    } = useFormContext();

    const { field } = useController({ name, control, defaultValue: '' });

    const error = useMemo(() => {
        const value = extractErrors(name, errors);
        if (value) {
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
        <SearchBar
            round
            autoFocus
            lightTheme
            blurOnSubmit
            disabled={false}
            selectTextOnFocus
            showLoading={false}
            value={field.value}
            errorMessage={error}
            errorStyle={styles.error}
            inputStyle={styles.input}
            placeholder={placeholder}
            containerStyle={styles.container}
            inputContainerStyle={styles.inputContainer}
            loadingProps={{ color: theme.colors.black }}
            onChangeText={(value) => handleChange(value)}
            searchIcon={
                <Icon
                    solid
                    name='search'
                    type='font-awesome-5'
                    style={styles.searchIcon}
                    color={theme.colors.grey}
                    onPress={() => onPress && onPress()}
                />
            }
        />
    );
};

export default FieldSearch;
