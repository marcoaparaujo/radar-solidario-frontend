//#region Imports

import React, { createContext, useContext, useRef, useState } from 'react';
import DONATE_FIELDS from 'utils/constants/fields/donate';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import useDonateService from './service';

//#endregion

const DonateContext = createContext();

const initialState = {
    [DONATE_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const DonateContextProvider = ({ children, defaultValues }) => {
    const modalConfirmDonateRef = useRef(null);
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const service = useDonateService();
    return (
        <DonateContext.Provider value={{ ...service, ...state, modalConfirmDonateRef }}>
            {children}
        </DonateContext.Provider>
    );
};

const useDonateContext = () => {
    const context = useContext(DonateContext);

    return { ...context };
};

export default useDonateContext;
