//#region Imports

import React, { createContext, useCallback, useContext, useState } from 'react';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import isInvalid from '../../utils/functions/isInvalid';
import useFamilyService from './service';

//#endregion

const FamilyContext = createContext();

const initialState = {
    [FAMILY_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const FamilyContextProvider = ({ children, defaultValues }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setIsLoading = useCallback(
        (isLoading = false) =>
            setState((prevState) => ({
                ...prevState,
                isLoading: isInvalid(isLoading) ? !prevState.isLoading : isLoading
            })),
        [setState]
    );

    const setFamily = useCallback(
        (family, errors = null) => setState((prevState) => ({ ...prevState, family, errors })),
        [setState]
    );

    return <FamilyContext.Provider value={{ state, setIsLoading, setFamily }}>{children}</FamilyContext.Provider>;
};

const useFamilyContext = () => {
    const context = useContext(FamilyContext);
    const service = useFamilyService(context);

    const { state, setIsLoading, setFamily } = context;
    return { setIsLoading, setFamily, ...state, ...service };
};

export default useFamilyContext;
