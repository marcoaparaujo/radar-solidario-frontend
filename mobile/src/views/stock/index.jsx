//#region Imports

import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import AccordionAvailableStock from './components/AccordionAvailableStock';
import AccordionReservedFoodStamps from './components/AccordionReservedFoodStamp';
import AccordionUnavailableFoodStamp from './components/AccordionUnavailableFoodStamp';
import useStyles from './styles';

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
