//#region Imports
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import useSystemContext from 'storages/system/context';
import useStyles from './styles';
//#endregion

const PhoneBoard = () => {
    const styles = useStyles();
    const { charity } = useSystemContext();
    return (
        <View style={styles.container}>
            <Icon iconStyle={styles.iconStyle} name='phone' type='font-awesome' size={20} style={styles.icon} />
            <View style={styles.info}>
                <Text style={styles.text}>Telefone: </Text>
                <Text style={styles.infoText}>(32) 3213-5641</Text>
            </View>
        </View>
    );
};

export default PhoneBoard;
