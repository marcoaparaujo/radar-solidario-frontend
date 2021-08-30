//#region Imports

import React, { createContext, useCallback, useContext, useState } from 'react';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import useFamilyService from './service';

//#endregion

const FamilyContext = createContext();

const initialState = {
    [FAMILY_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const FamilyContextProvider = ({ children, defaultValues }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setFamily = useCallback((family) => setState((prevState) => ({ ...prevState, family })), [setState]);

    const service = useFamilyService({ setFamily });
    return <FamilyContext.Provider value={{ ...service, ...state }}>{children}</FamilyContext.Provider>;
};

const useFamilyContext = () => ({ ...useContext(FamilyContext) });

export default useFamilyContext;
