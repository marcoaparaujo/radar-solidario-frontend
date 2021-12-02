//#region Imports

import { useNavigation } from '@react-navigation/native';
import InfoBoard from 'components/InfoBoard';
import React, { Fragment, useCallback } from 'react';
import { ScrollView, View } from 'react-native';
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
    const { charity, user, reset } = useSystemContext();

    const logoff = useCallback(() => {
        reset();
        navigate(ROUTE_NAMES.AUTHENTICATION);
    }, [reset, navigate]);

    return (
        <Fragment>
            <View style={styles.header}>
                <View style={styles.user}>
                    <Icon iconStyle={styles.icon} name='user-circle' size={70} type='font-awesome' />

                    <Text style={styles.logoff} onPress={() => logoff()}>
                        Sair
                    </Text>
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
