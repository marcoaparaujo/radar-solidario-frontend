//#region Imports

import React, { Fragment } from 'react';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const InfoUnavailability = () => {
    const styles = useStyles();

    return (
        <Fragment>
            <Text style={styles.info}>Cestas indisponíveis</Text>
            <Text style={styles.text}>01 cestas de 04kg</Text>
            <Text style={styles.text}>01 cestas de 08kg</Text>
        </Fragment>
    );
};

export default InfoUnavailability;
