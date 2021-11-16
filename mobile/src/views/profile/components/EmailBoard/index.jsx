//#region Imports

import React from 'react';
import { View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import useSystemContext from 'storages/system/context';
import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import useStyles from './styles';

//#endregion

const PhoneBoard = () => {
    const styles = useStyles();
    const { user } = useSystemContext();

    return (
        <View style={styles.container}>
            <Icon iconStyle={styles.iconStyle} name='envelope' type='font-awesome' size={20} style={styles.icon} />

            <View style={styles.info}>
                <Text style={styles.text}>Email: </Text>
                <Text style={styles.infoText}>{user[AUTHENTICATION_FIELDS.EMAIL]}</Text>
            </View>
        </View>
    );
};

export default PhoneBoard;
