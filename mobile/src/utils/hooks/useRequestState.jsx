//#region Imports

import { useCallback, useState } from 'react';
import useSystemContext from 'storages/system/context';
import sleep from 'utils/functions/sleep';
import useRequestError from './useRequestError';

//#endregion

const initalState = {
    data: null,
    errors: null,
    status: null,
    isLoading: false
};

const initialOptions = {
    sleepTimeout: null,
    showSnackbar: true
};

const useRequestState = () => {
    const { getError } = useRequestError();
    const { setSnackbar } = useSystemContext();

    const [requestState, setRequestState] = useState(initalState);

    const clear = useCallback(() => setRequestState(initalState), []);
    const waitResults = useCallback(({ sleepTimeout }) => sleep(sleepTimeout || 3000), []);

    const run = useCallback(
        async (callback, options) => {
            options = { ...initialOptions, ...options };

            setRequestState({ ...initalState, isLoading: true });
            options.sleepTimeout && waitResults(options);

            let response = null;
            await callback()
                .then(({ data, status }) => {
                    response = { ...initalState, ...data, status };
                })
                .catch(({ response: error }) => {
                    const fltError = getError(error);

                    options.showSnackbar && setSnackbar(true, fltError);
                    response = { ...initalState, errors: fltError, status: error.status };
                })
                .finally(() => setRequestState(response));

            return response;
        },
        [clear]
    );

    return {
        run,
        clear,
        requestState
    };
};

export default useRequestState;
