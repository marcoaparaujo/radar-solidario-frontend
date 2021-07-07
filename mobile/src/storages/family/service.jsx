//#region Imports

import { useCallback, useEffect } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import useGetData from './services/useGetData';
import useSendData from './services/useSendData';

//#endregion

const useFamilyService = ({ setIsLoading, setFamily }) => {
    const { getFamilyByNisOrCpf } = useGetData();
    const { postFamily } = useSendData();

    const { run, requestState } = useRequestState();

    useEffect(() => {
        setIsLoading(requestState.isLoading);
    }, [requestState]);

    const includeFamily = useCallback(
        async (form) => {
            const response = await run(() => postFamily(form));
            const { data, errors } = response;

            setFamily(data, errors);
            return response;
        },
        [run, postFamily, setFamily]
    );

    const fetchFamilyByNisOrCpf = useCallback(
        async (nisCpf, options) => {
            const response = await run(() => getFamilyByNisOrCpf(nisCpf), options);
            const { data, errors } = response;

            setFamily(data, errors);
            return response;
        },
        [run, getFamilyByNisOrCpf, setFamily]
    );

    return {
        includeFamily,
        fetchFamilyByNisOrCpf
    };
};

export default useFamilyService;
