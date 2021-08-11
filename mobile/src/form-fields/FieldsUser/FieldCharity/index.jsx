//#region Imports

import FieldPicker from 'containers/FieldPicker';
import React, { useEffect } from 'react';
import useCharityContext from 'storages/charity/context';
import CHARITY_FIELDS from 'utils/constants/fields/charity';
import CHARITY_LABELS from 'utils/constants/labels/charity';

//#endregion

const FieldCharity = () => {
    const { options, fetchOptions, requestState } = useCharityContext();

    useEffect(() => {
        (async () => {
            await fetchOptions();
        })();
    }, []);

    return (
        <FieldPicker
            options={options}
            name={CHARITY_FIELDS.THIS}
            label={CHARITY_LABELS.THIS}
            isLoading={requestState.isLoading}
        />
    );
};

export default FieldCharity;
