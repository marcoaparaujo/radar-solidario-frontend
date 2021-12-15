//#region Imports

import HorizontalScrollingFilter from 'components/HorizontalScrollingFilter';
import OptionButton from 'components/OptionButton';
import React, { Fragment } from 'react';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const StockHorizontalScrollingFilter = ({ fecthAll, fecthAllByCharityId }) => {
    const styles = useStyles();

    return (
        <Fragment>
            <Text style={styles.text}>Entidade atual</Text>
            <HorizontalScrollingFilter>
                <OptionButton onPress={() => fecthAllByCharityId()}>Todas</OptionButton>
            </HorizontalScrollingFilter>

            <Text style={styles.text}>Todas as entidades</Text>
            <HorizontalScrollingFilter>
                <OptionButton onPress={() => fecthAll()}>Todas</OptionButton>
            </HorizontalScrollingFilter>
        </Fragment>
    );
};

export default StockHorizontalScrollingFilter;
