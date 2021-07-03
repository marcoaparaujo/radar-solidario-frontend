//#region Imports

import { useCallback } from 'react';
import useApi from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

const useGetData = () => {
    const api = useApi();

    const getFamily = useCallback(() => api.get(ENDPOINT.FAMILY.GET), [api]);

    return {
        getFamily
    };
};

export default useGetData;
