//#region Imports

import Logo from 'assets/images/logo.gif';
import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Image } from 'react-native-elements';
import { FamilyContextProvider } from 'storages/family/context';
import UserData from '../userData';
import FamilySearchContent from './FamilySearchContent';
import useStyles from './styles';

//#endregion

const Content = () => {
    return (
        <Fragment>
            <FamilySearchContent />
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
                <UserData />
            </View>
        </FamilyContextProvider>
    );
};

export default FamilySearch;
