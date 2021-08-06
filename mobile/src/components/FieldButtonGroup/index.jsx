//#region Imports

import FieldError from 'components/FieldError';
import FieldLabel from 'components/FieldLabel';
import React, { Fragment } from 'react';
import { useController } from 'react-hook-form';
import { ButtonGroup } from 'react-native-elements';
import useFormContext from 'storages/form/context';
import useStyles from './styles';

//#endregion

const FieldButtonGroup = ({ name, label, options }) => {
    const styles = useStyles();

    const {
        control,
        formState: { errors }
    } = useFormContext();

    const { field } = useController({ name, control, defaultValue: '' });

    return (
        <Fragment>
            <FieldLabel label={label} isRequired />

            <ButtonGroup
                buttons={options}
                textStyle={styles.text}
                buttonStyle={styles.button}
                selectedIndex={field.value}
                containerStyle={styles.container}
                selectedTextStyle={styles.selectedText}
                selectedButtonStyle={styles.selectedButton}
                onPress={(selectedIndex) => field.onChange(selectedIndex)}
            />

            <FieldError name={name} errors={errors} />
        </Fragment>
    );
};

export default FieldButtonGroup;
