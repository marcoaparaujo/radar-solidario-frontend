//#region Imports

import { useCallback, useEffect } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import { getFamily } from './services/get-data';
import { postFamily } from './services/send-data';

//#endregion

const useFamilyService = ({ setIsLoading, setFamily }) => {
    const { run, requestState } = useRequestState();

    useEffect(() => {
        setIsLoading(requestState.isLoading);
    }, [requestState]);

    const fetchFamily = useCallback(async () => {
        const response = await run(() => getFamily());
        const { data, errors } = response;

        setFamily(data, errors);
        return response;
    }, [run, setFamily]);

    const includeFamily = useCallback(
        async (form) => {
            const response = await run(() => postFamily(form));
            const { data, errors } = response;

            setFamily(data, errors);
            return response;
        },
        [run, setFamily]
    );

    return {
        fetchFamily,
        includeFamily
    };
};

export default useFamilyService;
