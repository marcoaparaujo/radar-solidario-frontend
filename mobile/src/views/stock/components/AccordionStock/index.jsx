//#region Imports

import Accordion from 'containers/Accordion';
import React from 'react';
import { View } from 'react-native';
import useStyles from './styles';

//#endregion

const AccordionStock = ({ label, children }) => {
    const styles = useStyles();

    return (
        <Accordion label={label}>
            <View style={styles.container}>{children}</View>
        </Accordion>
    );
};

export default AccordionStock;
