//#region Imports

import { useCallback, useEffect } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import { getFamily } from './services/get-data';

//#endregion

const useFamilyService = ({ setIsLoading, setFamily }) => {
    const { run, requestState } = useRequestState();

    useEffect(() => {
        setIsLoading(requestState.isLoading);
    }, [requestState]);

    const fetchFamily = useCallback(
        async () => {
            const { data, errors } = await run(() => getFamily());
            setFamily(data, errors);
        },
        [run, setFamily]
    );

    return {
        fetchFamily
    };
};

export default useFamilyService;
