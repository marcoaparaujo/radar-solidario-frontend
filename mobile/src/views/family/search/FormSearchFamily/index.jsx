//#region Imports

import FieldSearch from 'components/FieldSearch';
import React, { useCallback } from 'react';
import useFamilyContext from 'storages/family/context';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import FAMILY_PLACEHOLDERS from 'utils/constants/placeholder/family';
import maxLength from 'utils/validations/masks/maxLength';
import { familySearchSchema } from 'utils/validations/yup/schemas/family';

//#endregion

const Content = () => {
    const { handleSubmit } = useFormContext();
    const { fetchFamilyByNisOrCpf } = useFamilyContext();

    const onSubmit = useCallback(async ({ search }) => {
        await fetchFamilyByNisOrCpf(search, { showSnackbar: false });
    }, []);

    return (
        <FieldSearch
            name={FAMILY_FIELDS.SEARCH}
            onPress={handleSubmit(onSubmit)}
            mask={(value) => maxLength(value, 14)}
            placeholder={FAMILY_PLACEHOLDERS.SEARCH}
        />
    );
};

const FormSearchFamily = () => (
    <FormContextProvider schema={familySearchSchema}>
        <Content />
    </FormContextProvider>
);

export default FormSearchFamily;
