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
        (page, isAble = true) => api.get(ENDPOINT.FOOD_STAMP.FIND_ALL_BY_IS_ABLE(page, isAble)),
        [api]
    );

    const getFindAllPaginated = useCallback((page) => api.get(ENDPOINT.DONATE.FIND_ALL_PAGINATED(page)), [api]);

    return {
        getFindById,
        getFindOptions,
        getFindAllByIsAble,
        getFindAllPaginated,
        getFindAllByCharityName
    };
};

export default useGetData;
