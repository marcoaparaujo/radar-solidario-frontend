//#region Imports

import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button';
import React, { Fragment } from 'react';
import { Text } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import useStyles from './styles';

//#endregion

const FamilySearchContentEmpty = () => {
    const styles = useStyles();
    const { navigate } = useNavigation();

    return (
        <Fragment>
            <Text style={styles.text}>Resultado não encontrado</Text>
            <Button onPress={() => navigate(ROUTE_NAMES.FAMILY.REGISTER)}>Cadastrar manualmente</Button>
        </Fragment>
    );
};

export default FamilySearchContentEmpty;
