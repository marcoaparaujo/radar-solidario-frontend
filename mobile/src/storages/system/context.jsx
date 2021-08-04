//#region Imports

import React, { createContext, useCallback, useContext, useState } from 'react';
import SYSTEM_FIELDS from 'utils/constants/fields/system';

//#endregion

const SystemContext = createContext();

const initialState = {
    [SYSTEM_FIELDS.ROLE]: null,
    [SYSTEM_FIELDS.NAME]: null,
    [SYSTEM_FIELDS.TOKEN]: null,
    [SYSTEM_FIELDS.CHARITY]: null,
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
        ({ roles, name, token, charity }) => setState((prevState) => ({ ...prevState, roles, name, token, charity })),
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

    return (
        <SystemContext.Provider value={{ ...state, setTheme, setLogin, setSnackbar }}>
            {children}
        </SystemContext.Provider>
    );
};

const useSystemContext = () => {
    const context = useContext(SystemContext);

    return { ...context };
};

export default useSystemContext;
