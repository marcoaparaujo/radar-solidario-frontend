//#region Imports

import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import useStyles from './styles';
import AccordionAvailableStock from './components/AccordionAvailableStock/index';
import AccordionReservedFoodStamps from './components/AccordionReservedFoodStamp/index';
import AccordionUnavailableFoodStamp from './components/AccordionUnavailableFoodStamp/index';

//#endregion

const Content = () => {
    const styles = useStyles();

    return (
        <Fragment>
            <View style={styles.container}>
                <Text style={styles.text}>Instituição/Entidade:</Text>
                <Text style={styles.text1}>Nome da Instituição/</Text>
                <Text style={styles.text1}>Entidade</Text>
            </View>

            <AccordionAvailableStock />
            <AccordionReservedFoodStamps />
            <AccordionUnavailableFoodStamp />
        </Fragment>
    );
};

const Stock = () => (
    <Fragment>
        <Content />
    </Fragment>
);

export default Stock;
