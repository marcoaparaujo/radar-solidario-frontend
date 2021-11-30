//#region Imports

import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const InfoCard = ({ name, date, set, show }) => {
    const styles = useStyles();

    const showModal = useCallback(() => {
        set();
        show();
    }, [set, show]);

    return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <Text>{date}</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.text}>{name}</Text>

                <Icon
                    name='ellipsis-h'
                    type='font-awesome'
                    style={styles.button}
                    onPress={() => showModal()}
                    containerStyle={styles.iconContainer}
                />
            </View>
        </View>
    );
};

export default InfoCard;
