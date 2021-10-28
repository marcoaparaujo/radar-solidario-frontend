//#region Imports

import { useCallback } from 'react';
import useApi from 'services/useApi';
import ENDPOINT from 'services/endpoint';

//#endregion

const useGetData = () => {
    const api = useApi();

    const getFindOptions = useCallback(() => api.get(ENDPOINT.FOOD_STAMP.FIND_OPTIONS), [api]);

    const getFindById = useCallback((data) => api.get(ENDPOINT.FOOD_STAMP.FIND_BY_ID(data)), [api]);

    const getFindAllByCharityName = useCallback(
        (data) => api.get(ENDPOINT.FOOD_STAMP.FIND_ALL_BY_CHARITY_NAME(data)),
        [api]
    );

    const getFindAllByIsAble = useCallback(
        (page, order, isAble) => api.get(ENDPOINT.FOOD_STAMP.FIND_ALL_BY_IS_ABLE(page, order, isAble)),
        [api]
    );

    const getFindAllPaginated = useCallback(
        (page, order) => api.get(ENDPOINT.FOOD_STAMP.FIND_ALL_PAGINATED(page, order)),
        [api]
    );

    const getFindAllDonatesPaginated = useCallback((page) => api.get(ENDPOINT.DONATE.FIND_ALL_PAGINATED(page)), [api]);

    return {
        getFindById,
        getFindOptions,
        getFindAllByIsAble,
        getFindAllPaginated,
        getFindAllByCharityName,
        getFindAllDonatesPaginated
    };
};

export default useGetData;
