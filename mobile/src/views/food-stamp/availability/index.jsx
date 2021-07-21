//#region Imports

import Button from 'components/Button';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import InfoUnavailability from './components/InfoUnavailability';
import FormAvailiability from './FormAvailiability';
import useStyles from './styles';

//#endregion

const FoodStampAvailability = () => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <View>
                <FormAvailiability />
                <InfoUnavailability />
            </View>

            <View>
                <View style={styles.info}>
                    <Text style={styles.text}>01 cestas de 04kg</Text>
                    <Text style={styles.text}>será indisponibilizada</Text>
                </View>

                <Button>Confirmar cadastro</Button>
            </View>
        </View>
    );
};

export default FoodStampAvailability;
