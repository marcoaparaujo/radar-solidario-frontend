//#region Imports

import { useCallback } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import useGetData from './services/useGetData';
import useSendData from './services/useSendData';

//#endregion

const useFoodStampService = ({ setFoodStamp, setFoodStamps, setFoodStampsPaginated, setOptions }) => {
    const { run, requestState } = useRequestState();

    const { postFoodStamp, postDonate } = useSendData();
    const { getFindOptions, getFindById, getFindAllByCharityName, getFindAllByIsAble, getFindAllPaginated } =
        useGetData();

    const fetchDonate = useCallback(
        async (form) => {
            const response = await run(() => postDonate(form));
            return response;
        },
        [run, postDonate]
    );

    const includeFoodStamp = useCallback(
        async (form) => {
            const response = await run(() => postFoodStamp(form));
            return response;
        },
        [run, postFoodStamp]
    );

    const fetchFindAllByIsAble = useCallback(
        async (page, isAble) => {
            const response = await run(() => getFindAllByIsAble(page, isAble));
            setFoodStampsPaginated(response.data);

            return response;
        },
        [run, getFindAllByIsAble]
    );

    const fetchFindAllPaginated = useCallback(
        async (page) => {
            const response = await run(() => getFindAllPaginated(page));
            setFoodStampsPaginated(response.data);

            return response;
        },
        [run, getFindAllPaginated]
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
        fetchDonate,
        fetchOptions,
        fetchFindById,
        includeFoodStamp,
        fetchFindAllByIsAble,
        fetchFindAllPaginated,
        fetchFindAllByCharityName,
        requestState,
        setFoodStamp
    };
};

export default useFoodStampService;
