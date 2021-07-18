//#region Imports

import React, { useState } from 'react';
import { ListItem, Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const ListItemComponent = ({ label, children }) => {
    const [expanded, setExpanded] = useState(false);
    const styles = useStyles();

    return (
        <ListItem.Accordion
            style={styles.container}
            content={
                <>
                    <ListItem.Content>
                        <Text style={styles.textmeme}>{label}</Text>
                    </ListItem.Content>
                </>
            }
            isExpanded={expanded}
            onPress={() => {
                setExpanded(!expanded);
            }}
        >
            <ListItem>
                <ListItem.Content>{children}</ListItem.Content>
            </ListItem>
        </ListItem.Accordion>
    );
};

export default ListItemComponent;
