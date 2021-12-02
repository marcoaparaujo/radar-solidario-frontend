//#region Imports

import React from 'react';
import { View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const InfoBoard = ({ icon, label, value }) => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <Icon iconStyle={styles.icon} name={icon} size={30} type='font-awesome' />

            <View style={styles.content}>
                <Text style={styles.text}>{label}: </Text>
                <Text style={styles.value}>{value}</Text>
            </View>
        </View>
    );
};

export default InfoBoard;
