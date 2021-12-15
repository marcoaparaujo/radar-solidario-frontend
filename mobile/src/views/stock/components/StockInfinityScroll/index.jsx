//#region Imports

import { useFocusEffect } from '@react-navigation/native';
import InfinityScroll from 'components/InfinityScroll';
import InfoCard from 'components/InfoCard';
import React, { Fragment, useCallback, useRef, useState } from 'react';
import useFoodStampContext from 'storages/food-stamp/context';
import useSystemContext from 'storages/system/context';
import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
import StockModal from '../StockModal';
import StockHorizontalScrollingFilter from './StockHorizontalScrollingFilter';

//#endregion

const StockInfinityScroll = ({ children, navigation }) => {
    const modalRef = useRef(null);

    const [options, setOptions] = useState({ isAll: false });

    const { charity } = useSystemContext();
    const {
        foodStamps,
        pagination,
        setFoodStamp,
        requestState,
        fetchFindAllPaginated,
        setFoodStampsPaginated,
        setFoodStampsInfinityPaginated
    } = useFoodStampContext();

    const fecthAll = useCallback(
        async (page = 0) => {
            const { data } = await fetchFindAllPaginated(page, 'weight');
            if (page === 0) {
                setFoodStampsPaginated(data);
            } else {
                setFoodStampsInfinityPaginated(data);
            }

            setOptions({ isAll: true });
        },
        [setFoodStampsInfinityPaginated, setOptions]
    );

    const fecthAllByCharityId = useCallback(
        async (page = 0) => {
            const { data } = await fetchFindAllPaginated(page, 'weight', charity.id);
            if (page === 0) {
                setFoodStampsPaginated(data);
            } else {
                setFoodStampsInfinityPaginated(data);
            }

            setOptions({ isAll: false });
        },
        [charity, setFoodStampsInfinityPaginated, setOptions]
    );

    const fetchInfinityScroll = useCallback(
        async (page) => {
            if (!pagination.last) {
                if (options.isAll) {
                    await fecthAll(page);
                } else {
                    await fecthAllByCharityId(page);
                }
            }
        },
        [pagination, options]
    );

    useFocusEffect(
        useCallback(async () => {
            await fecthAllByCharityId();
        }, [])
    );

    return (
        <Fragment>
            {children}

            <StockHorizontalScrollingFilter fecthAll={fecthAll} fecthAllByCharityId={fecthAllByCharityId} />

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
