import React, { Fragment } from 'react';
import { ListItem, Text } from 'react-native-elements';
import { View } from 'react-native';
import useStyles from './styles';
import Button from '../../../components/Button/index';
import ListItemComponent from '../ListItemComponent';

const UnavailableFoodStamps = () => {
    const styles = useStyles();

    return (
        <Fragment>
            <ListItemComponent>
                <ListItem>
                    <ListItem.Content>
                        <View style={styles.secondcontainer}>
                            <Text style={styles.textdois}>14 Cestas de 04Kg</Text>
                            <Text style={styles.textdois}>04 Cestas de 1000Kg</Text>
                            <Button style={styles.button}>Alterar Disponibilidade</Button>
                        </View>
                    </ListItem.Content>
                </ListItem>
            </ListItemComponent>
        </Fragment>
    );
};

export default UnavailableFoodStamps;
