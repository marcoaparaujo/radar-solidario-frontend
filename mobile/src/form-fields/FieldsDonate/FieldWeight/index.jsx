//#region Imports

import FieldPicker from 'containers/FieldPicker';
import React, { useCallback, useEffect } from 'react';
import useFoodStampContext from 'storages/food-stamp/context';
import useSystemContext from 'storages/system/context';
import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
import FOOD_STAMP_LABELS from 'utils/constants/labels/food-stamp';

//#endregion

const FieldWeight = () => {
    const { user } = useSystemContext();
    const { options, fetchOptions, fetchFindById, requestState } = useFoodStampContext();

    useEffect(() => {
        (async () => {
            await fetchOptions(user.id);
        })();
    }, []);

    const getLength = useCallback(async (option) => {
        await fetchFindById(option);
    }, []);

    return (
        <FieldPicker
            options={options}
            name={FOOD_STAMP_FIELDS.WEIGHT}
            label={FOOD_STAMP_LABELS.WEIGHT}
            isLoading={requestState.isLoading}
            onChange={(value) => getLength(value)}
        />
    );
};

export default FieldWeight;
