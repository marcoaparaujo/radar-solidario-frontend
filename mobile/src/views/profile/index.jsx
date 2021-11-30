//#region Imports

import { useNavigation } from '@react-navigation/native';
import React, { Fragment, useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import { FormContextProvider } from 'storages/form/context';
import useSystemContext from 'storages/system/context';
import AdressBoard from './components/AdressBoard';
import EmailBoard from './components/EmailBoard';
import PhoneBoard from './components/PhoneBoard';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();

    const { navigate } = useNavigation();
    const { charity, reset } = useSystemContext();

    const logoff = useCallback(() => {
        reset();
        navigate(ROUTE_NAMES.AUTHENTICATION);
    }, [reset, navigate]);

    return (
        <View>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.profile}>Perfil</Text>
                </View>

                <View style={styles.user}>
                    <Icon name='user-circle' type='font-awesome' size={50} style={styles.icon} />
                    <Text style={styles.charityName}>{charity && charity.name}</Text>

                    <Text style={styles.exit} onPress={() => logoff()}>
                        Sair
                    </Text>
                </View>
            </View>

            {charity && (
                <Fragment>
                    <EmailBoard />
                    <PhoneBoard />
                    <AdressBoard />
                </Fragment>
            )}
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
