//#region Imports

import { useCallback } from 'react';
import useApi from 'services/useApi';
import ENDPOINT from 'services/endpoint';

//#endregion

const useSendData = () => {
    const api = useApi();

    const postIncludeVoluntary = useCallback((data) => api.post(ENDPOINT.USER.INCLUDE_VOLUNTARY, data), [api]);

    return {
        postIncludeVoluntary
    };
};

export default useSendData;
