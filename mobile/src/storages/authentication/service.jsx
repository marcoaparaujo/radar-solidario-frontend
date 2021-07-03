//#region Imports

import { useCallback, useEffect } from 'react';
import useSystemContext from 'storages/system/context';
import useRequestState from 'utils/hooks/useRequestState';
import useSendData from './services/useSendData';

//#endregion

const useAuthenticationService = ({ setIsLoading, setErrors }) => {
    const { postLogin } = useSendData();
    const { setLogin } = useSystemContext();
    const { run, requestState } = useRequestState();

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
        [run, postLogin, setErrors, setLogin]
    );

    return {
        fetchLogin,
        requestState
    };
};

export default useAuthenticationService;
