//#region Imports

import { useCallback, useEffect } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import { getFamily } from './services/get-data';
import { postFamily } from './services/send-data';

//#endregion

const useFamilyService = ({ setIsLoading, setFamily, setErrors }) => {
    const { run, requestState } = useRequestState();

    useEffect(() => {
        setIsLoading(requestState.isLoading);
    }, [requestState]);

    const fetchFamily = useCallback(async () => {
        const { data, errors } = await run(() => getFamily());
        setFamily(data, errors);
    }, [run, setFamily]);

    const includeFamily = useCallback((form) => run(() => postFamily(form)), [run]);

    return {
        fetchFamily,
        includeFamily
    };
};

export default useFamilyService;
