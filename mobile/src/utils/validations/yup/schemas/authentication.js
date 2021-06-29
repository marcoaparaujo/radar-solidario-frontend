//#region Imports

import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import AUTHENTICATION_LABELS from 'utils/constants/labels/authentication';
import yup from '../yup';

//#endregion

const authenticationSchema = yup.object().shape({
    [AUTHENTICATION_FIELDS.PASSWORD]: yup.string().required().min(8).max(40).label(AUTHENTICATION_LABELS.PASSWORD),
    [AUTHENTICATION_FIELDS.EMAIL]: yup.string().email().required().min(6).max(80).label(AUTHENTICATION_LABELS.EMAIL)
});

export default authenticationSchema;
