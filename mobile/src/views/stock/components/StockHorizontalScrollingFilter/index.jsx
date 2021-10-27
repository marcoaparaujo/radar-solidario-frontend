//#region Imports

import HorizontalScrollingFilter from 'components/HorizontalScrollingFilter';
import OptionButton from 'components/OptionButton';
import React, { useCallback } from 'react';
import useFoodStampContext from 'storages/food-stamp/context';

//#endregion

const StockHorizontalScrollingFilter = () => {
    const { fetchFindAllByIsAble } = useFoodStampContext();

    const fetch = useCallback(() => {
        fetchFindAllByIsAble();
    }, []);

    return (
        <HorizontalScrollingFilter>
            <OptionButton>Todas</OptionButton>
            <OptionButton>Disponível</OptionButton>
            <OptionButton>Reservada</OptionButton>
            <OptionButton>Reservada</OptionButton>
        </HorizontalScrollingFilter>
    );
};

export default StockHorizontalScrollingFilter;
