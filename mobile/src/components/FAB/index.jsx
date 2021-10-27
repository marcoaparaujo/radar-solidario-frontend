//#region Imports

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FAB as FABNative } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import useStyles from './styles';

//#endregion

const FAB = () => {
    const styles = useStyles();
    const { navigate } = useNavigation();

    return (
        <FABNative
            visible
            size='large'
            color='#F15B5B'
            containerStyle={{
                width: 'auto',
                position: 'absolute',
                right: 10
            }}
            icon={{ name: 'plus', size: 20, color: 'black' }}
            onPress={() => navigate(ROUTE_NAMES.FOOD_STAMP.REGISTER)}
        />
    );
};

export default FAB;
