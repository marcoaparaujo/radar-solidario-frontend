//#region Imports

import USER_FIELDS from 'utils/constants/fields/user';
import USER_LABELS from 'utils/constants/labels/user';
import yup from '../yup';

//#endregion

export const userRegisterSchema = yup.object().shape({
    [USER_FIELDS.SEARCH]: yup.string().required().min(11).max(14).label(USER_FIELDS.SEARCH)
});

const userSchema = yup.object().shape({
    [USER_FIELDS.CPF]: yup.string().required().min(14).max(14).label(USER_LABELS.CPF),
    [USER_FIELDS.NAME]: yup.string().required().min(1).max(200).label(USER_LABELS.NAME),
    [USER_FIELDS.GENDER]: yup.string().required().min(1).max(10).label(USER_LABELS.GENDER),
    [USER_FIELDS.BIRTH]: yup.string().required().min(10).max(10).label(USER_LABELS.CELL_PHONE),
    [USER_FIELDS.CELL_PHONE]: yup.string().required().min(16).max(16).label(USER_LABELS.CELL_PHONE)
});

export default userSchema;
