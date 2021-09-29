//#region Imports
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import useStyles from './styles';
//#endregion

const PhoneBoard = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Icon iconStyle={styles.iconStyle} name='envelope' type='font-awesome' size={20} style={styles.icon} />
            <View style={styles.info}>
                <Text style={styles.text}>Email: </Text>
                <Text style={styles.infoText}>email.test@test.com</Text>
            </View>
        </View>
    );
};

export default PhoneBoard;
