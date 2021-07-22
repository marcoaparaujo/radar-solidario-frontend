//#region Imports

import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const FoodStampTutorialBox = () => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Devem ser feitos cadastros individuais </Text>
            <Text style={styles.text}>para cada pesagem de cesta.</Text>
            <Text style={styles.text}>Exemplo:</Text>
            <Text style={styles.text}>Cadastrar 3 cestas de 4kg e confirmar</Text>
            <Text style={styles.text}>Cadastrar 2 cestas de 8kg e confirmar</Text>
        </View>
    );
};

export default FoodStampTutorialBox;
