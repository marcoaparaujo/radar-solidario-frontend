//#region Imports

import React, { Fragment, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { Icon, useTheme } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const FieldInputRightContent = ({ isLoading, isPassword, visible, setVisible }) => {
    const styles = useStyles();
    const { theme } = useTheme();

    const icon = useMemo(() => (visible ? 'eye' : 'eye-slash'), [visible]);

    return (
        <Fragment>
            {isLoading && (
                <ActivityIndicator size='small' color={theme.colors.primary.medium} style={styles.container} />
            )}
            {isPassword && !isLoading && (
                <Icon
                    name={icon}
                    color={theme.colors.black}
                    containerStyle={styles.container}
                    onPress={() => setVisible((prevState) => !prevState)}
                />
            )}
        </Fragment>
    );
};

export default FieldInputRightContent;
