//#region Imports

import { useCallback } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import useGetData from './services/useGetData';
import useSendData from './services/useSendData';

//#endregion

const useFoodStampService = ({ setFoodStamp, setFoodStamps, setOptions }) => {
    const { run, requestState } = useRequestState();

    const { postFoodStamp } = useSendData();
    const { getFindOptions, getFindById, getFindAllByCharityName } = useGetData();

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

    const fetchFindById = useCallback(
        async (form) => {
            const response = await run(() => getFindById(form));
            setFoodStamp(response.data);

            return response;
        },
        [run, getFindById]
    );

    const fetchOptions = useCallback(async () => {
        const response = await run(() => getFindOptions());
        setOptions(response.data);

        return response;
    }, [run, getFindOptions, setOptions]);

    return {
        fetchOptions,
        fetchFindById,
        includeFoodStamp,
        fetchFindAllByCharityName,
        requestState,
        setFoodStamp
    };
};

export default useFoodStampService;
