//#region Imports

import FieldInput from 'containers/FieldInput';
import React, { useMemo } from 'react';
import useFoodStampContext from 'storages/food-stamp/context';
import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
import FOOD_STAMP_LABELS from 'utils/constants/labels/food-stamp';
import max from 'utils/validations/masks/max';

//#endregion

const FieldLength = () => {
    const { foodStamp, requestState } = useFoodStampContext();

    const maxLength = useMemo(() => foodStamp && foodStamp.length, [foodStamp]);

    return (
        <FieldInput
            isDisabled={!foodStamp}
            name={FOOD_STAMP_FIELDS.LENGTH}
            label={FOOD_STAMP_LABELS.LENGTH}
            isLoading={requestState.isLoading}
            mask={(value) => max(value, maxLength)}
        />
    );
};

export default FieldLength;
