//#region Imports

import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const Box = () => {
    const styles = useStyles();

    return (
        <View style={styles.box}>
            <Text style={styles.textBox}>Devem ser feitos cadastros individuais </Text>
            <Text style={styles.textBox}>para cada pesagem de cesta.</Text>
            <Text style={styles.textBox}>Exemplo:</Text>
            <Text style={styles.textBox}>Cadastrar 3 cestas de 4kg e confirmar</Text>
            <Text style={styles.textBox}>Cadastrar 2 cestas de 8kg e confirmar</Text>
        </View>
    );
};

export default Box;
