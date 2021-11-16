//#region Imports

import React, { createContext, useCallback, useContext, useState } from 'react';
import CHARITY_FIELDS from 'utils/constants/fields/charity';
import SYSTEM_FIELDS from 'utils/constants/fields/system';
import USER_FIELDS from 'utils/constants/fields/user';

//#endregion

const SystemContext = createContext();

const initialState = {
    [USER_FIELDS.THIS]: null,
    [SYSTEM_FIELDS.ROLE]: null,
    [SYSTEM_FIELDS.TOKEN]: null,
    [CHARITY_FIELDS.THIS]: null,
    [SYSTEM_FIELDS.THEME]: 'light',
    [SYSTEM_FIELDS.SNACKBAR]: {
        time: 3000,
        errors: [],
        action: null,
        visible: false
    }
};

export const SystemContextProvider = ({ children, defaultValues }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setTheme = useCallback((theme = 'light') => setState((prevState) => ({ ...prevState, theme })), [setState]);

    const setLogin = useCallback(
        ({ token, roles, user, charity }) => setState((prevState) => ({ ...prevState, token, roles, user, charity })),
        [setState]
    );

    const setSnackbar = useCallback(
        (visible = false, errors = [], action = null, time = 3000) =>
            setState((prevState) => ({
                ...prevState,
                snackbar: { time, errors, action, visible }
            })),
        [setState]
    );

    const reset = useCallback(() => setState(initialState), [setState]);

    return (
        <SystemContext.Provider value={{ ...state, reset, setTheme, setLogin, setSnackbar }}>
            {children}
        </SystemContext.Provider>
    );
};

const useSystemContext = () => ({ ...useContext(SystemContext) });

export default useSystemContext;
