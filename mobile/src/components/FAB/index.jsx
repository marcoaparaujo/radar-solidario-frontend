//#region Imports

import React from 'react';
import { FAB as FABNative } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const FAB = ({ onPress }) => {
    const styles = useStyles();

    return (
        <FABNative
            visible
            size='large'
            placement='right'
            color='#F15B5B'
            containerStyle={styles.container}
            onPress={() => onPress && onPress()}
            icon={{ name: 'plus', size: 20, color: 'white' }}
        />
    );
};

export default FAB;
