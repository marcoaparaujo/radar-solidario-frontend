//#region Imports

import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import useStyles from './styles';

//#endregion

const InfoCard = ({ name, date, show }) => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <Text>{date}</Text>

            <View style={styles.infoContainer}>
                <Text style={styles.text}>{name}</Text>
                <Icon style={styles.button} name='ellipsis-h' type='font-awesome' onPress={() => show()} />
            </View>
        </View>
    );
};

export default InfoCard;
