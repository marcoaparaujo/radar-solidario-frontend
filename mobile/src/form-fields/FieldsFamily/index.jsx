//#region Imports

import FieldInput from 'containers/FieldInput/index';
import React, { Fragment } from 'react';
import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import AUTHENTICATION_LABELS from 'utils/constants/labels/authentication';
import FAMILY_LABELS from 'utils/constants/labels/family';
import cpf from 'utils/validations/masks/cpf';
import maxLength from 'utils/validations/masks/maxLength';

//#endregion

const FieldsFamily = () => (
    <Fragment>
        <FieldInput name={FAMILY_FIELDS.CPF} label={FAMILY_LABELS.CPF} mask={cpf} />
        <FieldInput name={FAMILY_FIELDS.NIS} label={FAMILY_LABELS.NIS} mask={(value) => maxLength(value, 11)} />

        <FieldInput
            name={AUTHENTICATION_FIELDS.EMAIL}
            label={AUTHENTICATION_LABELS.EMAIL}
            mask={(value) => maxLength(value, 80)}
        />
    </Fragment>
);

export default FieldsFamily;
