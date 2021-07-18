import React, { Fragment } from 'react';
import { ListItem, Text } from 'react-native-elements';
import { View } from 'react-native';
import useStyles from './styles';
import Button from '../../../components/Button/index';
import ListItemComponent from '../ListItemComponent';

const ReservedFoodStamps = () => {
    const styles = useStyles();

    return (
        <Fragment>
            <ListItemComponent>
                <ListItem>
                    <ListItem.Content>
                        <View style={styles.secondcontainer}>
                            <Text style={styles.textdois}>02 Cestas de 04Kg</Text>
                            <Text style={styles.textdois}>01 Cestas de 08Kg</Text>
                            <Button style={styles.button}>Reservar Cestas</Button>
                        </View>
                    </ListItem.Content>
                </ListItem>
            </ListItemComponent>
        </Fragment>
    );
};

export default ReservedFoodStamps;
