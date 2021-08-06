//#region Imports

import CHARITY_FIELDS from 'utils/constants/fields/charity';
import CHARITY_LABELS from 'utils/constants/labels/charity';
import yup from '../yup';

//#endregion

export const charitySelectSchema = yup.object().shape({
    [CHARITY_FIELDS.THIS]: yup.string().required().label(CHARITY_LABELS.THIS)
});
