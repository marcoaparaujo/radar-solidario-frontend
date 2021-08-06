//#region Imports

import { useCallback } from 'react';
import useApi from 'services/useApi';
import ENDPOINT from 'services/endpoint';

//#endregion

const useGetData = () => {
    const api = useApi();

    const getFamilyByNisOrCpf = useCallback((nisCpf) => api.get(ENDPOINT.FAMILY.FIND_BY_NIS_OR_CPF(nisCpf)), [api]);

    return {
        getFamilyByNisOrCpf
    };
};

export default useGetData;
