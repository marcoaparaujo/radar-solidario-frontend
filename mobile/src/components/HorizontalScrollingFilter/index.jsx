//#region Imports

import React from 'react';
import { ScrollView, View } from 'react-native';
import useStyles from './styles';

//#endregion

const HorizontalScrollingFilter = () => {
    const styles = useStyles();

    return (
        <ScrollView
            horizontal={true}
            decelerationRate={0}
            snapToAlignment='center'
            contentInset={{ top: 0, left: 30, bottom: 0, right: 30 }}
        >
            <View style={styles.view} />
            <View style={styles.view2} />
            <View style={styles.view} />
            <View style={styles.view2} />
            <View style={styles.view} />
        </ScrollView>
    );
};

export default HorizontalScrollingFilter;
