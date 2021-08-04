//#region Imports

import Button from 'components/Button';
import FieldValue from 'components/FieldValue';
import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { FoodStampContextProvider } from 'storages/food-stamp/context';
import FoodStampTutorialBox from './components/FoodStampTutorialBox';
import FormFoodStampRegister from './FormFoodStampRegister';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();

    return (
        <Fragment>
            <View style={styles.container}>
                <View style={styles.header}>
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
                </View>

                <View style={styles.viewFooter}>
                    <View>
                        <Text style={styles.footer}>Você está cadastrando</Text>
                        <Text style={styles.footer}>
                            {quantidade} cestas de {peso}kg
                        </Text>
                    </View>
                    <View style={styles.button}>
                        <Button title='Confirmar Cadastro' />
                    </View>
                </View>
            </View>

            <FormFoodStampRegister />
        </Fragment>
    );
};

const FoodStampRegister = () => (
    <FoodStampContextProvider>
        <Content />
    </FoodStampContextProvider>
);

export default FoodStampRegister;
