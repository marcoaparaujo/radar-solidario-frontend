//#region Imports

import React, { createContext, useCallback, useContext, useState } from 'react';
import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import useFoodStampService from './service';

//#endregion

const FoodStampContext = createContext();

const initialState = {
    [FOOD_STAMP_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const FoodStampContextProvider = ({ children, defaultValues }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setFoodStamp = useCallback(
        (foodStamp) => setState((prevState) => ({ ...prevState, [FOOD_STAMP_FIELDS.THIS]: foodStamp })),
        [setState]
    );

    const service = useFoodStampService({ setFoodStamp });
    return <FoodStampContext.Provider value={{ ...service, ...state }}>{children}</FoodStampContext.Provider>;
};

const useFoodStampContext = () => {
    const context = useContext(FoodStampContext);

    return { ...context };
};

export default useFoodStampContext;
