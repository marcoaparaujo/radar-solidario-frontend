//#region Imports

import { useCallback, useEffect } from 'react';
import useSystemContext from 'storages/system/context';
import useRequestState from 'utils/hooks/useRequestState';
import { postLogin } from './services/send-data';

//#endregion

const useAuthenticationService = ({ setIsLoading, setErrors }) => {
    const { run, requestState } = useRequestState();
    const { setLogin } = useSystemContext();

    useEffect(() => {
        setIsLoading(requestState.isLoading);
    }, [requestState]);

    const fetchLogin = useCallback(
        async (form) => {
            const response = await run(() => postLogin(form));
            const { data, errors } = response;

            errors.length ? setErrors(errors) : setLogin(data);
            return response;
        },
        [run]
    );

    return {
        fetchLogin,
        requestState
    };
};

export default useAuthenticationService;
