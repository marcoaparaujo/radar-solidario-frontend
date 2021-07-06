import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useStyles from './styles';

const UserData = ({ label, field }) => {
    const styles = useStyles();

    return (
        <View style={styles.space}>
            <Text style={styles.text}>{label}:</Text>
            <Text style={styles.field}>{field}</Text>
        </View>
    );
};

export default UserData;
