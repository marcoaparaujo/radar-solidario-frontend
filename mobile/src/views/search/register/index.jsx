//#region Imports

import React from 'react';
import { View, ScrollView } from 'react-native';
import FormFamily from './FormFamily';
import useStyles from './styles';

//#endregion

const FamilyRegister = () => {
    const styles = useStyles();

    return (
        <ScrollView>
            <View style={styles.form}>
                <FormFamily />
            </View>
        </ScrollView>
    );
};

export default FamilyRegister;
