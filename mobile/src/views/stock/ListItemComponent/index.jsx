//#region Imports

import React from 'react';
import useStyles from '../AvailableStock/styles';
import { ListItem, Text } from 'react-native-elements';

//#endregion

const ListItemComponent = ({ children }) => {
    const styles = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    return (
        <ListItem.Accordion
            style={styles.container}
            content={
                <>
                    <ListItem.Content>
                        <Text style={styles.textmeme}>Estoque Disponível</Text>
                    </ListItem.Content>
                </>
            }
            isExpanded={expanded}
            onPress={() => {
                setExpanded(!expanded);
            }}
        >
            {children}
        </ListItem.Accordion>
    );
};

export default ListItemComponent;
