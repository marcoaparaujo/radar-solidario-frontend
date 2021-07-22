//#region Imports

import Button from 'components/Button';
import FieldValue from 'components/FieldValue';
import React, { Fragment, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { FormContextProvider } from 'storages/form/context';
import FoodStampTutorialBox from './components/Box';
import useStyles from './styles';

//#endregion

const FoodStampRegister = () => {
    const styles = useStyles();

    const [peso, setPeso] = useState();
    const [quantidade, setQuantidade] = useState();

    return (
        <Fragment>
            <View style={styles.container}>
                <FoodStampTutorialBox />

                <View style={styles.viewPeso}>
                    <FormContextProvider>
                        <FieldValue
                            label='Peso'
                            name='Peso'
                            unit='Kg'
                            onChangeText={(number) => setPeso(number)}
                            value={peso}
                        />
                    </FormContextProvider>
                </View>

                <View style={styles.viewQtd}>
                    <FormContextProvider>
                        <FieldValue
                            label='Quantidade'
                            name='Quantidade'
                            onChangeText={(number) => setQuantidade(number)}
                            value={quantidade}
                        />
                    </FormContextProvider>
                </View>

                <View style={styles.viewFooter}>
                    <Text style={styles.footer}>Você está cadastrando</Text>
                    <Text style={styles.footer}>
                        {quantidade} cestas de {peso}kg
                    </Text>
                </View>

                <View style={styles.button}>
                    <Button title='Confirmar Cadastro' />
                </View>
            </View>
        </Fragment>
    );
};

export default FoodStampRegister;
