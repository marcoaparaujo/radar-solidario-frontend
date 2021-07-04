//#region Imports

import React, { useCallback } from 'react';
import { View } from 'react-native';
import useFamilyContext from 'storages/family/context';
import useFormContext, { FormContextProvider } from 'storages/form/context';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import FAMILY_PLACEHOLDERS from 'utils/constants/placeholder/family';
import { familySearchSchema } from 'utils/validations/yup/schemas/family';
import FieldSearch from 'views/family/search/FieldSearch';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();

    const { handleSubmit } = useFormContext();
    const { fetchFamily } = useFamilyContext();

    const onSubmit = useCallback(async ({ search }) => {
        await fetchFamily(search);
    }, []);

    return (
        <View style={styles.container}>
            <FieldSearch
                name={FAMILY_FIELDS.SEARCH}
                onPress={() => handleSubmit(onSubmit)}
                placeholder={FAMILY_PLACEHOLDERS.SEARCH}
            />
        </View>
    );
};

const FormSearchFamily = () => (
    <FormContextProvider schema={familySearchSchema}>
        <Content />
    </FormContextProvider>
);

export default FormSearchFamily;
