//#region Imports

import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import AUTHENTICATION_LABELS from 'utils/constants/labels/authentication';
import FAMILY_LABELS from 'utils/constants/labels/family';
import emptyStringToUndefined from 'utils/validations/yup/conversors/emptyStringToUndefined';
import yup from '../yup';

//#endregion

const familySchema = yup.object().shape({
    [FAMILY_FIELDS.CPF]: yup.string().required().min(14).max(14).label(FAMILY_LABELS.CPF),
    [AUTHENTICATION_FIELDS.EMAIL]: yup.string().email().required().min(6).max(80).label(AUTHENTICATION_LABELS.EMAIL),
    [FAMILY_FIELDS.NIS]: yup
        .number()
        .required()
        .transform(emptyStringToUndefined)
        .min(11)
        .max(11)
        .label(FAMILY_LABELS.NIS)
});

export default familySchema;
