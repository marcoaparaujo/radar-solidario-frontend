//#region Imports

import { useCallback, useEffect } from 'react';
import useSystemContext from 'storages/system/context';
import useRequestState from 'utils/hooks/useRequestState';
import { postLogin } from './services/send-data';

//#endregion

const useAuthenticationService = ({ setIsLoading, setErrors }) => {
    const { setLogin } = useSystemContext();
    const { run, requestState } = useRequestState();

    useEffect(() => {
        setIsLoading(requestState.isLoading);
    }, [requestState]);

    const fetchLogin = useCallback(
        (form) => {
            return run(() =>
                postLogin(form)
                    .then(({ data }) => setLogin(data))
                    .catch(({ response: { data } }) => {
                        console.log(data);
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
