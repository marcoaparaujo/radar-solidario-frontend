//#region Imports

import InfinityScroll from 'components/InfinityScroll';
import InfoCard from 'components/InfoCard';
import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { Text } from 'react-native-elements';
import useFoodStampContext from 'storages/food-stamp/context';
import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
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
                data={foodStamps}
                isLoading={requestState.isLoading}
                refresh={() => fetchInfinityScroll()}
                fetch={() => fetchInfinityScroll(pagination.page + 1)}
                render={(item, index) => (
                    <InfoCard
                        key={index}
                        date={item[FOOD_STAMP_FIELDS.DATE]}
                        show={modalRef.current && modalRef.current.show}
                        name={`Peso: ${item[FOOD_STAMP_FIELDS.WEIGHT]} - Qtd: ${item[FOOD_STAMP_FIELDS.LENGTH]}`}
                    />
                )}
            />

            <StockModal modalRef={modalRef} />
        </Fragment>
    );
};

export default StockInfinityScroll;
