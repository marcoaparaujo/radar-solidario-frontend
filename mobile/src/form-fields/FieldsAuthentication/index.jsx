//#region Imports

import FieldInput from 'containers/FieldInput/index';
import React, { Fragment } from 'react';
import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import AUTHENTICATION_LABELS from 'utils/constants/labels/authentication';
import maxLength from 'utils/validations/masks/maxLength';

//#endregion

const FieldsAuthentication = () => (
    <Fragment>
        <FieldInput
            name={AUTHENTICATION_FIELDS.EMAIL}
            label={AUTHENTICATION_LABELS.EMAIL}
            mask={(value) => maxLength(value, 80)}
        />

        <FieldInput
            isPassword
            name={AUTHENTICATION_FIELDS.PASSWORD}
            label={AUTHENTICATION_LABELS.PASSWORD}
            mask={(value) => maxLength(value, 40)}
        />
    </Fragment>
);

export default FieldsAuthentication;
