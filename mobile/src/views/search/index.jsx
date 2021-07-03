//#region Imports

import { useNavigation } from '@react-navigation/native';
import Logo from 'assets/images/logo.gif';
import Button from 'components/Button';
import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Image, SearchBar } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import { FormContextProvider } from './../../storages/form/context';
import useStyles from './styles';

//#endregion

const Search = () => (
    <FormContextProvider>
        <SearchContent />
    </FormContextProvider>
);

const SearchContent = () => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.image} resizeMode='contain' />

            <View>
                <SearchBar style={styles.search} placeholder='Pesquisar NIS/CPF' />
            </View>
        </View>
    );
};

const Search = () => {
    const { navigate } = useNavigation();

    return (
        <Fragment>
            <Button onPress={() => navigate(ROUTE_NAMES.FAMILY.REGISTER)}>Cadastrar manualmente</Button>
        </Fragment>
    );
};

export default Search;
