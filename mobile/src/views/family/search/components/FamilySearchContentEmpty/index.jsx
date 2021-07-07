//#region Imports

import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import useStyles from './styles';

//#endregion

const FamilySearchContentEmpty = () => {
    const styles = useStyles();
    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Resultado não encontrado</Text>
            <Button onPress={() => navigate(ROUTE_NAMES.FAMILY.REGISTER)}>Cadastrar manualmente</Button>
        </View>
    );
};

export default FamilySearchContentEmpty;
