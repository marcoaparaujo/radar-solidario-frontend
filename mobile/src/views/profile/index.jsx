//#region Imports

import { useNavigation } from '@react-navigation/native';
import InfoBoard from 'components/InfoBoard';
import React, { Fragment, useCallback } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import { FormContextProvider } from 'storages/form/context';
import useSystemContext from 'storages/system/context';
import CHARITY_FIELDS from 'utils/constants/fields/charity';
import USER_FIELDS from 'utils/constants/fields/user';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();

    const { navigate } = useNavigation();
    const { charity, user } = useSystemContext();

    const logoff = useCallback(() => {
        navigate(ROUTE_NAMES.AUTHENTICATION);
    }, [navigate]);

    return (
        <Fragment>
            <View style={styles.header}>
                <View style={styles.user}>
                    <Icon iconStyle={styles.icon} name='user-circle' size={70} />

                    <TouchableOpacity onPress={() => logoff()}>
                        <Text style={styles.logoff}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <InfoBoard icon='user' label='Nome' value={user[USER_FIELDS.NAME]} />
                <InfoBoard icon='users' label='Entidade' value={charity[CHARITY_FIELDS.NAME]} />
            </View>
        </Fragment>
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
