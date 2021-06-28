//#region Imports

import React, { Fragment } from 'react';
import Logo from 'assets/images/logo.gif';
import FieldInput from 'containers/FieldInput/index';
import { FormContextProvider } from './../../storages/form/context';
import { View } from 'react-native';
import { Image } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import useStyles from './styles';
//#endregion


const Search = () => (
    <FormContextProvider>
        <SearchContent />
    </FormContextProvider>


)

const SearchContent = () => {
    const styles = useStyles();

    return(
        <View style = {styles.container}>
             <Image source={Logo} style={styles.image} resizeMode='contain' />

        <View>

        <SearchBar
            style = {styles.search}
            placeholder="Pesquisar NIS/CPF"
            />

        </View>

        </View>
    )

}




export default Search;
