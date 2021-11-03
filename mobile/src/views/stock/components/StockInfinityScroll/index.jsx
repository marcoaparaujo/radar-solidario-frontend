//#region Imports

import InfinityScroll from 'components/InfinityScroll';
import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import useFoodStampContext from 'storages/food-stamp/context';
import StockModal from '../StockModal';
import StockHorizontalScrollingFilter from './StockHorizontalScrollingFilter';

//#endregion

const StockInfinityScroll = ({ children }) => {
    const modalRef = useRef(null);

    const [options, setOptions] = useState({ isAll: true, isAble: true });
    const {
        foodStamps,
        pagination,
        requestState,
        fetchFindAllPaginated,
        fetchFindAllByIsAblePaginated,
        setFoodStampsInfinityPaginated
    } = useFoodStampContext();

    const fetch = useCallback(async (page = 0, isAble = true, isAll = true) => {
        if (isAll) {
            const { data } = await fetchFindAllPaginated(page);
            setFoodStampsInfinityPaginated(data);
        } else {
            const { data } = await fetchFindAllByIsAblePaginated(page, isAble);
            setFoodStampsInfinityPaginated(data);
        }
    }, []);

    useEffect(() => {
        (async () => {
            await fetch();
        })();
    }, []);

    const fetchInfinityScroll = useCallback(
        (page) => {
            if (!pagination.last) {
                if (options.isAll) {
                    fetch(page);
                } else {
                    fetch(page, options.isAble, options.isAll);
                }
            }
        },
        [pagination, options]
    );

    return (
        <Fragment>
            <StockHorizontalScrollingFilter setOptions={setOptions} />

            {children}

            <InfinityScroll
                dateProp='date'
                nameProp='weight'
                data={foodStamps}
                modalRef={modalRef}
                requestState={requestState}
                refresh={() => fetchInfinityScroll()}
                fetch={() => fetchInfinityScroll(pagination.page + 1)}
            />

            <StockModal modalRef={modalRef} />
        </Fragment>
    );
};

export default StockInfinityScroll;
