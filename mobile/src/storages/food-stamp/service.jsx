//#region Imports

import { useCallback } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import useGetData from './services/useGetData';
import useSendData from './services/useSendData';

//#endregion

const useFoodStampService = ({ setFoodStamp }) => {
    const { run, requestState } = useRequestState();

    const { postFoodStamp } = useSendData();

    const includeFoodStamp = useCallback(
        async (form) => {
            const response = await run(() => postFoodStamp(form));
            return response;
        },
        [run, postFoodStamp]
    );

    return {
        includeFoodStamp,
        requestState,
        setFoodStamp
    };
};

export default useFoodStampService;
