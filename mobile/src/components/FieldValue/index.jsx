//#region Imports

import FieldInput from 'containers/FieldInput';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import slsx from 'slsx';
import useStyles from './styles';

//#endregion

const FieldValue = ({ label, name, unit, ...rest }) => {
    const styles = useStyles();

    const leftTextStyle = useMemo(() => slsx(styles.text, styles.leftText), []);
    const rightTextStyle = useMemo(() => slsx(styles.text, styles.rightText), []);

    return (
        <View style={styles.container}>
            <Text style={leftTextStyle}>{label}:</Text>

            <View style={styles.input}>
                <FieldInput name={name} {...rest} />
            </View>

            <Text style={rightTextStyle}>{unit}</Text>
        </View>
    );
};

export default FieldValue;
