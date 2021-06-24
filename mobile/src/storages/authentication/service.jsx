//#region Imports

import { useCallback, useEffect } from 'react';
import useSystemContext from 'storages/system/context';
import useRequestState from 'utils/hooks/useRequestState';
import { postLogin } from './services/send-data';

//#endregion

const useAuthenticationService = ({ setIsLoading, setErrors }) => {
    const { run, requestState } = useRequestState();
    const { setLogin, setSnackbar } = useSystemContext();

    useEffect(() => {
        setIsLoading(requestState.isLoading);

        requestState.errors && setSnackbar(true, requestState.errors);
    }, [requestState]);

    const fetchLogin = useCallback(
        (form) => {
            return run(() =>
                postLogin(form)
                    .then(({ data }) => setLogin(data))
                    .catch(({ response: { data } }) => {
                        setErrors(data.errors);
                    })
            );
        },
        [run]
    );

    return {
        fetchLogin,
        requestState
    };
};

export default useAuthenticationService;
