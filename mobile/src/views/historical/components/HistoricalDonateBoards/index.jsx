//#region Imports
import React, { Fragment } from 'react';
import useStyles from './styles';
import { Text } from 'react-native-elements';
import { ScrollView, View } from 'react-native';
import IconButton from 'components/IconButton';
import { Button } from 'react-native-elements';
//#endregion

const Content = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <View>
                <Text>20/07/2021 ás 14:32</Text>
            </View>
            <View>
                <Text style={styles.text}>Doada 01 cesta - 04kg</Text>
            </View>
            <View></View>
        </View>
    );
};

const HistoricalDonateBoards = () => (
    <Fragment>
        <Content />
    </Fragment>
);

export default HistoricalDonateBoards;
