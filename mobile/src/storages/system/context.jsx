//#region Imports

import React, { createContext, useCallback, useContext, useState } from 'react';
import SYSTEM_FIELDS from 'utils/constants/fields/system';

//#endregion

const { TOKEN, NAME, ROLE } = SYSTEM_FIELDS;

const SystemContext = createContext();

const initialState = {
    [ROLE]: null,
    [NAME]: null,
    [TOKEN]: null
};

export const SystemContextProvider = ({ children, defaultValues }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setLogin = useCallback(
        ({ roles, name, token }) => setState((prevState) => ({ ...prevState, roles, name, token })),
        [setState]
    );

    return <SystemContext.Provider value={{ state, setLogin }}>{children}</SystemContext.Provider>;
};

const useSystemContext = () => {
    const { state, setLogin } = useContext(SystemContext);

    return { setLogin, ...state };
};

export default useSystemContext;
