//#region Imports

import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button';
import React, { Fragment } from 'react';
import { ROUTE_NAMES } from 'routes/routes';

//#endregion

const Search = () => {
    const { navigate } = useNavigation();

    return (
        <Fragment>
            <Button onPress={() => navigate(ROUTE_NAMES.FAMILY.REGISTER)}>Cadastrar manualmente</Button>
        </Fragment>
    );
};

export default Search;
