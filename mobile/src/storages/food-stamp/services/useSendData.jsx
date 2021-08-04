//#region Imports

import { useCallback } from 'react';
import useApi from 'services/useApi';
import ENDPOINT from 'services/endpoint';

//#endregion

const useSendData = () => {
    const api = useApi();

    const postFoodStamp = useCallback((data) => api.post(ENDPOINT.FOOD_STAMP.THIS, data), [api]);

    return {
        postFoodStamp
    };
};

export default useSendData;
