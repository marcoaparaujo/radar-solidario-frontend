//#region Imports

import { useCallback } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import useGetData from './services/useGetData';
import useSendData from './services/useSendData';

//#endregion

const useFoodStampService = ({ setFoodStamp }) => {
    const { run, requestState } = useRequestState();

    return {
        requestState
    };
};

export default useFoodStampService;
