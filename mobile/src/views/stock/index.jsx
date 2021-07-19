//#region Imports

import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import AvailableStock from '../AvailableStock';
import ReservedFoodStamps from '../ReservedFoodStamp';
import UnavailableFoodStamps from '../UnavailableFoodStamps';
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
