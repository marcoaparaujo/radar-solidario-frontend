//#region Imports

import FieldSearch from 'components/FieldSearch';
import React, { useCallback } from 'react';
import useFamilyContext from 'storages/family/context';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import FAMILY_PLACEHOLDERS from 'utils/constants/placeholder/family';
import { familySearchSchema } from 'utils/validations/yup/schemas/family';

//#endregion

const Content = () => {
    const { handleSubmit } = useFormContext();
    const { fetchFamily } = useFamilyContext();

    const onSubmit = useCallback(async ({ search }) => {
        await fetchFamily(search);
    }, []);

    return (
        <FieldSearch
            name={FAMILY_FIELDS.SEARCH}
            onPress={() => handleSubmit(onSubmit)}
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
