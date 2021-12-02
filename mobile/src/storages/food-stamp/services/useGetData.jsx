//#region Imports

import { useCallback } from 'react';
import useApi from 'services/useApi';
import ENDPOINT from 'services/endpoint';

//#endregion

const useGetData = () => {
    const api = useApi();

    const getFindOptions = useCallback((charityId) => api.get(ENDPOINT.FOOD_STAMP.FIND_OPTIONS(charityId)), [api]);

    const getFindById = useCallback((data) => api.get(ENDPOINT.FOOD_STAMP.FIND_BY_ID(data)), [api]);

    const getFindAllByCharityName = useCallback(
        (data) => api.get(ENDPOINT.FOOD_STAMP.FIND_ALL_BY_CHARITY_NAME(data)),
        [api]
    );

    const getFindAllByIsAble = useCallback(
        (page, order, isAble, charityId) =>
            api.get(ENDPOINT.FOOD_STAMP.FIND_ALL_BY_IS_ABLE(page, order, isAble, charityId)),
        [api]
    );

    const getFindAllPaginated = useCallback(
        (page, order, charityId) => api.get(ENDPOINT.FOOD_STAMP.FIND_ALL_PAGINATED(page, order, charityId)),
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
