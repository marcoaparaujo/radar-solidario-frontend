//#region Imports
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import useStyles from './styles';
//#endregion

const AdressBoard = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Icon
                iconStyle={styles.iconStyle}
                name='location-arrow'
                type='font-awesome'
                size={20}
                style={styles.icon}
            />
            <View style={styles.info}>
                <Text style={styles.text}>Endereço: </Text>
                <Text style={styles.infoText}>Rua Santa Rita, Centro, Nº 250</Text>
            </View>
        </View>
    );
};

export default AdressBoard;
