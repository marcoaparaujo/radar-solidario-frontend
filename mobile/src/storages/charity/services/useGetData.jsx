//#region Imports

import { useCallback } from 'react';
import useApi from 'services/useApi';
import ENDPOINT from 'services/endpoint';

//#endregion

const useGetData = () => {
    const api = useApi();

    const getFindOptions = useCallback(() => api.get(ENDPOINT.CHARITY.FIND_OPTIONS), [api]);

    return {
        getFindOptions
    };
};

export default useGetData;
