//#region Imports

import { useCallback } from 'react';
import useApi from 'services/useApi';
import ENDPOINT from 'services/endpoint';

//#endregion

const useGetData = () => {
    const api = useApi();

    const getFindAllByCharityName = useCallback(
        (data) => api.get(ENDPOINT.FOOD_STAMP.FIND_ALL_BY_CHARITY_NAME(data)),
        [api]
    );

    return {
        getFindAllByCharityName
    };
};

export default useGetData;
