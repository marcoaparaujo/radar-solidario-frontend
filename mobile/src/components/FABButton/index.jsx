import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { FAB } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import useStyles from './styles';
const FabButton = () => {
    const { navigate } = useNavigation();
    const styles = useStyles();
    return (
        <View style={styles.containerFAB}>
            <FAB
                color='#F15B5B'
                onPress={() => navigate(ROUTE_NAMES.FOOD_STAMP.REGISTER)}
                size='large'
                icon={{
                    name: 'plus',
                    size: 20,
                    color: 'black'
                }}
                visible={true}
            />
        </View>
    );
};

export default FabButton;
