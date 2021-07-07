//#region Imports

import { useCallback, useState } from 'react';
import useSystemContext from 'storages/system/context';
import sleep from 'utils/functions/sleep';
import useRequestError from './useRequestError';

//#endregion

const initalState = {
    data: null,
    errors: null,
    isLoading: false
};

const initialOptions = {
    sleep: false,
    autoClear: false,
    sleepTimeout: null,
    showSnackbar: true
};

const useRequestState = () => {
    const { getError } = useRequestError();
    const { setSnackbar } = useSystemContext();
    const [requestState, setRequestState] = useState(initalState);

    const clear = useCallback((timeout = 100) => setTimeout(() => setRequestState(initalState), timeout), []);

    const clearRequestState = useCallback((options) => options.autoClear && clear(5000), []);
    const waitResults = useCallback((options) => options.sleep && sleep(options.sleepTimeout || 3000), []);

    const run = useCallback(
        async (callback, options = initialOptions) => {
            options = { ...initialOptions, ...options };

            setRequestState({ ...initalState, isLoading: true });
            waitResults(options);

            let response = null;
            await callback()
                .then(({ data }) => {
                    response = { ...initalState, ...data };
                })
                .catch(({ response: error }) => {
                    const fltError = getError(error);
                    clearRequestState(options);

                    options.showSnackbar && setSnackbar(true, fltError);
                    response = { ...initalState, errors: fltError };
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
