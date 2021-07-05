//#region Imports

import Logo from 'assets/images/logo.gif';
import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Image } from 'react-native-elements';
import { FamilyContextProvider } from 'storages/family/context';
import FamilySearchContent from './FamilySearchContent';
import FamilySearchContentEmpty from './FamilySearchContentEmpty';
import useStyles from './styles';

//#endregion

const Content = () => {
    return (
        <Fragment>
            <FamilySearchContent />
            <FamilySearchContentEmpty />
        </Fragment>
    );
};

const FamilySearch = () => {
    const styles = useStyles();

    return (
        <FamilyContextProvider>
            <View style={styles.container}>
                <Image source={Logo} style={styles.image} resizeMode='contain' />

                <Content />
            </View>
        </FamilyContextProvider>
    );
};

export default FamilySearch;
