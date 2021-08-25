//#region Imports
import FieldSearch from 'components/FieldSearch';
import React from 'react';
import { FormContextProvider } from 'storages/form/context';
import HISTORIC_PLACEHOLDERS from './../../../utils/constants/placeholder/historic';
//#endregion

const Content = () => {
    return <FieldSearch name={'Formulario'} placeholder={HISTORIC_PLACEHOLDERS.SEARCH} />;
};

const FormHistoricSearch = () => (
    <FormContextProvider>
        <Content />
    </FormContextProvider>
);

export default FormHistoricSearch;
