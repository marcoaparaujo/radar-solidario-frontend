//#region Imports

import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const InfoCard = ({ name, date, show }) => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <Text>{date}</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.text}>{name}</Text>
                <Icon
                    name='ellipsis-h'
                    style={styles.button}
                    onPress={() => show()}
                    containerStyle={styles.iconContainer}
                    color='#00000'
                />
            </View>
        </View>
    );
};

export default InfoCard;
