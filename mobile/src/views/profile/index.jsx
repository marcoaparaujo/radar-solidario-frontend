//#region Imports

import React, { Fragment } from 'react';
import useStyles from './styles';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import useSystemContext from 'storages/system/context';
import { FormContextProvider } from './../../storages/form/context';
import { ScrollView } from 'react-native-gesture-handler';
import EmailBoard from './components/EmailBoard';
import PhoneBoard from './components/PhoneBoard/index';
import AdressBoard from './components/AdressBoard/index';
//#endregion

const Content = () => {
    const styles = useStyles();
    const { charity } = useSystemContext();
    return (
        <View>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.profile}>Perfil</Text>
                </View>
                <View style={styles.user}>
                    <Icon name='user-circle' type='font-awesome' size={50} style={styles.icon} />
                    <Text style={styles.charityName}>{charity.name}</Text>
                </View>
            </View>
            <EmailBoard />
            <PhoneBoard />
            <AdressBoard />
        </View>
    );
};

const Profile = () => (
    <ScrollView>
        <FormContextProvider>
            <Content />
        </FormContextProvider>
    </ScrollView>
);

export default Profile;
