//#region Imports

import { useCallback } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import useSendData from './services/useSendData';

//#endregion

const useUserService = ({ setUser }) => {
    const { run, requestState } = useRequestState();

    const { postIncludeVoluntary } = useSendData();

    const includeVoluntary = useCallback(
        async (form) => {
            const response = await run(() => postIncludeVoluntary(form));
            setUser(response.data);

            return response;
        },
        [run, postIncludeVoluntary, setUser]
    );

    return {
        requestState,
        includeVoluntary
    };
};

export default useUserService;
