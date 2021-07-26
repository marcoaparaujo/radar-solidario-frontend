//#region Imports

import Logo from 'assets/images/logo.gif';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Image } from 'react-native-elements';
import useFamilyContext, { FamilyContextProvider } from 'storages/family/context';
import FamilySearchContent from './components/FamilySearchContent';
import FamilySearchContentEmpty from './components/FamilySearchContentEmpty';
import FormSearchFamily from './FormFamilySearch';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();
    const { family } = useFamilyContext();

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.image} resizeMode='contain' />
            <FormSearchFamily />

            <View style={styles.content}>
                {family ? <FamilySearchContent data={family} /> : <FamilySearchContentEmpty />}
            </View>
        </View>
    );
};

const FamilySearch = () => (
    <ScrollView>
        <FamilyContextProvider>
            <Content />
        </FamilyContextProvider>
    </ScrollView>
);

export default FamilySearch;
