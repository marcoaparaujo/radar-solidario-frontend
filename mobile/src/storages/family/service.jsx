//#region Imports

import { useCallback, useEffect } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import useGetData from './services/useGetData';
import useSendData from './services/useSendData';

//#endregion

const useFamilyService = ({ setIsLoading, setFamily }) => {
    const { getFamily } = useGetData();
    const { postFamily } = useSendData();

    const { run, requestState } = useRequestState();

    useEffect(() => {
        setIsLoading(requestState.isLoading);
    }, [requestState]);

    const fetchFamily = useCallback(async () => {
        const response = await run(() => getFamily());
        const { data, errors } = response;

        setFamily(data, errors);
        return response;
    }, [run, getFamily, setFamily]);

    const includeFamily = useCallback(
        async (form) => {
            const response = await run(() => postFamily(form));
            const { data, errors } = response;

            setFamily(data, errors);
            return response;
        },
        [run, postFamily, setFamily]
    );

    return {
        fetchFamily,
        includeFamily
    };
};

export default useFamilyService;
