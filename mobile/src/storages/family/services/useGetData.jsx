//#region Imports

import { useCallback } from 'react';
import useApi from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

const useGetData = () => {
    const api = useApi();

    const getFamilyByNisOrCpf = useCallback((nisCpf) => api.get(ENDPOINT.FAMILY.GET_BY_NIS_OR_CPF(nisCpf)), [api]);

    return {
        getFamilyByNisOrCpf
    };
};

export default useGetData;
