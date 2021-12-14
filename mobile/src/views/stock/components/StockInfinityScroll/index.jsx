//#region Imports

import { useFocusEffect } from '@react-navigation/native';
import InfinityScroll from 'components/InfinityScroll';
import InfoCard from 'components/InfoCard';
import React, { Fragment, useCallback, useRef, useState } from 'react';
import useFoodStampContext from 'storages/food-stamp/context';
import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
import StockModal from '../StockModal';
import StockHorizontalScrollingFilter from './StockHorizontalScrollingFilter';

//#endregion

const StockInfinityScroll = ({ children, navigation }) => {
    const modalRef = useRef(null);

    const [options, setOptions] = useState({ isAll: true, isAble: true, charityId: undefined });
    const {
        foodStamps,
        pagination,
        setFoodStamp,
        requestState,
        fetchFindAllPaginated,
        fetchFindAllByIsAblePaginated,
        setFoodStampsInfinityPaginated
    } = useFoodStampContext();

    const fetch = useCallback(async (page = 0, isAble = true, isAll = true, charityId = undefined) => {
        if (isAll) {
            const { data } = await fetchFindAllPaginated(page, 'weight', charityId);
            setFoodStampsInfinityPaginated(data);
        } else {
            const { data } = await fetchFindAllByIsAblePaginated(page, isAble, 'weight', charityId);
            setFoodStampsInfinityPaginated(data);
        }
    }, []);

    useFocusEffect(
        useCallback(async () => {
            await fetch(0, false, false, options.charityId);
        }, [options])
    );

    const fetchInfinityScroll = useCallback(
        (page) => {
            if (!pagination.last) {
                if (options.isAll) {
                    fetch(page, false, false, options.charityId);
                } else {
                    fetch(page, options.isAble, options.isAll, options.charityId);
                }
            }
        },
        [pagination, options]
    );

    return (
        <Fragment>
            {children}

            <StockHorizontalScrollingFilter setOptions={setOptions} />

            <InfinityScroll
                data={foodStamps}
                isLoading={requestState.isLoading}
                refresh={() => fetchInfinityScroll()}
                fetch={() => fetchInfinityScroll(pagination.page + 1)}
                render={(item, index) => (
                    <InfoCard
                        set={() => setFoodStamp(item)}
                        date={item[FOOD_STAMP_FIELDS.DATE]}
                        show={modalRef.current && modalRef.current.show}
                        key={`${index}-${Math.random()}-${item[FOOD_STAMP_FIELDS.WEIGHT]}`}
                        name={`Peso: ${item[FOOD_STAMP_FIELDS.WEIGHT]} - Quantidade: ${item[FOOD_STAMP_FIELDS.LENGTH]}`}
                    />
                )}
            />

            <StockModal modalRef={modalRef} />
        </Fragment>
    );
};

export default StockInfinityScroll;
