//#region Imports

import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';
import { ROUTE_NAMES } from 'routes/routes';
import MISC_ERRORS from 'utils/constants/errors/misc';

//#endregion

const useRequestError = () => {
    const { navigate } = useNavigation();

    const getAction = useMemo(
        () => ({
            401: () => navigate(ROUTE_NAMES.AUTHENTICATION)
        }),
        [navigate]
    );

    const getError = useCallback(
        (error) => {
            const errors = error && error.data && error.data.errors;
            if (errors && errors.length) {
                const action = getAction[error.status];
                action && action();

                return errors;
            }

            return Array(MISC_ERRORS.UNKNOW);
        },
        [getAction]
    );

    return {
        getError
    };
};

export default useRequestError;
