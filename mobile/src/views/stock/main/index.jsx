//#region Imports

import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useStyles from './styles';
import AvailableStock from '../AvailableStock/index';
import ReservedFoodStamps from '../ReservedFoodStamp/index';
import UnavailableFoodStamps from '../UnavailableFoodStamps';

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
            <AvailableStock />
            <ReservedFoodStamps />
            <UnavailableFoodStamps />
        </Fragment>
    );
};

const Stock = () => (
    <Fragment>
        <Content />
    </Fragment>
);

export default Stock;
