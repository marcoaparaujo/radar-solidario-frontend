import React from 'react';
import { View } from 'react-native';
import useStyles from './styles';
import { Text } from 'react-native-elements';

const BasketData = ({ label, data }) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
            <Text style={styles.label}>{data}</Text>
        </View>
    );
};

export default BasketData;
