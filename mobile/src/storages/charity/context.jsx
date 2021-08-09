//#region Imports

import React, { createContext, useCallback, useContext, useState } from 'react';
import CHARITY_FIELDS from 'utils/constants/fields/charity';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import useCharityService from './service';

//#endregion

const CharityContext = createContext();

const initialState = {
    [CHARITY_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const CharityContextProvider = ({ children, defaultValues }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setCharity = useCallback((charity) => setState((prevState) => ({ ...prevState, charity })), [setState]);

    const setOptions = useCallback((options) => setState((prevState) => ({ ...prevState, options })), [setState]);

    const service = useCharityService({ setCharity, setOptions });
    return <CharityContext.Provider value={{ ...service, ...state }}>{children}</CharityContext.Provider>;
};

const useCharityContext = () => {
    const context = useContext(CharityContext);

    return { ...context };
};

export default useCharityContext;
