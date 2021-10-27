//#region Imports

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import slsx from 'slsx';
import useStyles from './styles';

//#endregion

const OptionButton = ({ children, onPress }) => {
    const styles = useStyles();

    const containerStyle = slsx(styles.container, {
        [styles.containerPressed]: true
    });

    const textStyle = slsx(styles.text, {
        [styles.textPressed]: true
    });

    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress && onPress()}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
};

export default OptionButton;
