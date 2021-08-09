//#region Imports

import { useCallback } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import useGetData from './services/useGetData';

//#endregion

const useCharityService = ({ setOptions }) => {
    const { run, requestState } = useRequestState();

    const { getFindOptions } = useGetData();

    const fetchOptions = useCallback(async () => {
        const response = await run(() => getFindOptions());
        setOptions(response.data);

        return response;
    }, [run, getFindOptions, setOptions]);

    return {
        requestState,
        fetchOptions
    };
};

export default useCharityService;
