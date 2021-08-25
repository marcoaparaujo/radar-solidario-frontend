//#region Imports

import useRequestState from 'utils/hooks/useRequestState';

//#endregion

const useDonateService = () => {
    const { run, requestState } = useRequestState();

    return {
        requestState
    };
};

export default useDonateService;
