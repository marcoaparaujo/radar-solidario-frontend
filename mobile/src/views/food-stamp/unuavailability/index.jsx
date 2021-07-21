//#region Imports

import Button from 'components/Button';
import React, { Fragment } from 'react';
import { View } from 'react-native';
import { CheckBox, Text } from 'react-native-elements';
import Available from './components/available';
import Unavailable from './components/unavailable';
import useStyles from './styles';

//#endregion

const BasketUnavailability = () => {
    const styles = useStyles();

    return (
        <Fragment>
            <View style={styles.container}>
                <Available />
                <Unavailable />

                <View style={styles.viewFooter}>
                    <Text style={styles.footer}>01 cestas de 04kg</Text>
                    <Text style={styles.footer}> será indisponibilizada</Text>
                </View>
                <View>
                    <Button title='Confirmar Cadastro' />
                </View>
            </View>
        </Fragment>
    );
};

export default BasketUnavailability;
