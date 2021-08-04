//#region Imports

import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
import FOOD_STAMP_LABELS from 'utils/constants/labels/food-stamp';
import yup from '../yup';

//#endregion

const foodStampSchema = yup.object().shape({
    [FOOD_STAMP_FIELDS.LENGHT]: yup.number().required().label(FOOD_STAMP_LABELS.LENGHT),
    [FOOD_STAMP_FIELDS.WEIGHT]: yup.number().required().label(FOOD_STAMP_LABELS.WEIGHT)
});

export default foodStampSchema;
