//#region Imports

import HorizontalScrollingFilter from 'components/HorizontalScrollingFilter';
import OptionButton from 'components/OptionButton';
import React, { useCallback } from 'react';
import useFoodStampContext from 'storages/food-stamp/context';

//#endregion

const StockHorizontalScrollingFilter = ({ setOptions }) => {
    const { fetchFindAllPaginated, fetchFindAllByIsAblePaginated, setFoodStampsPaginated } = useFoodStampContext();

    const handleAll = useCallback(async () => {
        const { data } = await fetchFindAllPaginated();
        setFoodStampsPaginated(data);

        setOptions({ isAble: false, isAll: true });
    }, [setFoodStampsPaginated, setOptions]);

    const handleAble = useCallback(async () => {
        const { data } = await fetchFindAllByIsAblePaginated();
        setFoodStampsPaginated(data);

        setOptions({ isAble: true, isAll: false });
    }, [setFoodStampsPaginated, setOptions]);

    const handleReserved = useCallback(async () => {
        const { data } = await fetchFindAllByIsAblePaginated(0, false);
        setFoodStampsPaginated(data);

        setOptions({ isAble: false, isAll: false });
    }, [setFoodStampsPaginated, setOptions]);

    return (
        <HorizontalScrollingFilter>
            <OptionButton onPress={() => handleAll()}>Todas</OptionButton>
            <OptionButton onPress={() => handleAble()}>Disponível</OptionButton>
            <OptionButton onPress={() => handleReserved()}>Reservada</OptionButton>
        </HorizontalScrollingFilter>
    );
};

export default StockHorizontalScrollingFilter;
