//#region Imports

import Button from 'components/Button';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import ListItemComponent from '../ListItemComponent';
import useStyles from './styles';

//#endregion

const AvailableStock = () => {
    const styles = useStyles();

    return (
        <ListItemComponent label='Estoque disponível'>
            <View style={styles.secondcontainer}>
                <Text style={styles.textdois}>14 Cestas de 04Kg</Text>
                <Text style={styles.textdois}>04 Cestas de 1000Kg</Text>
                <Button style={styles.button}>Doar cesta</Button>
                <Button style={styles.button}>Cadastrar Cesta</Button>
            </View>
        </ListItemComponent>
    );
};

export default AvailableStock;
