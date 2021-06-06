//#region Imports

import { useTheme } from '@react-navigation/native';
import React, { Fragment, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const FieldInputRightContent = ({ isLoading, isPassword, visible, setVisible }) => {
    const theme = useTheme();
    const styles = useStyles();

    const icon = useMemo(() => (visible ? 'eye' : 'eye-slash'), [visible]);

    return (
        <Fragment>
            {isLoading && <ActivityIndicator size='small' color={theme.colors.primary} style={styles.container} />}
            {isPassword && !isLoading && (
                <Icon name={icon} style={styles.container} onPress={() => setVisible((prevState) => !prevState)} />
            )}
        </Fragment>
    );
};

export default FieldInputRightContent;
