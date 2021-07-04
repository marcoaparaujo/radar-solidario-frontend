//#region Imports

import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import AUTHENTICATION_LABELS from 'utils/constants/labels/authentication';
import FAMILY_LABELS from 'utils/constants/labels/family';
import yup from '../yup';

//#endregion

export const familySearchSchema = yup.object().shape({
    [FAMILY_FIELDS.SEARCH]: yup.string().required().min(14).max(14).label(FAMILY_LABELS.SEARCH)
});

const familySchema = yup.object().shape({
    [FAMILY_FIELDS.NIS]: yup.string().required().min(11).max(11).label(FAMILY_LABELS.NIS),
    [FAMILY_FIELDS.CPF]: yup.string().required().min(14).max(14).label(FAMILY_LABELS.CPF),
    [FAMILY_FIELDS.HEAD]: yup.string().required().min(1).max(255).label(FAMILY_LABELS.HEAD),
    [AUTHENTICATION_FIELDS.EMAIL]: yup.string().email().required().min(6).max(80).label(AUTHENTICATION_LABELS.EMAIL)
});

export default familySchema;
