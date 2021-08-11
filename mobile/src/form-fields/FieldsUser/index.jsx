//#region Imports

import FieldDatePicker from 'containers/FieldDatePicker';
import FieldInput from 'containers/FieldInput/index';
import React, { Fragment } from 'react';
import USER_FIELDS from 'utils/constants/fields/user';
import USER_LABELS from 'utils/constants/labels/user';
import cell from 'utils/validations/masks/cell';
import cpf from 'utils/validations/masks/cpf';
import maxLength from 'utils/validations/masks/maxLength';
import FieldCharity from './FieldCharity';

//#endregion

const FieldsUser = () => (
    <Fragment>
        <FieldInput name={USER_FIELDS.NAME} label={USER_LABELS.NAME} mask={(value) => maxLength(value, 200)} />
        <FieldInput name={USER_FIELDS.CPF} label={USER_LABELS.CPF} mask={cpf} />

        <FieldInput name={USER_FIELDS.CELL_PHONE} label={USER_LABELS.CELL_PHONE} mask={cell} />
        <FieldDatePicker name={USER_FIELDS.BIRTH} label={USER_LABELS.BIRTH} mask={(value) => maxLength(value, 10)} />

        <FieldCharity />
    </Fragment>
);

export default FieldsUser;
