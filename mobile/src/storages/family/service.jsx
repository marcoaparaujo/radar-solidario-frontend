//#region Imports

import { useCallback } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import useGetData from './services/useGetData';
import useSendData from './services/useSendData';

//#endregion

const useFamilyService = ({ setFamily }) => {
    const { run, requestState } = useRequestState();

    const { postFamily } = useSendData();
    const { getFamilyByNisOrCpf } = useGetData();

    const includeFamily = useCallback(
        async (form) => {
            const response = await run(() => postFamily(form));
            setFamily(response.data);

            return response;
        },
        [run, postFamily, setFamily]
    );

    const fetchFamilyByNisOrCpf = useCallback(
        async (nisCpf, options) => {
            const response = await run(() => getFamilyByNisOrCpf(nisCpf), options);
            setFamily(response.data);

            return response;
        },
        [run, getFamilyByNisOrCpf, setFamily]
    );

    return {
        requestState,
        includeFamily,
        fetchFamilyByNisOrCpf
    };
};

export default useFamilyService;
