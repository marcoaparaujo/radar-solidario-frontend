//#region Imports

import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button';
import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import useFamilyContext from 'storages/family/context';
import useStyles from './styles';

//#endregion

const FamilySearchContentEmpty = () => {
    const styles = useStyles();
    const { navigate } = useNavigation();

    const {
        requestState: { errors, status }
    } = useFamilyContext();

    return (
        <View style={styles.container}>
            {errors && status === 404 && (
                <Fragment>
                    <Text style={styles.text}>Resultado não encontrado</Text>
                    <Button onPress={() => navigate(ROUTE_NAMES.FAMILY.REGISTER)}>Cadastrar manualmente</Button>
                </Fragment>
            )}
        </View>
    );
};

export default FamilySearchContentEmpty;
