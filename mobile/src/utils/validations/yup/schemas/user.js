//#region Imports

import yup from '../yup';
import USER_FIELDS from './../../../constants/fields/user';
import USER_LABELS from './../../../constants/labels/user';

//#endregion

export const userRegisterSchema = yup.object().shape({
    [USER_FIELDS.SEARCH]: yup.string().required().min(11).max(14).label(USER_FIELDS.SEARCH)
});

const userSchema = yup.object().shape({
    [USER_FIELDS.THIS]: yup.string().required().min(1).max(255).label(USER_LABELS.NAME),
    [USER_FIELDS.PHONE]: yup.string().required().min(14).max(14).label(USER_LABELS.PHONE),
    [USER_FIELDS.CPF]: yup.string().required().min(14).max(14).label(USER_LABELS.CPF)
});

export default userSchema;
