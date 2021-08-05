//#region Imports

import { useCallback } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import useGetData from './services/useGetData';
import useSendData from './services/useSendData';

//#endregion

const useFoodStampService = ({ setFoodStamp, setFoodStamps }) => {
    const { run, requestState } = useRequestState();

    const { getFindAllByCharityName } = useGetData();
    const { postFoodStamp } = useSendData();

    const includeFoodStamp = useCallback(
        async (form) => {
            const response = await run(() => postFoodStamp(form));
            return response;
        },
        [run, postFoodStamp]
    );

    const fetchFindAllByCharityName = useCallback(
        async (form) => {
            const response = await run(() => getFindAllByCharityName(form));
            setFoodStamps(response.data);

            return response;
        },
        [run, getFindAllByCharityName]
    );

    return {
        includeFoodStamp,
        fetchFindAllByCharityName,
        requestState,
        setFoodStamp
    };
};

export default useFoodStampService;
