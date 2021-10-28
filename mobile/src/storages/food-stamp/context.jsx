//#region Imports

import React, { createContext, useCallback, useContext, useRef, useState } from 'react';
import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
import CONTEXT_INITIAL_STATE from 'utils/constants/types/context-initial-state';
import useFoodStampService from './service';

//#endregion

const FoodStampContext = createContext();

const initialState = {
    [FOOD_STAMP_FIELDS.THIS]: null,
    [FOOD_STAMP_FIELDS.DONATES]: [],
    [FOOD_STAMP_FIELDS.FOOD_STAMPS]: [],
    ...CONTEXT_INITIAL_STATE,
    pagination: {
        page: 0,
        last: false
    }
};

export const FoodStampContextProvider = ({ children, defaultValues }) => {
    const modalConfirmDonateRef = useRef(null);
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const setFoodStamp = useCallback((foodStamp) => setState((prevState) => ({ ...prevState, foodStamp })), [setState]);

    const setFoodStamps = useCallback(
        (foodStamps) => setState((prevState) => ({ ...prevState, foodStamps })),
        [setState]
    );

    const setFoodStampsPaginated = useCallback(
        ({ content, last, number }) =>
            setState((prevState) => ({ ...prevState, foodStamps: content, pagination: { last, page: number } })),
        [setState]
    );

    const setFoodStampsInfinityPaginated = useCallback(
        ({ content, last, number }) =>
            setState((prevState) => ({
                ...prevState,
                pagination: { last, page: number },
                foodStamps: [...prevState.foodStamps, ...content]
            })),
        [setState]
    );

    const setDonatesInfinityPaginated = useCallback(
        ({ content, last, number }) =>
            setState((prevState) => ({
                ...prevState,
                pagination: { last, page: number },
                donates: [...prevState.donates, ...content]
            })),
        [setState]
    );

    const setOptions = useCallback((options) => setState((prevState) => ({ ...prevState, options })), [setState]);

    const service = useFoodStampService({ setOptions, setFoodStamp, setFoodStamps });
    return (
        <FoodStampContext.Provider
            value={{
                ...service,
                ...state,
                modalConfirmDonateRef,
                setFoodStampsPaginated,
                setDonatesInfinityPaginated,
                setFoodStampsInfinityPaginated
            }}
        >
            {children}
        </FoodStampContext.Provider>
    );
};

const useFoodStampContext = () => ({ ...useContext(FoodStampContext) });

export default useFoodStampContext;
