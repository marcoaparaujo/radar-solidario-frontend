//#region Imports

import React, { Fragment, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, useTheme } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useSystemContext from 'storages/system/context';
import useStyles from './styles';

//#endregion

const Snackbar = () => {
    const styles = useStyles();
    const { theme } = useTheme();

    const {
        setSnackbar,
        snackbar: { visible, errors, action }
    } = useSystemContext();

    const handleHide = useCallback(() => {
        action && action();
        setSnackbar();
    }, [action]);

    return (
        <Fragment>
            {visible && (
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Icon name='times-circle' size={40} color={theme.colors.white} />

                        <Text style={styles.text}>{errors.lenght === 1 ? errors[0] : errors}</Text>

                        <TouchableOpacity onPress={() => handleHide()}>
                            <Text style={styles.action}>Ocultar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </Fragment>
    );
};

export default Snackbar;
