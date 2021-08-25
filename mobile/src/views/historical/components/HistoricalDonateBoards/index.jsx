//#region Imports
import React, { Fragment } from 'react';
import useStyles from './styles';
//#endregion

const Content = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <View>
                <Text>20/07/2021 ás 14:32</Text>
            </View>
            <View></View>
            <View></View>
        </View>
    );
};

const HistoricalDonateBoards = () => {
    <Fragment>
        <Content />
    </Fragment>;
};

export default HistoricalDonateBoards;
