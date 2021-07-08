//#region Imports

import { useCallback } from 'react';
import useApi from 'services/useApi';
import ENDPOINT from 'services/endpoint';

//#endregion

const useSendData = () => {
    const api = useApi();

    const postFamily = useCallback((data) => api.post(ENDPOINT.FAMILY.THIS, data), [api]);

    return {
        postFamily
    };
};

export default useSendData;
