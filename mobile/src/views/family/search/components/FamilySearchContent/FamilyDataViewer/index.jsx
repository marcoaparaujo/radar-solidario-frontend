//#region Imports

import React, { useMemo } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import slsx from 'slsx';
import useStyles from './styles';

//#endregion

const FamilyDataViewer = ({ label, field }) => {
    const styles = useStyles();
    const labelStyle = useMemo(() => slsx(styles.label, styles.text), []);

    return (
        <View style={styles.container}>
            <Text style={labelStyle}>{label}:</Text>
            <Text style={styles.text}>{field}</Text>
        </View>
    );
};

export default FamilyDataViewer;
