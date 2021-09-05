//#region Imports

import { useCallback } from 'react';
import useApi from 'services/useApi';
import ENDPOINT from 'services/endpoint';

//#endregion

const useSendData = () => {
    const api = useApi();

    const postDonate = useCallback((data) => api.post(ENDPOINT.DONATE.THIS, data), [api]);

    const postFoodStamp = useCallback((data) => api.post(ENDPOINT.FOOD_STAMP.THIS, data), [api]);

    return {
        postDonate,
        postFoodStamp
    };
};

export default useSendData;
