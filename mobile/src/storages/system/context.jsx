//#region Imports

import React, { createContext, useCallback, useContext, useState } from 'react';
import SYSTEM_FIELDS from 'utils/constants/fields/system';

//#endregion

const { TOKEN, NAME, ROLE } = SYSTEM_FIELDS;

const SystemContext = createContext();

const initialState = {
    [ROLE]: null,
    [NAME]: null,
    [TOKEN]: null,
    snackbar: {
        time: 3000,
        errors: [],
        action: null,
        visible: false
    }
};

export const SystemContextProvider = ({ children, defaultValues }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setSnackbar = useCallback(
        (visible = false, errors = [], action = null, time = 3000) =>
            setState((prevState) => ({
                ...prevState,
                snackbar: { time, errors, action, visible }
            })),
        [setState]
    );

    const setLogin = useCallback(
        ({ roles, name, token }) => setState((prevState) => ({ ...prevState, roles, name, token })),
        [setState]
    );

    return <SystemContext.Provider value={{ state, setLogin, setSnackbar }}>{children}</SystemContext.Provider>;
};

const useSystemContext = () => {
    const { state, setLogin, setSnackbar } = useContext(SystemContext);

    return { setLogin, setSnackbar, ...state };
};

export default useSystemContext;
