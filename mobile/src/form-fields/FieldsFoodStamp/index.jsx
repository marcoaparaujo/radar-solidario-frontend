//#region Imports

import FieldInput from 'containers/FieldInput';
import React, { Fragment } from 'react';
import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
import FOOD_STAMP_LABELS from 'utils/constants/labels/food-stamp';

//#endregion

const FieldsFoodStamp = () => (
    <Fragment>
        <FieldInput name={FOOD_STAMP_FIELDS.WEIGHT} label={FOOD_STAMP_LABELS.WEIGHT} />
        <FieldInput name={FOOD_STAMP_FIELDS.LENGTH} label={FOOD_STAMP_LABELS.LENGTH} />
    </Fragment>
);

export default FieldsFoodStamp;
