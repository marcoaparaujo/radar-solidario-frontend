//#region Imports

import { useCallback } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import useGetData from './services/useGetData';
import useSendData from './services/useSendData';

//#endregion

const useFoodStampService = ({ setOptions, setFoodStamp, setFoodStamps }) => {
    const { run, requestState } = useRequestState();

    const { postFoodStamp, postDonate } = useSendData();
    const {
        getFindById,
        getFindOptions,
        getFindAllByIsAble,
        getFindAllPaginated,
        getFindAllByCharityName,
        getFindAllDonatesPaginated
    } = useGetData();

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

    const fetchFindAllByCharityName = useCallback(
        async (form) => {
            const response = await run(() => getFindAllByCharityName(form));
            setFoodStamps(response.data);

            return response;
        },
        [run, getFindAllByCharityName]
    );

    const fetchFindAllPaginated = useCallback(
        async (page = 0, order = 'weight') => {
            const response = await run(() => getFindAllPaginated(page, order));
            return response;
        },
        [run, getFindAllPaginated]
    );

    const fetchFindAllByIsAblePaginated = useCallback(
        async (page = 0, isAble = true, order = 'weight') => {
            const response = await run(() => getFindAllByIsAble(page, order, isAble));
            return response;
        },
        [run, getFindAllByIsAble]
    );

    const fetchFindAllDonatesPaginated = useCallback(
        async (page = 0) => {
            const response = await run(() => getFindAllDonatesPaginated(page));
            return response;
        },
        [run, getFindAllDonatesPaginated]
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
        fetchFindAllPaginated,
        fetchFindAllByCharityName,
        fetchFindAllDonatesPaginated,
        fetchFindAllByIsAblePaginated,
        requestState,
        setFoodStamp
    };
};

export default useFoodStampService;
