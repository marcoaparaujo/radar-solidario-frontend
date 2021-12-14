//#region Imports

import HorizontalScrollingFilter from 'components/HorizontalScrollingFilter';
import OptionButton from 'components/OptionButton';
import React, { Fragment, useCallback } from 'react';
import { Text } from 'react-native-elements';
import useFoodStampContext from 'storages/food-stamp/context';
import useSystemContext from 'storages/system/context';
import useStyles from './styles';

//#endregion

const StockHorizontalScrollingFilter = ({ setOptions }) => {
    const styles = useStyles();

    const { charity } = useSystemContext();
    const { fetchFindAllPaginated, fetchFindAllByIsAblePaginated, setFoodStampsPaginated } = useFoodStampContext();

    const handleAll = useCallback(
        async (charityId = undefined) => {
            const { data } = await fetchFindAllPaginated();
            setFoodStampsPaginated(data);

            setOptions({ isAble: false, isAll: true, charityId });
        },
        [setFoodStampsPaginated, setOptions]
    );

    const handleAble = useCallback(
        async (charityId = undefined) => {
            const { data } = await fetchFindAllByIsAblePaginated();
            setFoodStampsPaginated(data);

            setOptions({ isAble: true, isAll: false, charityId });
        },
        [setFoodStampsPaginated, setOptions]
    );

    const handleReserved = useCallback(
        async (charityId = undefined) => {
            const { data } = await fetchFindAllByIsAblePaginated(0, false);
            setFoodStampsPaginated(data);

            setOptions({ isAble: false, isAll: false, charityId });
        },
        [setFoodStampsPaginated, setOptions]
    );

    return (
        <Fragment>
            <Text style={styles.text}>Entidade atual</Text>
            <HorizontalScrollingFilter>
                <OptionButton onPress={() => handleAll(charity.id)}>Todas</OptionButton>
                <OptionButton onPress={() => handleAble(charity.id)}>Disponível</OptionButton>
                {/* <OptionButton onPress={() => handleReserved(charity.id)}>Reservada</OptionButton> */}
            </HorizontalScrollingFilter>

            <Text style={styles.text}>Todas as entidades</Text>
            <HorizontalScrollingFilter>
                <OptionButton onPress={() => handleAll()}>Todas</OptionButton>
                <OptionButton onPress={() => handleAble()}>Disponível</OptionButton>
                {/* <OptionButton onPress={() => handleReserved()}>Reservada</OptionButton> */}
            </HorizontalScrollingFilter>
        </Fragment>
    );
};

export default StockHorizontalScrollingFilter;
