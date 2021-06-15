//#region Imports

import FieldInput from 'containers/FieldInput/index';
import React, { Fragment } from 'react';
import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import AUTHENTICATION_LABELS from 'utils/constants/labels/authentication';

//#endregion

const AuthenticationFields = () => (
    <Fragment>
        <FieldInput icon='envelope' name={AUTHENTICATION_FIELDS.EMAIL} label={AUTHENTICATION_LABELS.EMAIL} />
        <FieldInput
            icon='key'
            isPassword
            name={AUTHENTICATION_FIELDS.PASSWORD}
            label={AUTHENTICATION_LABELS.PASSWORD}
        />
    </Fragment>
);

export default AuthenticationFields;
