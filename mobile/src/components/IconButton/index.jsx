//#region Imports

import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useStyles from './styles';

//#endregion

const IconButton = ({ icon, isLoading, isDisabled, ...rest }) => {
    const styles = useStyles();

    return (
        <Button
            type='clear'
            loading={isLoading}
            buttonStyle={styles.button}
            containerStyle={styles.container}
            disabled={isLoading || isDisabled}
            icon={<Icon name={icon} style={styles.icon} />}
            {...rest}
        />
    );
};

export default IconButton;
